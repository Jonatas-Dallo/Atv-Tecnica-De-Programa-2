import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroRgPendente extends Processo {
    private cliente: Cliente
    private documento: Documento[]
    constructor(cliente: Cliente, documento: Documento[]) {
        super()
        this.cliente = cliente
        this.documento = documento
    }

    processar(): void {
        this.documento.forEach((documento: Documento) => {
        this.cliente.Documentos.push(documento)
        })
    }
}