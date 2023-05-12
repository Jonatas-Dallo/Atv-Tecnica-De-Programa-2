import { TipoDocumento } from "../enumeracoes/TipoDocumento"
import Prototipo from "../interfaces/prototipo"

export default class Documento implements Prototipo{
    private numero: string
    private tipo: TipoDocumento
    private dataExpedicao: Date

    constructor(numero: string, tipo: TipoDocumento, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    public get Numero(){
        return this.numero
    }
    public get Tipo(){
        return this.tipo
    }
    public get DataExpedicao(){
        return this.dataExpedicao
    }

    public clonar(): Prototipo {
        let documento = new Documento(this.numero, this.tipo, this.dataExpedicao)
        return documento
    }
    
}