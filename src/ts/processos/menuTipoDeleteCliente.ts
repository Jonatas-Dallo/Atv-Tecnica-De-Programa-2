import Menu from "../interfaces/menu";

export default class MenuTipoDeletarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`Qual tipo de cliente deseja deletar ? `)
        console.log(`1 - Titular`)
        console.log(`2 - Dependente`)
    }
}