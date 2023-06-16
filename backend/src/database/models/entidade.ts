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
    quarto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.INTEGER
    },
    disponibilidade: {
        type: DataTypes.STRING
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