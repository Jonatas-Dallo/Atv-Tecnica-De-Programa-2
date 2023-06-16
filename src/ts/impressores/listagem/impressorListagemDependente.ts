import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import ImpressorTitular from "../impressaoTitular";
import ImpressorAcomodacao from "../impressorAcomodacao";
import ImpressorDocumentos from "../impressorDocumentos";
import ImpressorEndereco from "../impressorEndereco";
import ImpressorTelefones from "../impressorTelefones";

export default class ImpressorListagemDependente implements Impressor {
    private dependente: Cliente
    private impressor!: Impressor
    constructor(dependente: Cliente) {
        this.dependente = dependente
    }
    imprimir(): string {
        let impressao = `| Dependente:\n`
            + `| Nome do dependente: ${this.dependente.Nome}\n`
            + `| Nome Social do dependente: ${this.dependente.NomeSocial}\n`
            + `| Data de nascimento: ${this.dependente.DataNascimento}\n`
            + `| Data de cadastro: ${this.dependente.DataCadastro}\n`

            this.impressor = new ImpressorTitular(this.dependente.Titular)
            impressao = impressao + `\n${this.impressor.imprimir()}`

            this.impressor = new ImpressorTelefones(this.dependente.Telefones)
            impressao = impressao + `\n${this.impressor.imprimir()}`

            this.impressor = new ImpressorEndereco(this.dependente.Endereco)
            impressao = impressao + `\n${this.impressor.imprimir()}`
            let espaço = ``
            this.impressor = new ImpressorDocumentos(this.dependente.Documentos)
            impressao = impressao + `\n${this.impressor.imprimir()}`

            if(this.dependente.Acomodacao){
                this.impressor = new ImpressorAcomodacao(this.dependente.Acomodacao)
                impressao = impressao + `\n ${this.impressor.imprimir()}`
            }

        return impressao
    }
}