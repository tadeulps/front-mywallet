import styled from 'styled-components'
import { Link } from "react-router-dom";
import {Form,Redirect,Box} from '../styles/FormAndRedirect'
export default function Register(){
    return(
        <>
        <Box>
            <Title>MyWallet</Title>
            <Form>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
                <button>Cadastrar</button>
            </Form>
            <Link to="/">
                <Redirect>Já tem uma conta? Entre agora!</Redirect>
            </Link>
        </Box>
        </>
    )
}

const Title=styled.p`
    font-size:32px;
    color: white;
    font-family: 'Saira Stencil One', cursive;
    margin: 95px 0px 25px 0px;
`