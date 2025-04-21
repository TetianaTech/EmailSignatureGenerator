import { Request, Response, NextFunction } from "express";
// import * as Sentry from '@sentry/node';
import { BaseError } from "../errors/BaseError";
import { InternalServerError } from "../errors/InternalServerError";

const formatError = (err: BaseError): Record<string, any> => ({
  status: 'error',
  code: err.code,
  message: err.message,
  ...(err.details && { details: err.details }),
  ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
});

export const errorHandler = (err: Error | BaseError, req: Request, res: Response, next: NextFunction): void => {
  // Sentry.captureException(err);
  
  if (err instanceof BaseError) {
    const errorBody = formatError(err);
    res.status(err.statusCode).json(errorBody);
    return;
  }

  const internalError = new InternalServerError();
  const errorBody = formatError(internalError);
  res.status(internalError.statusCode).json(errorBody);
  return;
};
