import express from "express";
const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("you may contiunue");
    next();
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private room");
}

const handleHome = (req, res) => {
    return res.send("i love middle ware");
};

const handleLogin = (req, res) => {
    return res.send("login right away");
}
app.use(logger);
app.use(privateMiddleware);

app.get("/protected", handleProtected);
app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, () => console.log(`server is localhost:${PORT} application right now`));

