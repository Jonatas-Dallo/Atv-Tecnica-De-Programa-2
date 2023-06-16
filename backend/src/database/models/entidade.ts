import {DataTypes} from "sequelize"
import db from "../config"


export const entidadeCliente = db.define("clientes", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true, },
    nome: {
        type: DataTypes.STRING,
        allowNull: false, },
    nomeSocial: {
        type: DataTypes.STRING },  
    dependente: {
        type: DataTypes.STRING },
    documento: {
        type: DataTypes.STRING },
    endereco: {
        type: DataTypes.STRING },
    telefone: {
        type: DataTypes.STRING },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, },
})


export const entidadeDependente = db.define("dependentes", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true, },
    nome: {
        type: DataTypes.STRING,
        allowNull: false, },
    nomeSocial: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    endereco: {
        type: DataTypes.STRING 
    },
    telefone: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, },
})

export const entidadeAcomodacoes = db.define("acomodacoes", {
    id_acomodacao: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_acomodaçao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cama_solteiro: {
        type: DataTypes.INTEGER
    },
    cama_casal: {
        type: DataTypes.INTEGER
    },
    suite: {
        type: DataTypes.INTEGER
    },
    garagem: {
        type: DataTypes.INTEGER
    },
    climatizacao: {
        type: DataTypes.BOOLEAN
    },
})

export const entidadeAcomodacaoRegistro = db.define("registro", {

})

entidadeCliente.hasMany(entidadeDependente)
entidadeDependente.belongsTo(entidadeCliente)
 
entidadeCliente.hasMany(entidadeAcomodacaoRegistro)
entidadeAcomodacaoRegistro.belongsTo(entidadeCliente)

entidadeAcomodacoes.hasMany(entidadeAcomodacaoRegistro)
entidadeAcomodacaoRegistro.belongsTo(entidadeAcomodacoes)