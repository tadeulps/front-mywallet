import styled from 'styled-components'
import { Link,useHistory } from "react-router-dom";
import {Form,Redirect,Box} from '../styles/FormAndRedirect';
import {useState,useContext} from "react"
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {userData, setUserData}=useContext(UserContext);
    let history=useHistory();
    const [disabler,setDisabler]=useState(false)
    async function signIn(e){
        e.preventDefault();
        setDisabler(true)
        const body={email,password};
        try{
            const response=await axios.post("http://localhost:4000/sign-in",body)
            setUserData(response.data);
            setDisabler(true)
            setTimeout(()=>history.push('/home'),1000)
            
        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <Box>
            <Title>MyWallet</Title>
            <Form>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} disabled={disabler}/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabler}/>
                <button onClick={signIn} disabled={disabler}>{disabler?"Entrando...":"Entrar"}</button>
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
