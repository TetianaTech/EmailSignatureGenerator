import { BulkGenerateSignatureDto } from "@signature-generator/shared";
import { signatureQueue } from "../../queues/signatures/signatureQueue";
import { generateSignatureConfigs } from "../../config/generateSignature";

export const enqueueGenerateSignatures = async (bulkGenerateSignatureDto: BulkGenerateSignatureDto) => {
    const { templateFileName, templateDataList, webhookUrl } = bulkGenerateSignatureDto;
    
    await signatureQueue.addBulk(templateDataList.map(templateData => ({
        name: generateSignatureConfigs.jobName,
        data: {
            templateFileName,
            templateData,
            webhookUrl
        }
    })));
};