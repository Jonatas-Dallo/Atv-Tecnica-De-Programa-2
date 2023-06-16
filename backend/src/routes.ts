import express from "express"

import {get_client, get_clients, post_client, update_client, delete_client} from "./controller/clienteController"
import { get_dependente, get_dependentes, post_dependente, update_dependente, deletar_dependente } from "./controller/dependenteController";

export const router = express.Router();

router.get("/clientes", get_clients)
router.get("/cliente/:id",get_client)
router.post("/cliente_enviar", post_client)
router.put("/cliente_update/:id", update_client)
router.delete("/cliente_deletar/:id", delete_client)


router.get("/dependentes", get_dependentes)
router.get("/dependente/:id",get_dependente)
router.post("/dependente_enviar", post_dependente)
router.put("/dependente_update/:id", update_dependente)
router.delete("/dependente_deletar/:id",deletar_dependente)
