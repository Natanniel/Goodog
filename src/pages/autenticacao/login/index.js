import React from 'react';

// import { Container } from './styles';
import { Background, Logo, Titulo, SubTitulo, Box, Label, Input, DivOpacity, RecoverPassword, CheckboxDiv, Checkbox, LabelCheckbox, BtnEntrar } from './style';
const ImagemLogo = require('../../../assets/img/logotipo.png');

function login() {
    return (
        <Background>
            <DivOpacity>
                <Logo src={ImagemLogo} />
                <Titulo>Bem vindo !</Titulo>
                <SubTitulo>Insira os dados abaixo e continue</SubTitulo>
                <Box>
                    <Label>Email</Label>
                    <Input placeholder="Insira seu e-mail" />
                    <Label>Senha</Label>
                    <Input placeholder="Insira seu e-mail" />
                    <RecoverPassword>Esqueci a senha</RecoverPassword>
                    <CheckboxDiv>
                        <Checkbox type="checkbox"></Checkbox>
                        <LabelCheckbox>Lembrar de mim</LabelCheckbox>
                    </CheckboxDiv>
                    <BtnEntrar>
                        Entrar
                </BtnEntrar>
                </Box>
            </DivOpacity>
        </Background>
    );
}

export default login;