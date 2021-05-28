import express from "express";
import {getController, createPostController} from "../controller/postsController.js";

const router = express.Router();

router.get('/', getController);
router.post('/', createPostController)

export default router;