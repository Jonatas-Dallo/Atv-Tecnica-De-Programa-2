import React from "react";
import { Link } from "react-router-dom";

// Styles
import { GlobalStyle } from "./globalStyles"
import { Container, Cards, MainBlock } from "./defaultStyles"

// Components
import { Card } from "../../components/Card";

// Img
import IconCadastroCliente from "../../assets/img/user-add-client.svg"
import IconCadastroFuncionario from "../../assets/img/user-add-funcionario.svg"
import IconCadastroVendas from "../../assets/img/shopping-cart.svg"
import IconListagemCliente from "../../assets/img/users-clientes.svg"
import IconListagemVendas from "../../assets/img/listagem-venda.svg"
import IconRelatorios from "../../assets/img/relatorios.svg"


const Home: React.FC = () => {
    return (
        <>
            <GlobalStyle />

            <Container>
                <MainBlock>
                    <Cards>

                    {/* Card Cliente */}                        
                    <Link to={"/cadastro/cliente"} style={{ textDecoration: 'none' }}>
                        <Card className="animate__animated animate__slideInLeft">
                            <img src={IconCadastroCliente} style={{ width: "4vw" }} alt="IconPerson" />
                            <p>
                                Cadastrar<br/>cliente
                            </p>
                        </Card>
                    </Link>

                    {/* Card Cliente */}                        
                    <Link to={"/cadastro/acomodacao"} style={{ textDecoration: 'none' }}>
                        <Card className="animate__animated animate__slideInLeft">
                            <img src={IconCadastroFuncionario} style={{ width: "4vw" }} alt="IconPerson" />
                            <p>
                                Cadastrar<br/>acomodação
                            </p>
                        </Card>
                    </Link>

                    {/* Card Listagem Cliente */}
                    <Link to={"/listagem/acomodacao"} style={{ textDecoration: 'none' }}>
                    <Card className="animate__animated animate__slideInRight">
                        <img src={IconListagemVendas} style={{ width: "4vw" }} alt="IconBag" />
                        <p>
                            Listagem<br/>acomodações
                        </p>
                    </Card>
                    </Link>

                    </Cards>

                    <Cards>

                    <Link to={"/cadastro/hospedagem"} style={{ textDecoration: 'none' }}>
                        <Card className="animate__animated animate__slideInLeft">
                            <img src={IconRelatorios} style={{ width: "4vw" }} alt="IconPerson" />
                            <p>
                                Cadastrar<br/>hospedagem
                            </p>
                        </Card>
                    </Link>

                        {/* Card Listagem Cliente */}
                        <Link to={"/listagem/cliente"} style={{ textDecoration: 'none' }}>
                        <Card className="animate__animated animate__slideInRight">
                            <img src={IconListagemCliente} style={{ width: "4vw" }} alt="IconBag" />
                            <p>
                                Listagem<br/>clientes
                            </p>
                        </Card>
                        </Link>

                    </Cards>
                </MainBlock>
            </Container>
        </>
    )

}

export default Home;