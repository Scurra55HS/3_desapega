import { Router } from "express";
import { checkUser, editUser, getUserById, login, register } from "../controllers/usuarioController.js"

//MIDDLEWARES
import verifyToken from "../helpers/verify-token.js"

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/checkUser", checkUser)
router.get("/:id", getUserById)
router.get("/edit/:id",verifyToken, editUser)



export default router;