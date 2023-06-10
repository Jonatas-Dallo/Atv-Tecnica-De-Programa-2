import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class DeletarDependentes extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        const armazem = Armazem.InstanciaUnica;
        const clientes = armazem.Clientes;
        clientes.forEach((cliente) => {
            if(this.titular(cliente)){
                console.log("------------------------------------------------------------------")
                console.log(`Nome: ${cliente.Nome}`);
                console.log(`Nome Social: ${cliente.NomeSocial}`)
                cliente.Documentos.forEach((documento) => {
                    console.log(`Numero de documento: ${documento.Numero}`)
                })
            }
          });
        console.log("------------------------------------------------------------------")
        console.log("")
        this.numero = this.entrada.receberNumero('Insira o número do documento do dependente que quer excluir: ')
        this.clientes.forEach(cliente => {
            cliente.Dependentes.map(dependente => {
                dependente.Documentos.map(doc => {
                    if(parseInt(doc.Numero) == this.numero) {
                        cliente.Dependentes.splice(cliente.Dependentes.indexOf(dependente), 1);
                    }
                })
            })
 
            cliente.Documentos.map(item => {
                if(parseInt(item.Numero) == this.numero) {
                    let index = this.clientes.indexOf(cliente)
                    this.clientes.splice(index, 1)
                }
            })
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular != undefined) {
            verificacao = true
        }
        return verificacao
    }
}
