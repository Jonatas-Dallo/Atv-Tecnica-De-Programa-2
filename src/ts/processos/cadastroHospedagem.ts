import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuOpcaoAcomodacoes from "../menus/menuOpcaoAcomodacoes";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";
import BuscarTitular from "./buscarTitular";

export default class cadastroHospedagem extends Processo{
    private titular!:Cliente
    private acomodacoes!:Acomodacao[]
    private hospedagens!:Hospedagem[]
    private busca:any
    private confirmacao:String = `Hospedagem Realizada com sucesso...`

    constructor(){
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.menu = new MenuOpcaoAcomodacoes()
        this.execucao = true
    }

    processar(): void {

        this.busca = new BuscarTitular()
        this.titular = this.busca.buscar()

        if(this.titular === undefined){
            console.log("Nenhum titular encontrado com o numero de documento passado.");
        }else{
            console.clear()
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero("Qual o tipo de acomodação deseja ?")
            switch(opcao){
                case 1:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[0]))
                    console.log(this.confirmacao);
                    break
                case 2:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[1]))
                    console.log(this.confirmacao);
                    break
                case 3:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[2]))
                    console.log(this.confirmacao);
                    break
                case 4:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[3]))
                    console.log(this.confirmacao);
                    break
                case 5:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[4]))
                    console.log(this.confirmacao);
                    break
                case 6:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[5]))
                    console.log(this.confirmacao);
                    break

            }
        }
    }
}