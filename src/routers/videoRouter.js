import express from "express";
const videoRouter = express.Router();
const handleWatchVideos = (req, res) => res.send("watch this videos");
videoRouter.get("/watch", handleWatchVideos);


export default videoRouter;