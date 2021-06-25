import styled from "styled-components"
import { useState,useContext,useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import axios from "axios"
import { Link,useHistory } from "react-router-dom";
import {Form} from '../styles/FormAndRedirect';

export default function Withdraw(){
    const {userData} = useContext(UserContext);
    const [valor,setValor]=useState('');
    const [descricao,setDescricao]=useState('');
    let history=useHistory();
    const [disabler,setDisabler]=useState(false);

    async function AddMoney(e){
        e.preventDefault()
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        const body={
            valor:valor,
            descricao:descricao
        }
        try{
        await axios.post("http://localhost:4000/withdraw",body,config)
        history.push("/home")}
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <Container>
            <Title>
                Nova saída
            </Title>
            <Form onSubmit={AddMoney}>
                <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} disabled={disabler}/>
                <input type="text" placeholder="Descriçao" value={descricao} onChange={e => setDescricao(e.target.value)} disabled={disabler}/> 
                <button onClick={AddMoney} disabled={disabler}>
               Salvar saída
            </button>   
            </Form>
                  
        </Container>
        </>
    )
}
const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Title=styled.p`
    color:white;
    font-size: 26px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    margin-bottom: 40px;
    width: 90%;
    margin-top: 25px;
`
