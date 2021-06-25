import styled from "styled-components"
export default function Transaction({tipo,valor,data,descricao}){
    if(valor.includes(".")){
        valor=valor.replace(".",",")
        if(valor[valor.length-2]===","){
            valor=valor+"0"
        }    
    }else{
        valor=valor+",00"
    }
    
    
    return(
        <Container>
            <DayAndDescriptionBox>
            <Day>{data}</Day>
            <Description>{descricao}</Description>
            </DayAndDescriptionBox>
            <Value color={tipo}> {valor}</Value>
        </Container>
        
    )
}

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 18px;
    font-size: 16px;
    overflow:  hidden;
    :first-child{
        padding-top: 22px;
    }
`
const DayAndDescriptionBox=styled.div`
display: flex;

`
const Day=styled.p`
    color:#C6C6C6;
    margin-right: 6px;
`
const Description=styled.p`
    color:black;
    word-break: break-all;
    max-width: 80%;
`
const Value=styled.p`
    color:${props=>props.color==='entrada'?'#03AC00':'#C70000'};
`

