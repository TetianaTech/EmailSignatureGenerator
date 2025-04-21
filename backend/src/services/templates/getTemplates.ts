import fs from 'fs/promises';
import { CONFIG } from '../../config/paths';
import { redis } from '../../config/redis';

export const METADATA_CACHE_KEY = 'metadata';

export const getTemplates = async () => {
  const cachedMetadata = await redis.get(METADATA_CACHE_KEY);
  if (cachedMetadata) return JSON.parse(cachedMetadata);
  const metadata = await fs.readFile(CONFIG.METADATA_PATH, 'utf-8');
  await redis.set(METADATA_CACHE_KEY, metadata);
  return JSON.parse(metadata);
};