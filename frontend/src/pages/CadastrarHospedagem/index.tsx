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

const CadastrarHospedagem: React.FC = () => {

    const [tipoQ, settipo] = useState("");
    const [disponibilidade, setdisponibilidade] = useState("");


    const { register, handleSubmit } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = async (value) => {
      let formatJson = {
        quarto: value["quarto"],
        tipo: tipoQ,
        disponibilidade: disponibilidade,
      };

      await axios.post("http://localhost:8080/cliente_enviar", formatJson).then((response) => {
      
      navigate("/home");
    }).catch((error) => {
      
    });
}

const tipo = (event: any) => {
  settipo(event.target.value);
} 

const Disponibilidade = (event: any) => {
  setdisponibilidade(event.target.value)
} 

  return (
    <>
      <GlobalStyle />

      <Container onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Title>Cadastro de Cliente</Title>
          <InputField type="text" name="nome" placeholder="Nome do Responsavel" required {...register("responsavel")} />
          <InputField type="text" name="documento" placeholder="Documento" required {...register("documento")} />
          <InputField type="number" name="quarto" placeholder="Numero do quarto" required {...register("quarto")} />

          <StyledBotaoCadastro type="submit">Cadastrar</StyledBotaoCadastro>
        </Card>

        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <ImageBack src={IconBack} alt="IconBack" />
        </Link>
      </Container>
    </>
  );
}

export default CadastrarHospedagem;
