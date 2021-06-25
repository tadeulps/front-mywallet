import styled from "styled-components"

const Box=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 500px;
    input{
        margin-bottom: 13px;
        height: 54px;
        border-radius: 5px;
        border: none;
        outline: none;
        padding-left: 15px;
        font-size: 20px;
        color: black;
        font-family: 'Raleway', sans-serif;
    }
    input::placeholder{
        color: black;
    }
    button{
        background-color: #A328D6;
        color: white;
        border-radius: 5px;
        border: none;
        height: 45px;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        margin-bottom: 33px;
    }
`
const Redirect=styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: white;
`

export {Form,Redirect,Box};