import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Express = express();
//parser
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Home route😉");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
