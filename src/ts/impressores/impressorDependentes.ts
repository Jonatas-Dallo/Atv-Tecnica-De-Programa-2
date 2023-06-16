import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"
import ImpressorDependente from "./impressorDependente"

export default class ImpressorPendentes implements Impressor {
    private pendentes: Cliente[]
    private impressor!: Impressor

    constructor(pendentes: Cliente[]) {
        this.pendentes = pendentes
    }

    imprimir(): string {
        let impressao = ``
        for (let index = 0; index < this.pendentes.length; index++) {
            this.impressor = new ImpressorDependente(this.pendentes[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        return impressao
    }
}