import { TemplateData } from "./templates";

export interface GenerateSignatureDto {
  templateFileName: string;
  templateData: TemplateData;
}

export interface BulkGenerateSignatureDto {
  templateFileName: string;
  templateDataList: TemplateData[];
  webhookUrl: string;
}

export interface GenerateSignatureResponse {
  html: string;
  plainText: string;
}