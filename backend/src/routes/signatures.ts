import { Router } from 'express';
import * as SignatureController from '../controllers/signatures';

const router = Router();

router.post('/', SignatureController.generateSignature);
router.post('/bulk', SignatureController.bulkGenerateSignature);

router.post('/webhook-test', (req, res) => {
  console.log('Webhook req.body', req.body);
  res.send('Webhook is working');
});

export default router;