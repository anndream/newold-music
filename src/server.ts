import * as sapper from "@sapper/server";
import compression from "compression";
import polka from "polka";
import sirv from "sirv";
import { i18nMiddleware } from "./services/i18n";

const { PORT, NODE_ENV } = process.env;

polka()
  .use(
    "/",
    compression({ threshold: 0 }),
    sirv("static", { dev: NODE_ENV === "development" }),
    i18nMiddleware(),
    sapper.middleware()
  )
  .listen(PORT, (err: Error) => {
    if (err) console.log("error", err);
  });
