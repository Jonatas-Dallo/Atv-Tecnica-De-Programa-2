import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone"
import { TipoDocumento } from "../enumeracoes/tipoDocumento"

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

let documento = new Documento()
documento.numero = "123.456.789-10"
documento.tipo = TipoDocumento.CPF;
documento.dataExpedicao = new Date(2023, 3, 1);
cliente.documentos.push(documento)

let telefone1 = new Telefone()
telefone1.ddd = "012"
telefone1.numero = "4002-8922"
cliente.telefones.push(telefone1)
let telefone2 = new Telefone()
telefone2.ddd = "012"
telefone2.numero = "98894-1043"
cliente.telefones.push(telefone2)

let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

//-------------------------------

let dependente = new Cliente()

dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)

let documentoDependente = new Documento()
documentoDependente.numero = "109.876.543-21"
documentoDependente.tipo = TipoDocumento.CPF;
documentoDependente.dataExpedicao = new Date(2023, 3, 1);
dependente.documentos.push(documento)

dependente.endereco = (cliente.endereco.clonar() as Endereco)

dependente.telefones = [];
cliente.telefones.forEach((telefone: Telefone) => {
  dependente.telefones.push(telefone.clonar() as Telefone);
});

dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log(cliente);
console.log("---------------------")
console.log(dependente);
