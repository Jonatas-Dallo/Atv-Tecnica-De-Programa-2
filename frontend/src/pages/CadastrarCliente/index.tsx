import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";

// Styles
import { GlobalStyle } from "./globalStyles";
import { Container, Card, InputField, InputFieldError, InputFieldMask, InputFieldMaskError, Title, ImageBack, StyledBotaoCadastro, Select } from "./defaultStyles";

// Mask
import InputMask from "react-input-mask"

// Img
import IconBack from "../../assets/img/IconBack.svg";
import axios from "axios";

const CadastrarCliente: React.FC = () => {

    const [permissao, setPermissao] = useState("");
    const [disable, setDisable] = useState(true)


    const { register, handleSubmit } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = async (value) => {
      let cpf = value["cpf"].replace(/\D/g, "")
      let formatJson = {
        nome: value["name"],
        nomeSocial: value["nameSocial"],
        cpf: cpf,
        documento: permissao,
      };

      await axios.post("http://localhost:8080/cliente_enviar", formatJson).then((response) => {
      
      navigate("/home");
    }).catch((error) => {
      
    });
}

const tipo = (event) => {
  if(event.target.value == "Tipo"){
    setDisable(true)
  } else {
    setDisable(false)
    setPermissao(event.target.value);
  }
} 

const cliente = (event) => {
  console.log(event.target.value)
  if(event.target.value != "Dependente"){
    setDisable(true)
  } else {
    setDisable(false)
  }
} 

  return (
    <>
      <GlobalStyle />

      <Container onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Title>Cadastro de Cliente</Title>
          <InputField type="text" name="nome" placeholder="Nome Completo" required {...register("name")} />

          <InputField type="text" name="nome" placeholder="Nome Social" required {...register("nameSocial")} />
          
          <InputFieldMask mask="999.999.999-99" type="text" name="cpf" placeholder="CPF" required {...register("cpf")}/> 

          <Select onChange={tipo}>
                <option>Tipo de documento</option>
                <option value={"RG"}>RG</option>
                <option value={"CPF"}>CPF</option>
                <option value={"Passa Porte"}>Passa Porte</option>
          </Select>

          <Select onChange={cliente}>
                <option>Tipo de cliente</option>
                <option value={"Titular"}>Titular</option>
                <option value={"Dependente"}>Dependente</option>
            </Select>

            <InputFieldMask disabled={disable} type="text" name="Titular" placeholder="Titular" required {...register("Titular")}/> 

        <StyledBotaoCadastro type="submit">Cadastrar</StyledBotaoCadastro>
        </Card>

        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <ImageBack src={IconBack} alt="IconBack" />
        </Link>
      </Container>
    </>
  );
}

export default CadastrarCliente;
