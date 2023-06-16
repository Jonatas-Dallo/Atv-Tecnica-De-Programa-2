import { RequestHandler } from "express";

import { entidadeAcomodacoes } from "../database/models/entidade";

export const criar_acomodações: RequestHandler = async (req, res) => {
    try {
        await entidadeAcomodacoes.create({
            id_acomodacao: 1,
            nome_acomodacao: "CasalSimples",
            cama_solteiro: 0,
            cama_casal: 1,
            suite: 1,
            garagem: 1,
            climatizacao: 1
        });
        await entidadeAcomodacoes.create({
            id_acomodacao: 2,
            nome_acomodacao: "FamiliaSimples",
            cama_solteiro: 2,
            cama_casal: 1,
            suite: 1,
            garagem: 1,
            climatizacao: true
        });
        await entidadeAcomodacoes.create({
            id_acomodacao: 3,
            nome_acomodacao: "FamiliaMias",
            cama_solteiro: 5,
            cama_casal: 1,
            suite: 2,
            garagem: 1,
            climatizacao: true
        });
        await entidadeAcomodacoes.create({
            id_acomodacao: 4,
            nome_acomodacao: "FamiliaSuper",
            cama_solteiro: 6,
            cama_casal: 2,
            suite: 3,
            garagem: 1,
            climatizacao: true
        });
        await entidadeAcomodacoes.create({
            id_acomodacao: 5,
            nome_acomodacao: "SolteiroSimples",
            cama_solteiro: 1,
            cama_casal: 0,
            suite: 1,
            garagem: 1,
            climatizacao: false
        });
        await entidadeAcomodacoes.create({
            id_acomodacao: 6,
            nome_acomodacao: "SolteiroMais",
            cama_solteiro: 0,
            cama_casal: 1,
            suite: 1,
            garagem: 1,
            climatizacao: true
        });
        return res.status(200).json({message: "Ok"})
    } catch {
        return res.status(400).json({message: "bad_Request"})
    }
}