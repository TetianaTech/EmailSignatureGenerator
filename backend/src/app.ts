import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import signatureRouter from './routes/signatures';
import templateRouter from './routes/templates';
import healthRouter from './routes/health';
import { errorHandler } from './middleware/errorHandler';
import { initializeQueues } from './queues/signatures/initializeQueue';
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));
app.use(cors(
  {
    origin: 'http://localhost:5173',
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();

app.use('/assets/template-previews', express.static(path.join(__dirname, 'templates/previews')));
app.use('/api', apiRouter);
apiRouter.use('/health', healthRouter)
apiRouter.use('/templates', templateRouter);
apiRouter.use('/signatures', signatureRouter);
app.use(errorHandler);

initializeQueues();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;