import { Router } from "express";
import { postUser } from "../controllers/userController";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get('/', getUsers);
router.post("/", postUser);

export default router;