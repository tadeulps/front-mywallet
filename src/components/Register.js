import styled from 'styled-components'
import { Link,useHistory } from "react-router-dom";
import {Form,Redirect,Box} from '../styles/FormAndRedirect'
import {useState} from "react"
import axios from "axios" 
export default function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [secPassword,setSecPassword]=useState("");
    let history=useHistory();
    const [disabler,setDisabler]=useState(false)

    async function signUp(e){
        e.preventDefault();
        setDisabler(true)
        const body={name,email,password,secPassword}
        try{
            await axios.post("http://localhost:4000/sign-up",body)
            setDisabler(true)
            setTimeout(()=>history.push('/'),1000)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <Box>
            <Title>MyWallet</Title>
            <Form onSubmit={signUp}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} disabled={disabler}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} disabled={disabler}/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabler}/>
                <input type="password" placeholder="Confirme a senha" value={secPassword} onChange={e => setSecPassword(e.target.value)} disabled={disabler} />
                <button onClick={signUp} disabled={disabler}>Cadastrar</button>
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