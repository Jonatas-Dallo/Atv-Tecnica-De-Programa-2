import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class EditarClienteDependentes extends Processo {
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
        let DocDependente = this.entrada.receberTexto("Inserir o numero do documento do dependente para editar: ")
        this.clientes.forEach(cliente => {
            cliente.Dependentes.map(dependente => {
                dependente.Documentos.map(doc => {
                    if(doc.Numero == DocDependente){
                        console.log(`Nome atual: ${dependente.Nome}`)
                        let escolhaNome = this.entrada.receberTexto('Quer editar o nome do dependente ? s/n: ')                       
                        if(escolhaNome == 's'){
                            let novoNome = this.entrada.receberTexto('Inserir o novo nome: ')
                            dependente.Nome = novoNome
                        }
                        console.log(`Nome atual: ${dependente.NomeSocial}`)
                        let escolhaNomeSocial = this.entrada.receberTexto('Quer editar o nome social do dependente? s/n: ')
                        if(escolhaNomeSocial == 's'){
                            let novoNome = this.entrada.receberTexto('Inserir o novo nome social: ')
                            dependente.NomeSocial = novoNome
                        }

                        console.clear()
                        console.log('Deseja editar um documento? s/n')
                        console.log(`Numero de documento atual: ${doc.Numero}`)
                        let escolha_documento = this.entrada.receberTexto('')
                        if(escolha_documento == 's') {
                            let doc_pra_editar = this.entrada.receberNumero('Insira o número do documento que deseja editar: ')
                            cliente.Documentos.map(d => {
                                if(parseInt(d.Numero) == doc_pra_editar) {
                                    let novo_doc = this.entrada.receberTexto('Insira o novo número desse documento: ')
                                    d.mudar_numero(novo_doc)
                                }
                            })
                        }  
                    }
                })
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