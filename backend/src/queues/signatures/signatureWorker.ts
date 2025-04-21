import axios from "axios";
import { redisConnection } from "./signatureQueue";
import * as SignatureService from "../../services/signatures/generateSignature";
import { Worker } from "bullmq";
import { GenerateSignaturesJobData } from "./signatureQueue";
import { generateSignatureConfigs } from "../../config/generateSignature";

export const signatureWorker = new Worker<GenerateSignaturesJobData>(generateSignatureConfigs.queueName, async (job) => {
  if (job.name === generateSignatureConfigs.jobName) {
    const { templateFileName, templateData, webhookUrl } = job.data;
    const signature = await SignatureService.generateSignature({ templateFileName, templateData });
    if (webhookUrl) {
      await axios.post(webhookUrl, signature);
    }
  }
}, {
  connection: redisConnection,
  concurrency: generateSignatureConfigs.concurrency,
});