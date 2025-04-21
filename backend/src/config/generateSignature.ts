import os from "os";

export const generateSignatureConfigs = {
  queueName: 'signature-generation',
  jobName: 'signature-generation-worker',
  concurrency: os.cpus().length || 4,
  attempts: 3,
  backoff: { type: 'exponential', delay: 1000 },
};