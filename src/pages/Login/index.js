import React from 'react'
import './login.css'

import { MdEmail, MdLock} from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const Login = () => {
    return(
        <div className="login">
            <div className="login-logo">
                <img 
                src="https://img.icons8.com/clouds/2x/login-rounded-right.png" alt="logo app" />
            </div>
            <div className="login-right">
                <h1>Login</h1>

                <div className="login-InputNome">
                    <BsFillPersonFill />
                    <input type="text"
                    placeholder="Digite seu nome"/>
                </div>

                <div className="login-InputEmail">
                    <MdEmail />
                    <input type="text"
                    placeholder="Digite seu email"/>
                </div>

                <div className="login-InputPassword">
                    <MdLock />
                    <input type="text"
                    placeholder="Digite sua senha"/>
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Não tem conta</h4>
                <button type="submit">
                    Registrar
                </button>
            </div>
        </div>
    )
}

export default Login;