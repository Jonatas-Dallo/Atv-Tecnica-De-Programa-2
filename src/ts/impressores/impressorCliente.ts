import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorPendentes from "./impressorDependentes";
import ImpressorTelefones from "./impressorTelefones";

export default class ImpressaorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorTelefones(this.cliente.Telefones)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorPendentes(this.cliente.Dependentes)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        
        this.impressor = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        
        console.log("")
        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }

}