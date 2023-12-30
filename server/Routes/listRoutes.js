import express from "express";
import { getList, postList } from "../Controllers/listController.js";
const router = express.Router();

router.get("/", getList);
router.post("/", postList);
export default router;
