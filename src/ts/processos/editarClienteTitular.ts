import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class EditarClienteTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
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
        this.numero = this.entrada.receberNumero('Selecione o número de um Titular responsável:')
        this.clientes.map(cliente => {
            if(this.titular(cliente)) {
                cliente.Documentos.map(doc => {
                    if(parseInt(doc.Numero) == this.numero) {
                        let index = this.clientes.indexOf(cliente)
                        console.clear()
                        console.log('Deseja editar o nome do cliente ? (s/n)')
                        console.log(`Nome atual: ${cliente.Nome}`)
                        let escolha_nome = this.entrada.receberTexto('')
                        if(escolha_nome == 's') {
                            let receber_novo_nome = this.entrada.receberTexto('Insira um novo nome: ')
                            this.clientes[index].Nome = receber_novo_nome
                        }
                        
                        console.clear()
                        console.log('Deseja editar o nome social? (s/n)')
                        console.log(`Nome social atual: ${cliente.NomeSocial}`)
                        let escolha_nomesocial = this.entrada.receberTexto('')
                        if(escolha_nomesocial == 's') {
                            let receber_novo_nomesocial = this.entrada.receberTexto('Insira um novo nome social:')
                            this.clientes[index].NomeSocial = receber_novo_nomesocial
                        }

                        console.clear()
                        console.log('Deseja editar o telefone? (s/n)')
                        console.log(`Telefones atuais:`)
                        cliente.Telefones.forEach((telefone) => {
                            console.log("------------------------------------------------------------------")
                            console.log(`DDD: ${telefone.Ddd}`);
                            console.log(`Numero: ${telefone.Numero}`)
                        });
                        let escolha_telefone = this.entrada.receberTexto('')
                        if(escolha_telefone == 's') {
                            let telefone_pra_editar = this.entrada.receberNumero('Insira o numero de telefone que deseja editar: ')
                            cliente.Telefones.forEach((telefone) => {
                                console.log("------------------------------------------------------------------")
                                console.log(`DDD: ${telefone.Ddd}`);
                                console.log(`Numero: ${telefone.Numero}`)
                              });
                            
                            cliente.Telefones.map(t=> {
                                if(parseInt(t.Numero) == telefone_pra_editar) {
                                    let novo_ddd = this.entrada.receberTexto('Insira um novo DDD para esse telefone: ')
                                    let novo_tel = this.entrada.receberTexto('Insira um novo número para esse telefone: ')
                                    t.mudar_ddd(novo_ddd)
                                    t.mudar_telefone(novo_tel)
                                }
                            })
                        }

                        console.clear()
                        console.log('Deseja editar um documento? s/n')
                        let escolha_documento = this.entrada.receberTexto('')
                        if(escolha_documento == 's') {
                            let doc_pra_editar = this.entrada.receberNumero('Insira o número do documento que deseja editar: ')
                            console.log(`Numero do documento atual: ${doc.Numero}`)
                            cliente.Documentos.map(d => {
                                if(parseInt(d.Numero) == doc_pra_editar) {
                                    let novo_doc = this.entrada.receberTexto('Insira o novo número desse documento: ')
                                    d.mudar_numero(novo_doc)
                                }
                            })
                        }      
                    }
                })
            }
        })
    }


    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}