import express from "express";
import { watch, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
// upload를 id로 볼 수 있기때문에 id를 upload 밑에 놔야 함.
// updated : (\\d+)을 사용함으로 인해 digit들만 받아들여서 upload가 어딜가든 상관없어짐
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
// parameter는 url안에 argument를 넣는것을 허용해준다.
export default videoRouter;