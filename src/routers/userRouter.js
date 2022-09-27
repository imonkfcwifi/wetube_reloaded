import express from "express";
const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("user is lord");
userRouter.get("/edit", handleEditUser);

const handleDeleteUser = (req, res) => res.send("delete");
userRouter.get("/delete", handleDeleteUser);


export default userRouter;