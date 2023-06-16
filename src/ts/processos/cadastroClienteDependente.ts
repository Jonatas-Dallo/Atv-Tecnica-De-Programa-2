import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.clear()
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')

        const armazem = Armazem.InstanciaUnica;
        const clientes = armazem.Clientes;
        let i = 1
        clientes.forEach((cliente) => {
            if(this.titular(cliente)){
                console.log("------------------------------------------------------------------")
                console.log(`${i} - Nome: ${cliente.Nome} e Nome Social: ${cliente.NomeSocial}`);
                i = i + 1
            }
          });
        console.log("------------------------------------------------------------------")
        console.log("")
        let opcao = this.entrada.receberNumero('Selecione o número de uma das opções de Titular responsável:') - 1
        let titularObjeto = clientes[opcao]

        let cliente = new Cliente(nome, nomeSocial, dataNascimento)
        cliente.SetTitular = titularObjeto

        this.processo = new CadastroEnderecoDependente(cliente, titularObjeto)
        this.processo.processar()

        armazem.Clientes.push(cliente)
        titularObjeto.Dependentes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }

    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}