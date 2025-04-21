import { NotFoundError } from "../../errors/NotFoundError";
import { GenerateSignatureDto, TemplateData } from "@signature-generator/shared";
import * as TemplateService from "../templates";
import * as SignatureService from "../signatures";

import Handlebars from "handlebars";

export const generateSignature = async (generateSignatureDto: GenerateSignatureDto) => {
  const { templateFileName, templateData } = generateSignatureDto;
  
  const template = await TemplateService.getTemplate(templateFileName);

  if (!template) {
    throw new NotFoundError(`Template with id ${templateFileName} not found`);
  }

  const htmlTemplate = Handlebars.compile(template);
  const html = htmlTemplate(templateData);
  const plainText = await SignatureService.generatePlainTextSignature(templateData);

  return {
    html,
    plainText,
  };
}