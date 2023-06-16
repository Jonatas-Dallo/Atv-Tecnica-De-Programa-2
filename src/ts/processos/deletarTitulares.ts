import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import ListagemTitulares from "./listagemTitulares";

export default class ExcluirTitular extends Processo {
    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {

        this.processo = new ListagemTitulares()
        this.processo.processar()

        console.clear()
        const armazem = Armazem.InstanciaUnica;
        const clientes = armazem.Clientes;
        clientes.forEach((cliente) => {
            if(this.Titular(cliente)){
                console.log("------------------------------------------------------------------")
                console.log(`Nome: ${cliente.Nome}`);
                console.log(`Nome Social: ${cliente.NomeSocial}`)
                cliente.Documentos.forEach((documento) => {
                    console.log(`Numero de documento: ${documento.Numero}`)
                })
            }
          });

        let numeroDocumento = this.entrada.receberTexto(`Digite o numero do documento do titular: `)
        let indice = this.clientes.findIndex((cliente: Cliente) => cliente.Documentos.find((documento: Documento) => documento.Numero === numeroDocumento))
        let filtrados = this.clientes.filter(cliente => (cliente.Documentos.find((documento: Documento) => documento.Numero === numeroDocumento )));
        let documentos: any[]= []
        filtrados.forEach(element => {
            element.Dependentes.forEach(d => d.Documentos.forEach( doc => { documentos.push({ numero:doc.Numero }) }))
        });

        documentos.forEach(excluido => {
            for (let i = 0; i < this.clientes.length; i++) {
                const cliente = this.clientes[i];
                for (let index = 0; index < cliente.Documentos.length; index++) {
                    const documento = cliente.Documentos[index];
                    if(documento.Numero === excluido.numero){
                        this.clientes.splice(i, 1)
                    }
                    break
                }
            }
        });

        if (indice === -1) {
            console.log(`Titular não encontrado...`);
        } else {
            this.clientes.splice(indice, 1)
            console.log(`Titular com documento de numero ${numeroDocumento} excluido com sucessso...`);
        }

    }

    private Titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}