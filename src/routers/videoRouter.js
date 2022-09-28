import express from "express";
import { watch, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", watch);
// upload를 id로 볼 수 있기때문에 id를 upload 밑에 놔야 함.
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
// parameter는 url안에 argument를 넣는것을 허용해준다.
export default videoRouter;