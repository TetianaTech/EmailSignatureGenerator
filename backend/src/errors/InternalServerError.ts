import { StatusCodes } from "http-status-codes";
import { BaseError } from "./BaseError";

export class InternalServerError extends BaseError {
    constructor(message = 'Internal server error', data?: any) {
      super(message, StatusCodes.INTERNAL_SERVER_ERROR, 'INTERNAL_SERVER_ERROR', data);
    }
  }