import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

// Styles
import { GlobalStyle } from "./globalStyles"
import { Container, Title, ContainerUserDelete, ContainerUserUpdate, ContainerUserInfo, InputField, InputFieldMask, StyledInput, ImageBack, ButtonVerde, ButtonVermelho, ButtonSubmit } from "./defaultStyles"

//Self Components
import SearchField from '../../components/SearchField';

//Prime React Components
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner'

// Images
import IconBack from "../../assets/img/IconBack.svg";

const ListaAcomodacao: React.FC = () => {

    const { register, handleSubmit, setValue, setFocus} = useForm();
    const [loading, setLoading] = useState(true);
    const [clients, setClients] = useState([]);
    const [modalContent, setModalContent] = useState<JSX.Element>();
    const [titleContent, setTitleContent] = useState<JSX.Element>();
    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState<DataTableFilterMeta>({'fullName': { value: null, matchMode: FilterMatchMode.STARTS_WITH }});
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    ////////////////////////////////////////////// Codigo do filto da tabela e isCell pra bloquear poder clicar nos lugares que nao deve
    useEffect(() => {
        async function loadData() {
            const clientResponse = await axios.get("http://localhost:8080/clientes");
            setClients(clientResponse.data.cliente);
        }
        loadData(); 
        setLoading(false);
    }, []);
    
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
   
        
        let _filters: any = { ...filters };

        _filters['fullName'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const isCellSelectable = (event) => (event.data.field === 'Numero do quarto' || event.data.field === 'Disponibilidade' || event.data.field === 'nomeSocial' || event.data.field === 'dependente' ? false : true);

    ////////////////////////////////////////////// Função chamada para excluir

    const excluir = (clientID: any) => {
        console.log(clientID)
        async function confirmDelete(){
            await axios.delete(`http://localhost:8080/cliente_deletar/${clientID}`); 
            const clientResponse = await axios.get("http://localhost:8080/clientes");
            setClients(clientResponse.data.cliente)
        }
        confirmDelete()
        setModalContent(<></>)
        setTitleContent(<></>)

        setVisible(false)
    }

    //////////////////////////////////////////////

     ////////////////////////////////////////////// Função que faz o Update e traz o endereço baseado no Cep

    const onSubmit = async (value: any) => {
        let ObjetoJson = {
          nome: value["nome"],
          nomeSocial: value["nomeSocial"],
          cpf: value["cpf"],
          dependente: value["dependente"],
        }
    }

     //////////////////////////////////////////////

    ////////////////////////////////////////////// Codigo do modal que aparece ao selecionar um campo, com os if e codigo dentro deles, determinando o que aparece em cada campo selecionado

    const showModal = (event: any) =>{
        const Client = event.rowData

         if (event.field == "update"){
            let titleContent: JSX.Element = ( 
                <Title height='2rem'>
                    Informações de {Client.nome}
                </Title>
            );
            setTitleContent(titleContent)

            let contentToModal: JSX.Element = ( 
                <ContainerUserUpdate onSubmit={handleSubmit(onSubmit)}>
                    <StyledInput>
                        <InputField style={{ width: '400px' }} name="nome" placeholder={`Nome completo: ${Client.nome}`}{...register("nome")} required/>
                        <InputField style={{ width: '400px' }} name="nomeSocial" placeholder={`Nome social: ${Client.nomeSocial}`}{...register("nomeSocial")} required/>
                        <InputField style={{ width: '400px' }} name="cpf" placeholder={`Cpf: ${Client.cpf}`}{...register("cpf")} required/>
                        <InputField style={{ width: '400px' }} name="dependente" placeholder={`Dependente: ${Client.dependente}`}{...register("dependente")} required/>
                        <input type="hidden" name="clientId" value={Client.id} {...register("clientId")} />
                        <ButtonSubmit type="submit">Atualizar</ButtonSubmit>
                    </StyledInput>
                </ContainerUserUpdate>
            )
            console.log(Client.dependente)
            setModalContent(contentToModal)

        } else if (event.field == "delete"){
            let titleContent: JSX.Element = ( 
                <Title height='2rem' color="#696969">
                    Deseja excluir {Client.fullName} ?
                </Title>
            );
            setTitleContent(titleContent);

            let contentToModal: JSX.Element = (
                <ContainerUserDelete>
                    <div>
                        <ButtonVerde onClick={() => {excluir(Client.id)}}>Excluir</ButtonVerde>
                    </div>
                </ContainerUserDelete>
            );
            setModalContent(contentToModal)

        } else if (event.field == "address"){

        let titleContent: JSX.Element = ( 
            <Title height='2rem'>
                Informações de {Client.fullName}
            </Title>
        );
        setTitleContent(titleContent)

        let contentToModal: JSX.Element = ( 
            <ContainerUserInfo>
                    <div>
                        <label>Cep</label>
                        <input type="text" value={Client.address.cep} disabled />
                    </div>
                    <div>
                        <label>Logradouro</label>
                        <input type="text" value={Client.address.publicPlace} disabled />
                    </div>
                    <div>
                        <label>Estado</label>
                        <input type="text" value={Client.address.state} disabled />
                    </div>
                    <div>
                        <label>Bairro</label>
                        <input type="text" value={Client.address.neighborhood} disabled />
                    </div>
                    <div>
                        <label>Cidade</label>
                        <input type="text" value={Client.address.city} disabled />
                    </div>
                    <div>
                        <label>Complemento</label>
                        <input type="text" value={Client.address.complement} disabled />
                    </div>
                </ContainerUserInfo>
        )
        setModalContent(contentToModal)
        }
    setVisible(true)

    };
    
    return(
        <>
            <GlobalStyle/>
            <Container>     
                <Title color='#F18524'>Listagem de Clientes</Title>
                <SearchField value={globalFilterValue} onChange={onGlobalFilterChange} placeholder='| Digite um Nome'/>
                {loading && <ProgressSpinner/>}
                {!loading && 
                    <DataTable
                        value={clients}
                        paginator rows={25} rowsPerPageOptions={[25, 50, 100]} 
                        cellSelection 
                        selectionMode="single"
                        onCellSelect={showModal}
                        isDataSelectable={isCellSelectable}
                        filters={filters}
                        emptyMessage='Sem informações'
                        style={{width:'90%', margin:'auto'}}
                        className='shadow'
                    >
                        <Column 
                            field="Numero do quarto"
                            align="center" 
                            header="Numero do quarto"
                            headerStyle={{color:'#F18524'}}
                        ></Column>
                        <Column 
                            field="Tipo"
                            align="center" 
                            header="Tipo" 
                            headerStyle={{color:'#F18524'}}
                        ></Column>
                        <Column 
                            field="Disponibilidade"
                            align="center" 
                            header="Disponibilidade" 
                            headerStyle={{color:'#F18524'}}
                        ></Column>
                        <Column 
                            field="Ocupado por"
                            align="center" 
                            header="Ocupado por" 
                            headerStyle={{color:'#F18524'}}
                        ></Column>
                        <Column 
                            field="update"
                            body="Editar" 
                            align="center" 
                            header="Edição" 
                            headerStyle={{color:'#F18524'}}
                        ></Column>
                        <Column 
                            field="delete"
                            body="Excluir" 
                            align="center" 
                            header="Exclusão" 
                            headerStyle={{color:'#F18524'}}
                        ></Column>
                    </DataTable>
                }
                <Dialog 
                    visible={visible} 
                    onHide={() => {setVisible(false);setModalContent(<></>);setTitleContent(<></>)}} 
                    style={{ minWidth: '50vw' }}
                    header={titleContent}
                    headerStyle={{textAlign:"center"}}
                    closeOnEscape={true}
                >
                    <hr/>
                    {modalContent}
                </Dialog>
                <Link to={"/home"} style={{ textDecoration: "none" }}>
					<ImageBack src={IconBack} alt="IconBack" />
				</Link>
            </Container>
        </>
    )

}

export default ListaAcomodacao;