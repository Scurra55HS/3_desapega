/**
 * MODEL -> DB BD -> Regras de negócio
 * CONTROLLER -> //Controla o que vem da view e devolve o que vem do Model
 * VIEW -> Páginas
 */

import "dotenv/config"
import express from "express"
import cors from "cors"
import path from "node:path";
import { fileURLToPath } from "node:url";

//^ Importar a conexão com o banco
import conn from "./config/conn.js"

//^ Importar Modulos
import "./models/usuarioModel.js"

//^ Importar as ROTAS
import usuarioRouter from "./routes/usuarioRouter.js"

const PORT = process.env.PORT || 3333
const app = express()

//^ Apontar para pasta public
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//^ middleware

//? (CORS) é um mecanismo usado para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente.
app.use(cors());
//? 
app.use(express.urlencoded({ extended: true }));
//? 
app.use(express.json());

console.log("filename: ", __filename);
console.log("dirname: ", __dirname);

//^ Pasta para os arquivos estáticos
app.use("/public", express.static(path.join(__dirname, "public")));

//~ Utilizar as ROTAS
app.use("/usuarios", usuarioRouter)

app.get("*", (request, response) => {
    response.status(404).json({ message: "Rota não encontrada" })
})
app.listen(PORT, () => {
    console.log(`Servidor on port ${PORT}`);
})
