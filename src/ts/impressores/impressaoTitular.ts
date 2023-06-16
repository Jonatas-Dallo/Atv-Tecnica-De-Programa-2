import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorTitular implements Impressor {
    private titular: Cliente
    constructor(titular: Cliente) {
        this.titular = titular
    }
    imprimir(): string {
        console.log("")
        let impressao = `| Titular responsável:\n`
            + `| Nome: ${this.titular.Nome}\n`
            + `| Nome Social: ${this.titular.NomeSocial}\n`

        return impressao
    }
}