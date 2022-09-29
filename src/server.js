import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const morganMiddleware = morgan("dev");

app.set("view engine", "pug");
app.use(morganMiddleware);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// ssss

app.listen(PORT, () => console.log(`server is localhost:${PORT} application right now`));
