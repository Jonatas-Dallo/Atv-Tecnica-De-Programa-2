import { RequestHandler } from "express";

import { entidadeDependente } from "../database/models/entidade";

export const get_dependente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dependente = await entidadeDependente.findByPk(id);
        if (dependente != null) {
            return res.status(200).json({message: "Ok", dependente: dependente})
        } else {
            return res.status(400).json({message: "Not_found"})
        }
    } catch {
        return res.status(400).json({message: "Bad_request"})

    }
}

export const get_dependentes: RequestHandler = async (req, res) => {
    try {
        const dependentes = await entidadeDependente.findAll();
        if (dependentes != null) {
            return res.status(200).json({message: "Ok", dependente: dependentes})
        } else {
            return res.status(400).json({message: "Not_found"})
        }
    } catch {
        return res.status(400).json({message: "Bad_request"})

    }
}

export const post_dependente: RequestHandler = async (req, res) => {
    try {
        await entidadeDependente.create({...req.body});
        return res.status(200).json({message: "Ok"})
    } catch {
        return res.status(400).json({message: "Not_found"})
    }
}

export const update_dependente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        await entidadeDependente.update({...req.body}, {where: {id}})
        await entidadeDependente.findByPk(id)
        return res.status(200).json({message: "Ok"})
    } catch {
        return res.status(400).json({message: "Bad_request"})
    }
}

export const deletar_dependente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dependente = await entidadeDependente.findByPk(id);
        if (dependente != null) {
            console.log(dependente)
            await entidadeDependente.destroy({where:{id}})
            return res.status(200).json({message: "Ok"})
        } else {
            return res.status(400).json({message: "Not_found"})
        }
    } catch {
        return res.status(400).json({message: "Bad_request"})

    }
}





