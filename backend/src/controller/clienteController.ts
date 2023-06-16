import { RequestHandler } from "express";

import { entidadeCliente } from "../database/models/entidade";

export const get_client: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const cliente = await entidadeCliente.findByPk(id);
        if (cliente != null) {
            return res.status(200).json({message: "Ok", cliente: cliente})
        } else { 
            return res.status(400).json({message: "Not_found"})
        }
        
    } catch {
        return res.status(400).json({message: "Bad_request"})
    }
}

export const get_clients: RequestHandler = async (req, res) => {
    try {
        const clientes = await entidadeCliente.findAll();
        if (clientes != null) {
            return res.status(200).json({message: "Ok", cliente: clientes})
        } else { 
            return res.status(400).json({message: "Not_found"})
        }
        
    } catch {
        return res.status(400).json({message: "Bad_request"})
    }
}

export const post_client: RequestHandler = async (req, res) => {
    const { dependente, ...rest } = req.body;
    try {
        if (dependente === null) {
            await entidadeCliente.create({ dependente: "nenhum", ...rest });
          } else {
            await entidadeCliente.create(req.body);
          }
        return res.status(200).json({message: "Ok"})
    } catch { 
        return res.status(400).json({message: "Not_found"})
    }
}

export const update_client: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        await entidadeCliente.update({...req.body}, {where: {id}})
        await entidadeCliente.findByPk(id)
        return res.status(200).json({message: "Ok"})
    } catch { 
        return res.status(400).json({message: "Not_found"})
    }
}

export const delete_client: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const deletar = await entidadeCliente.findByPk(id)
        if (deletar != null) {
            await entidadeCliente.destroy({where:{id}})
            return res.status(200).json({message: "Ok"})
        } else { 
            return res.status(400).json({message: "Not_found"})
        }
    } catch {
        return res.status(400).json({message: "Bad_request"})
    }
}

