import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'OK' });
});

export default router;