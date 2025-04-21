import api from '../axios'
import type { Template } from '@signature-generator/shared';

export const getTemplates = async (): Promise<Template[]> => {
  const response = await api.get('/templates')
  return response.data
}