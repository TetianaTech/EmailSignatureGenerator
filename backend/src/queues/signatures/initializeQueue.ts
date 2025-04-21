import { signatureQueue, queueEvents } from './signatureQueue';
import { signatureWorker } from './signatureWorker';

export function setupQueueShutdown() {
  process.on('SIGTERM', async () => {
    await signatureWorker.close();
    await signatureQueue.close();
    await queueEvents.close();
  });
}

export function initializeQueues() {
  setupQueueShutdown();
}