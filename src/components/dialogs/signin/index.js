import React, { useEffect, useState } from 'react';

import { Link, useHistory } from "react-router-dom";
// import { Container } from './styles';
import { Close, BackgroundModal, Modal, Title, BtnSemConta, Cadastrar, BtnEntrar, JaTenhoConta, BtnFacebook, BtnGoogle, LabelInfo, InputDiv, Input, CheckboxLabel } from './style';

function Dialogs({ fechar, nav }) {


    return (
        <BackgroundModal>
            <Modal>
                <Close onClick={() => fechar()}></Close>
                <Title>Entrar</Title>
                <BtnFacebook>Entrar com Facebook</BtnFacebook>
                <BtnGoogle>Entrar com Google</BtnGoogle>
                <div style={{ width: '238px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'block', margin: '0 auto', marginTop: 26 }}></div>

                <LabelInfo>Ou entre com seus dados</LabelInfo>

                <InputDiv>
                    <Input placeholder='E-mail' />
                </InputDiv>
                <InputDiv>
                    <Input placeholder='Senha' />
                </InputDiv>
                <div style={{ height: 47, }}>
                    <div style={{ width: '50%', float: 'left' }}>
                        <CheckboxLabel>
                            <input type="checkbox" /> Lembrar Senha
                        </CheckboxLabel>
                    </div>
                    <div style={{ width: '50%', float: 'left' }}>
                        <label style={{ color: '#1B98A7', fontSize: '14px', fontFamily: 'Poppins', textAlign: 'right', height: '36px', marginTop: '17px', display: 'block', lineHeight: '36px', marginRight: 55, cursor: 'pointer' }}> Esqueci a senha</label>
                    </div>
                </div>
                <Link to="/cliente" style={{textDecoration:'none'}}>
                    <BtnEntrar>Entrar</BtnEntrar>
                </Link>
                <BtnSemConta>Não tenho conta ainda</BtnSemConta>
            </Modal>
        </BackgroundModal >
    )
}

export default Dialogs;

//C14W00700451
//C14W00700395