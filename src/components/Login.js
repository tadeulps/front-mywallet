import styled from 'styled-components'
import { Link } from "react-router-dom";
import {Form,Redirect,Box} from '../styles/FormAndRedirect'

export default function Login(){
    return(
        <>
        <Box>
            <Title>MyWallet</Title>
            <Form>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button>Entrar</button>
            </Form>
            <Link to={`/register`}>
                <Redirect>Primeira vez? Cadastre-se</Redirect>
            </Link>
        </Box>
        </>
    )
}


const Title=styled.p`
    font-size:32px;
    color: white;
    font-family: 'Saira Stencil One', cursive;
    margin: 120px 0px 25px 0px;
`
