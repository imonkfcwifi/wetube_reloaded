import express from "express";
const videoRouter = express.Router();

const handleWatchVideos = (req, res) => res.send("watch this videos");
videoRouter.get("/watch", handleWatchVideos);

const handleEdit = (req, res) => res.send("Edit this videos");
videoRouter.get("/edit", handleEdit);

export default videoRouter;