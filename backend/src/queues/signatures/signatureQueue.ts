import { TemplateData } from '@signature-generator/shared';
import { Queue, QueueEvents } from 'bullmq';
import { generateSignatureConfigs } from '../../config/generateSignature';

export interface GenerateSignaturesJobData {
  templateFileName: string;
  templateData: TemplateData;
  webhookUrl?: string;
}

export const redisConnection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};


export const signatureQueue = new Queue<GenerateSignaturesJobData>(generateSignatureConfigs.queueName, {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: generateSignatureConfigs.attempts,
    backoff: generateSignatureConfigs.backoff,
    removeOnComplete: true,
  },
});

export const queueEvents = new QueueEvents(generateSignatureConfigs.queueName, {
  connection: redisConnection,
});


queueEvents.on('failed', ({ jobId, failedReason }) => {
  console.error(`Job ${jobId} failed with reason:`, failedReason);
});