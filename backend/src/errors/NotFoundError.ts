import { StatusCodes } from "http-status-codes";
import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(message: string, data?: any) {
      super(message, StatusCodes.NOT_FOUND, 'NOT_FOUND', data);
    }
  }