import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Documento from "../modelos/documento";
import CadastrarDocumentosDependente from "./cadastrarDocumentoDependente";

export default class CadastroEnderecoDependente extends Processo {
    private cliente: Cliente
    private titular: Cliente;

    constructor(cliente: Cliente, titular: Cliente) {
        super();
        this.cliente = cliente;
        this.titular = titular; 
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        
        let enderecoClonado = this.titular.Endereco.clonar() as Endereco
        this.cliente.Endereco = enderecoClonado;
        
        let documentoClonado: Documento[] = []

        this.titular.Documentos.forEach((documentos: Documento) => {
            documentoClonado.push(documentos.clonar() as Documento);
        });

        this.processo = new CadastrarDocumentosDependente(this.cliente, documentoClonado);
        this.processo.processar();
    }

}