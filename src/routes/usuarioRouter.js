import { Router } from "express";
import { checkUser, editUser, getUserById, login, register } from "../controllers/usuarioController.js"

//MIDDLEWARES
import verifyToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-upload.js";

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/checkUser", checkUser)
router.get("/:id", getUserById)
router.put("/edit/:id", verifyToken, imageUpload.single("imagem"), editUser)



export default router;