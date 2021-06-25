import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import Deposit from "./Deposit"
import Withdraw from "./Withdraw"
import GlobalStyle from "../styles/globalStyles"
import UserContext from "../contexts/UserContext"
import { useState } from 'react';
export default function App(){
    const [userData, setUserData] = useState("")
    return(
        <>
    <UserContext.Provider value={{userData,setUserData}}>
    <GlobalStyle />
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/register" exact>
                <Register/>
            </Route>
            <Route path="/home" exact>
                <Home/>
            </Route>
            <Route path="/deposit" exact>
                <Deposit/>
            </Route>
            <Route path="/withdraw" exact>
                <Withdraw/>
            </Route>
        </Switch>
    </BrowserRouter>
    </UserContext.Provider>
    </>
    )
}