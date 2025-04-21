import { BaseError } from "./BaseError";
import { StatusCodes } from "http-status-codes";

export class RequestValidationError extends BaseError {
    constructor(message: string, data?: any) {
      super(message, StatusCodes.BAD_REQUEST, 'BAD_REQUEST', data);
    }
  }