import express from "express";
const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("user is lord");
userRouter.get("/edit", handleEditUser);

export default userRouter;