import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import CadastroRgPendente from "./cadastroRgPendente";

export default class CadastrarDocumentosDependente extends Processo {
    private cliente: Cliente
    private documento: Documento[];
    
    constructor(cliente: Cliente, documento: Documento[]) {
        super()
        this.cliente = cliente
        this.documento = documento
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {

        this.processo = new CadastroRgPendente(this.cliente, this.documento)
        this.processo.processar()
    
    }
}