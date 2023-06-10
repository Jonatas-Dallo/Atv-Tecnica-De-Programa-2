import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefoneDependente extends Processo {
    private cliente: Cliente
    private titular: Cliente;

    constructor(cliente: Cliente, titular: Cliente) {
        super();
        this.cliente = cliente;
        this.titular = titular; 
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        
        let telefoneClonado = this.titular.Endereco.clonar() as Telefone
        this.cliente.Telefones.push(telefoneClonado);
        this.processo.processar();
    }
}