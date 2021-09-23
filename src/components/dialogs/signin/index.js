import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

import { Link, useHistory } from "react-router-dom";
import api from '../../../service/api';
// import { Container } from './styles';
import { Close, BackgroundModal, Modal, Title, BtnSemConta, Cadastrar, BtnEntrar, JaTenhoConta, BtnFacebook, BtnGoogle, LabelInfo, InputDiv, Input, CheckboxLabel } from './style';

function Dialogs({ fechar, nav }) {

    let [email, setEmail] = useState('');
    let [senha, setSenha] = useState('')

    let login = () => {
        api.post('usuario/login', { email, senha }).then(function (e) {
            Cookies.set('usuario', e.data.id);
            window.location.reload();
        }).catch(function () {
            alert('Usuario ou senha inválidos');
        })
    }

    let naoTenhoConta = () => {
        fechar();
        document.getElementById('criarconta').click();
    }

    return (
        <BackgroundModal>
            <Modal>
                <Close onClick={() => fechar()}>X</Close>
                <Title>Entrar</Title>
                <BtnFacebook onClick={() => alert('Integração em revisão.')}>Entrar com Facebook</BtnFacebook>
                <BtnGoogle onClick={() => alert('Desculpe ! o seu token ainda não foi autorizado.')}>Entrar com Google</BtnGoogle>
                <div style={{ width: '238px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'block', margin: '0 auto', marginTop: 26 }}></div>

                <LabelInfo>Ou entre com seus dados</LabelInfo>

                <InputDiv>
                    <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder='Senha' type={'password'} value={senha} onChange={(e) => setSenha(e.target.value)} />
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

                <BtnEntrar onClick={() => login()}>Entrar</BtnEntrar>
                <Link to="/cliente" style={{ textDecoration: 'none' }}></Link>
                <BtnSemConta onClick={() => naoTenhoConta()}>Não tenho conta ainda</BtnSemConta>
            </Modal>
        </BackgroundModal >
    )
}

export default Dialogs;

//C14W00700451
//C14W00700395