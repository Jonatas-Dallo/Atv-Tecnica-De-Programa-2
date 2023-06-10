import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        console.log('Coletando os dados do telefone...')
        while (this.execucao) {
            let opcao = this.entrada.receberTexto('Deseja cadastrar um telefone novo ? (s/n)')
            if(opcao == "s"){
                let ddd = this.entrada.receberTexto('Qual o ddd ?')
                let numero = this.entrada.receberTexto('Qual o numero ?')
                let telefone = new Telefone(ddd, numero)
                this.cliente.Telefones.push(telefone)
                break
            } else {
                if(opcao == "n"){
                    this.execucao = false
                    break
                } else {
                    console.log('Opção não entendida :(')
                }
            }
        }
    }
}
