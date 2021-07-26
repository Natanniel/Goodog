import React from 'react';

// import { Container } from './styles';
import { Background, Logo, Titulo, SubTitulo, Box, Label, Input, DivOpacity, RecoverPassword, CheckboxDiv, Checkbox, LabelCheckbox, BtnEntrar } from './style';
const ImagemLogo = require('../../../assets/img/logotipo.png');

function login() {
    return (
        <Background>
            <DivOpacity>
                <Logo src={ImagemLogo} />
                <Titulo>Recuperar Senha</Titulo>
                <SubTitulo>Insira os dados abaixo e continue</SubTitulo>
                <Box>
                    <Label>Email de recuperação de senha</Label>
                    <Input placeholder="Insira seu e-mail" />
                 
                    <BtnEntrar>
                        Recuperar senha
                </BtnEntrar>
                </Box>
            </DivOpacity>
        </Background>
    );
}

export default login;