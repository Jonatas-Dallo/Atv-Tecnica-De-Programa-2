import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";
import ImpressorDocumentos from "./impressorDocumentos";

export default class ImpressorHospedagem implements Impressor{
    private hospedagem!:Hospedagem
    private impressor!: Impressor

    constructor(hospedagem:Hospedagem){
        this.hospedagem = hospedagem
    }

    imprimir(): string {
        
        let impressao = "\n" 
        + `| Nome: ${this.hospedagem.getTitular.Nome}\n`
        + `| Nome social: ${this.hospedagem.getTitular.NomeSocial}\n`
        + `| Tipo de acomodação: ${this.hospedagem.getAcomodacao.NomeAcomadacao}\n`
        + `| Data de nascimento: ${this.hospedagem.getTitular.DataNascimento}\n`
        this.impressor = new ImpressorDocumentos(this.hospedagem.getTitular.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        + "\n"
        + `| Data cadastro: ${this.hospedagem.getDataCadastro}\n`
        
        if(this.hospedagem.getTitular.Dependentes.length > 0){
            impressao = impressao + `| Dependentes: \n`
            this.hospedagem.getTitular.Dependentes.forEach((dependente,i) => {
                impressao = impressao 
                + `| Nome: ${dependente.Nome}\n`
                + `| Nome social: ${dependente.NomeSocial}\n`
                + `| Data de nascimento: ${dependente.DataNascimento}\n`
                this.impressor = new ImpressorDocumentos(dependente.Documentos)
                impressao = impressao + `\n${this.impressor.imprimir()}`
                if(i != this.hospedagem.getTitular.Dependentes.length - 1){
                    impressao = impressao + `| ----------------------------------------\n`
                }
            })
        }
        return impressao
    }
    
}