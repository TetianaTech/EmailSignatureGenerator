import * as SignatureService from '../../services/signatures';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GenerateSignatureDto } from '@signature-generator/shared';
import { generateSignatureSchema } from './schemas/generateSignatureSchema';
import { RequestValidationError } from '../../errors/RequestValidationError';

export const generateSignature = async (req: Request, res: Response, next: NextFunction) => {
  try {    
    const { error, value } = generateSignatureSchema.validate(req.body);

    if (error) {
      throw new RequestValidationError(error.message);
    }
    
    const generateSignatureDto = value as GenerateSignatureDto;    
    const signature = await SignatureService.generateSignature(generateSignatureDto);
    res.status(StatusCodes.OK).json(signature);
  } catch (error) {
    next(error);
  }
};