import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorListagemDependentes from "../impressores/listagem/impressorListagemDependentes";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos dependentes...')
        const armazem = Armazem.InstanciaUnica;
        const clientes = armazem.Clientes;
        let i = 1
        clientes.forEach((cliente) => {
            if (this.titular(cliente)) {
                console.log("------------------------------------------------------------------")
                console.log(`${i} - Nome: ${cliente.Nome} e Nome Social: ${cliente.NomeSocial}`);
                i = i + 1
            }
          });
        console.log("------------------------------------------------------------------")
        console.log("")
        let opcao = this.entrada.receberNumero('Selecione o número de uma das opções:') - 1
        let titular = clientes[opcao]
        

        console.log("****************************")
        this.impressor = new ImpressorListagemDependentes(titular.Dependentes)
        console.log(this.impressor.imprimir())
    }

    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}