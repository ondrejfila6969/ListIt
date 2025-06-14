/* PACKAGES AND UTILS */ 
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';
import ENV from '@src/common/constants/ENV';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import { RouteError } from '@src/common/util/route-errors';
import { NodeEnvs } from '@src/common/constants';

import cors from "cors";
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();

/* ROUTERS */ 
import taskRouter from './routes/tasks/tasks';
import userRouter from './routes/user/user';

/* DB CONNECTION */ 
mongoose
.connect(String(process.env.MONGODB_URL))
.then(() => {console.log("Database connected")})
.catch((err) => {console.error(err)})

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRouter);
app.use("/api/user", userRouter);


app.use(express.urlencoded({extended: true}));
if (ENV.NodeEnv === NodeEnvs.Dev) {
  app.use(morgan('dev'));
}
if (ENV.NodeEnv === NodeEnvs.Production) {
  if (!process.env.DISABLE_HELMET) {
    app.use(helmet());
  }
}
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (ENV.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
    res.status(status).json({ error: err.message });
  }
  return next(err);
});

const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

export default app;
