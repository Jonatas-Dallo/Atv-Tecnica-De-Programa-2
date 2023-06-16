import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"
import ImpressorListagemDependente from "./impressorListagemDependente"

export default class ImpressorListagemDependentes implements Impressor {
    private pendentes: Cliente[]
    private impressor!: Impressor

    constructor(pendentes: Cliente[]) {
        this.pendentes = pendentes
    }

    imprimir(): string {
        console.clear()

        if(this.pendentes == undefined){
            return "Nenhum cliente selecionado"
        }

        let impressao = ``
        for (let index = 0; index < this.pendentes.length; index++) {
            this.impressor = new ImpressorListagemDependente(this.pendentes[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        return impressao
    }
}