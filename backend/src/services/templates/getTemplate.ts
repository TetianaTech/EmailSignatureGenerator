import { readFile } from 'fs/promises';
import { redis } from '../../config/redis';
import { CONFIG } from '../../config/paths';

export const TEMPLATES_CACHE_KEY = 'templates';

export const getTemplate = async (fileName: string) => {
  try {
    const cacheKey = `${TEMPLATES_CACHE_KEY}:${fileName}`;
    const cachedTemplate = await redis.get(cacheKey);
    if (cachedTemplate) return cachedTemplate;
    const template = await readFile(`${CONFIG.TEMPLATES_PATH}/${fileName}`, 'utf8');
    await redis.set(cacheKey, template, 'EX', 3600);
    return template;
  } catch (error) {
    console.error('Error getting template', error);
    return null;
  }
};