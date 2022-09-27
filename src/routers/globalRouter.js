import express from "express";
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("home");
globalRouter.get("/", handleHome);

const handleJoin = (req, res) => res.send("Join");
globalRouter.get("/join", handleJoin);

export default globalRouter;

