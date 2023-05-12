import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorDependente implements Impressor {
    private dependente: Cliente
    constructor(dependente: Cliente) {
        this.dependente = dependente
    }
    imprimir(): string {
        let impressao = `| Dependente:\n`
            + `| Nome do dependente: ${this.dependente.Nome}\n`
            + `| Nome Social do dependente: ${this.dependente.NomeSocial}\n`

        return impressao
    }
}