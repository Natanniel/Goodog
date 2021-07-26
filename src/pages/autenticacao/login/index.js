// Este módulo possui método de submit não recomendado
// Será corrigido quando for implementar api call's

import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Toastr from 'toastr';

import { Background, Logo, Titulo, SubTitulo, Box, Label, Input, DivOpacity, RecoverPassword, CheckboxDiv, Checkbox, LabelCheckbox, BtnEntrar } from './style';
const ImagemLogo = require('../../../assets/img/logotipo.png');

function Login({ navigation }) {

    let [email, setEmail] = useState('');
    let [senha, setSenha] = useState('');
    const history = useHistory();
      
    const Autenticar = () => {

        if (email == "admin@admin.com.br" && senha == "123456")
            history.push("/admin/dashboard")
        else
            Toastr.error("Usuario ou senha invalido");
    }

    return (
        <Background>
            <DivOpacity>

                <Logo src={ImagemLogo} />
                <Titulo>Bem-vindo!</Titulo>
                <SubTitulo>Insira os dados abaixo e continue</SubTitulo>
                <Box>
                    <Label>Email</Label>
                    <Input placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                Autenticar()
                            }
                        }}
                    />
                    <Label>Senha</Label>
                    <Input type="password" onEnter placeholder="Insira sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}
                        onKeyPress={event => {
                            console.log(event);
                            if (event.key === 'Enter') {
                                Autenticar()
                            }
                        }}
                    />
                    <RecoverPassword>
                        <Link to="/recuperarsenha">
                            Esqueci a senha
                        </Link>
                    </RecoverPassword>

                    <CheckboxDiv>
                        <Checkbox type="checkbox"></Checkbox>
                        <LabelCheckbox>Lembrar de mim</LabelCheckbox>
                    </CheckboxDiv>
                    <BtnEntrar onClick={() => Autenticar()}>
                        Entrar
                    </BtnEntrar>
                </Box>

            </DivOpacity>
        </Background>
    );
}

export default Login;