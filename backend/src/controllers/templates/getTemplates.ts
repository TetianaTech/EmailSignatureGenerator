import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as TemplatesService from '../../services/templates';

export const getTemplates = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templates = await TemplatesService.getTemplates();
    res.status(StatusCodes.OK).json(templates);
  } catch (error) {
    next(error);
  }
};
