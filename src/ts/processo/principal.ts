import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import cadastroHospedagem from "../processos/cadastroHospedagem"
import ListagemAcomodacoes from "../processos/listagemAcomodacoes"
import ListagemHospedagem from "../processos/listagemHospedage"
import TipoCadastroCliente from "../processos/tipoCadastroCliente"
import TipoDeletarClientes from "../processos/tipoDeletarClientes"
import TipoEditarCliente from "../processos/tipoEditarCliente"
import TipoListagemClientes from "../processos/tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoDeletarClientes()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break;
            case 6:
                this.processo = new cadastroHospedagem()
                this.processo.processar()
                break;
            case 7:
                this.processo = new ListagemHospedagem()
                this.processo.processar()
                break      
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.clear()
                console.log('Opção não entendida :(')
        }
    }
}