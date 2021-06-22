import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import GlobalStyle from "../styles/globalStyles"

export default function App(){
    return(
        <>
    <GlobalStyle />
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/register" exact>
                <Register/>
            </Route>
        </Switch>
    </BrowserRouter>
    </>
    )
}