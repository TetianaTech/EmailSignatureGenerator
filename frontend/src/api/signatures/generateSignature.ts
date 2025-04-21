import api from '../axios'
import type { GenerateSignatureDto, GenerateSignatureResponse, TemplateData } from '@signature-generator/shared';

export const generateSignature = async (fileName: string, data: TemplateData): Promise<GenerateSignatureResponse> => {
  const payload: GenerateSignatureDto = {
    templateFileName: fileName,
    templateData: data
  }
  const response = await api.post('/signatures', payload)
  return response.data
}