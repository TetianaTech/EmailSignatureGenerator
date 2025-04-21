import { TemplateData } from "@signature-generator/shared";

export const generatePlainTextSignature = async (templateData: TemplateData) => {
  const { fullName, email, phone } = templateData;
  return `${fullName}
    ${email}
    ${phone}`.trim();
};