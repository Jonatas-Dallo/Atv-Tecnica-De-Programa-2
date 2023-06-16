import Acomodacao from "./acomodacao"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente
    private acomodacao!: Acomodacao

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Acomodacao() {return this.acomodacao}
    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set SetTitular(titular: Cliente) { this.titular = titular }
    public set Nome(nome: string) {this.nome = nome}
    public set NomeSocial(nomeSocial: string) {this.nomeSocial = nomeSocial}
    public set setDataNascimento(dataNascimento: Date) {this.dataNascimento = dataNascimento}
    public set setTelefone(telefone: Telefone){this.telefones.push(telefone)}
    public set setDocumento(documento: Documento){this.documentos.push(documento)}
    public set setDependente(dependente: Cliente){this.dependentes.push(dependente)}
    public set Acomodacao(acomodacao:Acomodacao) { this.acomodacao = acomodacao}
}