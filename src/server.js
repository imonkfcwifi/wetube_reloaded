import express from "express";
import morgan from "morgan";
const PORT = 4000;
const app = express();
const morganMiddleware = morgan("dev");

const handleHome = (req, res) => {

    return res.send("i love middle ware");

};

const handleLogin = (req, res) => {
    return res.send("login right away");
}

app.use(morganMiddleware);

app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, () => console.log(`server is localhost:${PORT} application right now`));
