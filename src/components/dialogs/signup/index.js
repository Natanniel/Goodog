import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import { Close, BackgroundModal, Modal, Title, Cadastrar, JaTenhoConta, BtnFacebook, BtnGoogle, LabelInfo, InputDiv, Input, CheckboxLabel } from './style';

function Dialogs({ fechar }) {


    return (
        <BackgroundModal>
            <Modal>
                <Close onClick={() => fechar()}>X</Close>
                <Title>Cadastre-se</Title>
                <BtnFacebook>Entrar com Facebook</BtnFacebook>
                <BtnGoogle>Entrar com Google</BtnGoogle>
                <div style={{ margin: '0 auto', marginTop: '16px', width: '238px', border: '1px solid rgba(0,0,0,0.12)' }}></div>
                <LabelInfo>Ou informe os dados abaixo</LabelInfo>
                <InputDiv>
                    <Input placeholder="E-mail" />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Nome completo" />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Telefone" />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Senha" type={'password'} />
                </InputDiv>

                <CheckboxLabel><input type="checkbox" name="checkbox" value="value" />Ser notificado sobre meus pedidos via e-mail e Whatsapp.</CheckboxLabel>
                <CheckboxLabel style={{ marginBottom: '13px' }}><input type="checkbox" name="checkbox" value="value" />Concordo com os Termos de Uso e Política de Privacidade da Goodog.</CheckboxLabel>
                <Cadastrar>Cadastrar</Cadastrar>
                <JaTenhoConta>Ja tenho conta</JaTenhoConta>
            </Modal>
        </BackgroundModal>
    )
}

export default Dialogs;

//C14W00700451
//C14W00700395