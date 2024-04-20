import express, { Express} from "express";
import dotenv from "dotenv";
import {getDeepController} from './controllers/getDeepController'
import { createDeepController } from "./controllers/createDeckController";
import { deleteDeepController } from "./controllers/deleteDeepController";
import { getDeepsController } from "./controllers/getDeepsController";
import { createCardForDeepController } from "./controllers/createCardForDeepController";
import { deleteCardOnDeepController } from "./controllers/deleteCardOnDeepController";


dotenv.config();

const app: Express = express();
app.use(express.json())
const port = process.env.PORT || 3000;

app.get("/deeps", getDeepsController);
app.post("/deeps", createDeepController);
app.delete("/deeps/:deepId", deleteDeepController);
app.get("/deeps/:deepId", getDeepController);
app.post("/deeps/:deepId/cards", createCardForDeepController);
app.delete("/deeps/:deepId/cards/:index", deleteCardOnDeepController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});