import Impressor from "../interfaces/impressor"
import Telefone from "../modelos/telefone"
import ImpressorTelefone from "./impressorTelefone"

export default class ImpressorTelefones implements Impressor {
    private telefone: Telefone[]
    private impressor!: Impressor

    constructor(telefone: Telefone[]) {
        this.telefone = telefone
    }

    imprimir(): string {
        let impressao = ``
        for (let index = 0; index < this.telefone.length; index++) {
            this.impressor = new ImpressorTelefone(this.telefone[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        return impressao
    }
}