import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import fs from "fs";
import path from "path";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(helmet());
app.use(compression());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
// auto-load routes
const routeFiles = fs.readdirSync("./routes").filter(f=>f.endsWith("Routes.js"));
for(const file of routeFiles){
  const name = file.replace("Routes.js","");
  const route = (await import(`./routes/${file}`)).default;
  app.use(`/api/${name}`, route);
}

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`🚀 GuildPulse API running on port ${PORT}`));
