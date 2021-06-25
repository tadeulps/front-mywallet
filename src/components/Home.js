import styled from "styled-components"
import { useState,useContext,useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import axios from "axios";
import { Link,useHistory } from "react-router-dom";
import Transaction from "./Transaction";
import { FiPlusCircle,FiMinusCircle } from 'react-icons/fi';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function Home(){
    const {userData} = useContext(UserContext);
    const [userInfo,setUserInfo]=useState('');
    let history=useHistory();
    const [balance,setBalance]=useState(0);
    async function logout(){
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        try{
            await axios.delete("http://localhost:4000/logout",config)
            history.push("/")
        }catch(err){
            console.log(err)
        }
    }

    function goWithdraw(){
        history.push("/withdraw")
    }
    function goDeposit(){
        history.push("deposit")
    }

    async function renderInfos(){
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        try{
            const infos=await axios.get("http://localhost:4000/user-infos",config);
            setUserInfo(infos.data)
        }catch(err){
            console.log(err)
        }
    }
    function calcBalance(){
        let bal=0
        if(userInfo){
        userInfo.transactions.forEach((e) => {
            if(e.tipo==="entrada"){

                bal+=parseFloat(e.valor)
            }else{
                bal-=parseFloat(e.valor)
            }
        });
            if(String(bal).includes(".")){
                bal=String(bal).replace(".",",")
                if(bal[bal.length-2]===","){
                    bal=bal+"0"
            }}else{
                bal=bal+",00"
            }
        
        setBalance(bal)
        }
    }
    useEffect(calcBalance,[userInfo])
    useEffect(renderInfos,[]);
    return(
        <>
        <Container>
            <Top>
                <Title>
                    Olá, {userInfo.name}
                </Title>
                <RiLogoutBoxRLine color="white" fontSize="26px" onClick={logout}/>
            </Top>
            <BoxValues>
                {userInfo?
                userInfo.transactions.length?userInfo.transactions.map((e)=>{
                    return <Transaction tipo={e.tipo} valor={e.valor} data={e.data} descricao={e.descricao}/>
                })
                :<h2>Não há registros de <br/>entrada ou saída</h2>:<h2>Não há registros de <br/>entrada ou saída</h2>}
            </BoxValues>
            <BalanceBox value={parseInt(balance)}>
                    <h4>SALDO</h4>
                    <p>$ {balance}</p>
            </BalanceBox>
            <InfBox>
            
                <AddOrRemove onClick={goDeposit}>
                    <FiPlusCircle fontSize="22px"/>
                  <p>  Nova <br/>entrada</p>
                </AddOrRemove>
          
            
                <AddOrRemove onClick={goWithdraw}>
                    <FiMinusCircle fontSize="22px"/>
                    <p>Nova <br/> saída</p>
                </AddOrRemove>
            
            </InfBox>
        </Container>
        </>
    )
}

const Title=styled.p`
    color:white;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    height: 26px;
    margin-bottom: 25px;
`
const Top=styled.div`
    display:flex;
    justify-content: space-between;
`
const Container=styled.div`
    width: 90%;
    margin: 25px auto 0px auto;
`
const BoxValues=styled.div`
    height:calc(100vh - 200px);
    background-color: white;
    border-radius: 5px;
    
    overflow:  scroll;
    margin-bottom: 20px;
    h2{
        color: #868686;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        text-align: center;
        margin-top: 44%;
    }
`

const InfBox=styled.div`
    display: flex;
    justify-content: space-between;
   position: relative;
`
const AddOrRemove=styled.div`
    width: 46%;
    background-color: #A328D6;
    height: 70px;
    border-radius: 5px;
    color:white;
    margin-top: 13px;
    padding-left: 10px;
    padding-top: 5px;
    p{
        margin-top: 6px;
        font-size: 16px;
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
    }
`
const BalanceBox=styled.div`
    display:flex;
    width: calc(90vw - 20px);
    justify-content: space-between;
    background-color: white;
    height: 25px;
    padding-top:3px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: -0%;
    font-family: 'Raleway', sans-serif;
    position: absolute;
    bottom: 106px;
    border-radius: 0 0 5px 5px;
    border-top: 1px;
    border-color: lightgrey;
    border-style: solid;
    h4{
        font-weight: 700;
        color: black;
        font-size: 17px;
    }
    p{
        color:${props=>props.value>-0?'#03AC00':"#C70000"};
    }
`