import React, { useEffect, useState } from 'react';
import api from '../../../service/api';
import PasswordStrengthBar from 'react-password-strength-bar';

// import { Container } from './styles';
import { Close, BackgroundModal, Modal, Title, Cadastrar, JaTenhoConta, BtnFacebook, BtnGoogle, LabelInfo, InputDiv, Input, CheckboxLabel } from './style';

function Dialogs({ fechar }) {

    let [email, setEmail] = useState('');
    let [nome, setNome] = useState('');
    let [sobrenome, setSobrenome] = useState('');
    let [telefone, setTelefone] = useState('');
    let [senha, setSenha] = useState('');
    let [checkConcordo, setConcordo] = useState(false)

    let cadastrar = () => {
        if (email.length > 3)
            if (nome.length > 2)
                if (sobrenome.length > 2)
                    if (telefone.length >= 9)
                        if (telefone.length >= 6)
                            if (checkConcordo) {
                                let dados = {
                                    email,
                                    nome,
                                    telefone,
                                    senha
                                }

                                api.post('usuario/criar', dados).then(function () {
                                    alert('Usuario criado com sucesso !');
                                }).catch(function () {
                                    alert('Usuario já cadastrado em nosso sistema');
                                })
                            } else alert('Você precisa concordar com os termos de uso e politicas de privacidade.')
                        else
                            alert('sua senha deve conter pelo menos 6 digitos');
                    else
                        alert('Você precisa informar um telefone válido');
                else
                    alert('Você precisa informar seu sobrenome');
            else
                alert('Você precisa informar seu nome');
        else
            alert('Você precisa informar um email válido');
    }

    return (
        <BackgroundModal>
            <Modal>
                <Close onClick={() => fechar()}>X</Close>
                <Title>Cadastre-se</Title>
                <BtnFacebook onClick={() => alert('Integração em revisão.')}>Entrar com Facebook</BtnFacebook>
                <BtnGoogle onClick={() => alert('Desculpe ! o seu token ainda não foi autorizado.')}>Entrar com Google</BtnGoogle>
                <div style={{ margin: '0 auto', marginTop: '16px', width: '238px', border: '1px solid rgba(0,0,0,0.12)' }}></div>
                <LabelInfo>Ou informe os dados abaixo</LabelInfo>
                <InputDiv>
                    <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Senha" type={'password'} value={senha} onChange={(e) => setSenha(e.target.value)} />
                </InputDiv>
                <div style={{ fontFamily: 'Poppins' }}>
                    <PasswordStrengthBar shortScoreWord={'Informe uma senha'} style={{ fontFamily: 'Poppins' }} scoreWords={['Fraca', 'Fraca', 'Bom', 'Ótimo', 'Excelente']} style={{ width: 326, margin: '0 auto', marginTop: 10 }} password={senha} />
                </div>
                <CheckboxLabel><input type="checkbox" name="checkbox" value="value" />Ser notificado sobre meus pedidos via e-mail e Whatsapp.</CheckboxLabel>
                <CheckboxLabel style={{ marginBottom: '13px', marginTop: 4 }}><input type="checkbox" name="checkbox" checked={checkConcordo} onChange={() => setConcordo(!checkConcordo)} />Concordo com os <label onClick={() => alert('Ainda não especificado')}>Termos de Uso</label> e <label onClick={() => alert('Ainda não especificado')}>Política de Privacidade</label> da Goodog.</CheckboxLabel>
                <div style={{marginTop:25}}>
                    <Cadastrar onClick={() => cadastrar()}>Cadastrar</Cadastrar>
                    <JaTenhoConta>Ja tenho conta</JaTenhoConta>
                </div>
            </Modal>
        </BackgroundModal>
    )
}

export default Dialogs;

//C14W00700451
//C14W00700395