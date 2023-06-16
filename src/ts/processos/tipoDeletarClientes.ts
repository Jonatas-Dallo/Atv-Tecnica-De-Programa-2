import Processo from "../abstracoes/processo";
import MenuTipoDeletarCliente from "../menus/menuTipoDeletar";
import DeletarTitulares from "./deletarTitulares";
import DeletarDependentes from "./deletarDependentes";

export default class TipoDeletarClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoDeletarCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new DeletarTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new DeletarDependentes()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}