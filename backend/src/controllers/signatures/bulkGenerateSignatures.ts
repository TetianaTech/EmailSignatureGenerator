import * as SignatureService from '../../services/signatures';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestValidationError } from '../../errors/RequestValidationError';
import { BulkGenerateSignatureDto } from '@signature-generator/shared';
import { bulkGenerateSignatureSchema } from './schemas/generateSignatureSchema';

export const bulkGenerateSignature = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = bulkGenerateSignatureSchema.validate(req.body);
  
    if (error) {
      throw new RequestValidationError(error.message);
    }

    const bulkGenerateSignatureDto = value as BulkGenerateSignatureDto;
    await SignatureService.enqueueGenerateSignatures(bulkGenerateSignatureDto);
    res.status(StatusCodes.OK).json({ message: 'Signatures have been successfully queued for generation' });
  } catch (error) {
    next(error);
  }
};