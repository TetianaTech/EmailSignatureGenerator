import { Router } from 'express';
import * as TemplateController from '../controllers/templates';

const router = Router();

router.get('/', TemplateController.getTemplates);

export default router;