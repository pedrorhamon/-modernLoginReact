import React, { useState } from 'react'
import './login.css'

import { MdEmail, MdLock } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { HiEye, HiEyeOff } from "react-icons/hi";


function Login() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
     }

    return (
        <div className="login">
            <div className="login-logo">
                <img
                    src="https://freedesignfile.com/upload/2017/08/uranus-icon-vector.png" alt="logo app" />
            </div>
            <div className="login-right">
                <h1>Login</h1>

                <div className="login-InputNome">
                    <BsFillPersonFill />
                    <input type="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div className="login-InputEmail">
                    <MdEmail />
                    <input type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-InputPassword">
                    <MdLock />
                    <input type={show ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff
                                size={20}
                                onClick={handleClick}
                            />
                        )}
                    </div>
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