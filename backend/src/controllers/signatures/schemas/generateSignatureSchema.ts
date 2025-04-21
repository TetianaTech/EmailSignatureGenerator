import Joi from "joi";
import { GenerateSignatureDto, BulkGenerateSignatureDto, TemplateData } from "@signature-generator/shared";

export const templateDataSchema = Joi.object<TemplateData>({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    logoUrl: Joi.string().required(),
});

export const generateSignatureSchema = Joi.object<GenerateSignatureDto>({
    templateFileName: Joi.string().required(),
    templateData: templateDataSchema.required()
});

export const bulkGenerateSignatureSchema = Joi.object<BulkGenerateSignatureDto>({
    templateFileName: Joi.string().required(),
    templateDataList: Joi.array().items(templateDataSchema).required(),
    webhookUrl: Joi.string().required()
});