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

const CadastrarAcomodacao: React.FC = () => {

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
          <InputField type="text" name="nome" placeholder="Numero do quarto" required {...register("quarto")} />

          <Select onChange={tipo}>
                <option>Tipo de quarto</option>
                <option value={"1"}>1- Acomodação simples para solteiro(a)</option>
                <option value={"2"}>2- Acomodação simples para casal</option>
                <option value={"3"}>3- Acomodação para família com até duas crianças</option>
                <option value={"4"}>4- Acomodação para família com até cinco crianças</option>
                <option value={"5"}>5- Acomodação com garagem para solteiro(a)</option>
                <option value={"6"}>6- Acomodação para até duas familias, casal e três crianças cada</option>
          </Select>

          <Select onChange={Disponibilidade}>
                <option>Disponibilidade</option>
                <option value={"Disponivel"}>Disponivel</option>
                <option value={"Ocupado"}>Ocupado</option>
          </Select>

          <StyledBotaoCadastro type="submit">Cadastrar</StyledBotaoCadastro>
        </Card>

        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <ImageBack src={IconBack} alt="IconBack" />
        </Link>
      </Container>
    </>
  );
}

export default CadastrarAcomodacao;
