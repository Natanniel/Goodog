import React, { useEffect, useState } from 'react';
import api from '../../../service/api';
import PasswordStrengthBar from 'react-password-strength-bar';
import InputMask from "react-input-mask";
import { Close, BackgroundModal, LabelErro, Modal, Title, Cadastrar, JaTenhoConta, BtnFacebook, BtnGoogle, LabelInfo, InputDiv, Input, CheckboxLabel, LabelPassword } from './style';
import toastr from 'toastr'
function Dialogs({ fechar }) {

    let [email, setEmail] = useState('');
    let [emailInvalid, setEmailInvalid] = useState(false);
    let [nome, setNome] = useState('');
    let [nomeInvalid, setNomeInvalid] = useState(false);
    let [sobrenome, setSobrenome] = useState('');
    let [telefone, setTelefone] = useState('');
    let [senha, setSenha] = useState('');
    let [confirmaSenha, setConfirmaSenha] = useState('');
    let [checkConcordo, setConcordo] = useState(false)

    // Senha validadores 
    let [passMinimum, setPassMinimum] = useState(false);
    let [passUppercase, setPassUppercase] = useState(false);
    let [passLowerCase, setPassLowerCase] = useState(false);
    let [passNumber, setPassNumber] = useState(false);
    let [passEspecial, setPassEspecial] = useState(false);

    var passwordValidator = require('password-validator');
    var schema = new passwordValidator();
    schema.is().min(8)                                    // Minimum length 8
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(1)                                // Must have at least 2 digits
        .has().symbols(1)                               // Must have at symbols
        .has().not().spaces();                          // Should not have spaces

    let cadastrar = () => {
        if (emailInvalid == false && email.length > 5)
            if (nomeInvalid == false && nome.length > 2)
                if (sobrenome.length > 2)
                    if (telefone.length >= 14)
                        if (senha.length >= 6 && passMinimum && passUppercase && passLowerCase && passNumber && passEspecial)
                            if (senha == confirmaSenha)
                                if (checkConcordo) {
                                    let dados = {
                                        email,
                                        nome,
                                        telefone,
                                        senha
                                    }

                                    api.post('usuario/criar', dados).then(function () {
                                        toastr.error('Usuario criado com sucesso !');
                                    }).catch(function () {
                                        toastr.error('Usuario já cadastrado em nosso sistema');
                                    })
                                } else toastr.error('Você precisa concordar com os termos de uso e politicas de privacidade.')
                            else
                                toastr.error('Sua senha e confirmação de senha devem ser iguais')
                        else
                            toastr.error('A senha informada não obedece os critérios de segurança');
                    else
                        toastr.error('Você precisa informar um telefone válido');
                else
                    toastr.error('Você precisa informar seu sobrenome');
            else
                toastr.error('Você precisa informar seu nome');
        else
            toastr.error('Você precisa informar um email válido');
    }

    let changeEmail = (e) => {
        setEmail(e)
        if (emailInvalid) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase()))
                setEmailInvalid(false);
            else
                setEmailInvalid(true);
        }
    }

    let changeNome = (e) => {
        setNome(e);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase()))
            setEmailInvalid(false);
        else
            setEmailInvalid(true);
    }

    let changeSobrenome = (e) => {
        setSobrenome(e);
        if (nomeInvalid) {

        }
    }

    let changePassword = (e) => {
        setSenha(e);
        //'min', 'uppercase', 'lowercase', 'digits', 'symbols'
        let res = schema.validate(e, { list: true });
        let min = true;
        let up = true;
        let low = true;
        let num = true;
        let special = true;

        for (let i = 0; i < res.length; i++) {
            if (res[i] == 'min')
                min = false;

            if (res[i] == 'uppercase')
                up = false;

            if (res[i] == 'lowercase')
                low = false;

            if (res[i] == 'digits')
                num = false;

            if (res[i] == 'symbols')
                special = false
        }

        setPassMinimum(min);
        setPassUppercase(up);
        setPassLowerCase(low);
        setPassNumber(num);
        setPassEspecial(special);

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
                    <i className='email' />
                    <Input placeholder="E-mail" style={{ border: emailInvalid ? '1px solid red' : '1px solid rgba(0,0,0,0.12)' }} value={email} onChange={(e) => changeEmail(e.target.value)} />
                    {emailInvalid ? <LabelErro>Você precisa informar um e-mail válido</LabelErro> : null}
                </InputDiv>
                <InputDiv>
                    <i className='person' />
                    <Input placeholder="Nome" value={nome} onChange={(e) => changeNome(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <i className='person' />
                    <Input placeholder="Sobrenome" value={sobrenome} onChange={(e) => changeSobrenome(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <i className='contact' />
                    <InputMask mask="(99) 99999-9999" placeholder="Celular" style={{ textIndent: 10 }} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <i className='password' />
                    <Input placeholder="Senha" type={'password'} value={senha} onChange={(e) => changePassword(e.target.value)} />
                </InputDiv>
                <InputDiv>
                    <i className='password' />
                    <Input placeholder="Confirmar senha" type={'password'} value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
                </InputDiv>
                <div style={{ fontFamily: 'Poppins' }}>
                    <LabelPassword style={{ fontFamily: 'PoppinsBold', marginTop: 10 }}>Sua senha deve conter :

                    </LabelPassword>
                    <LabelPassword style={{ color: passMinimum ? '#1abc9c' : 'rgba(0,0,0,0.6)' }}>- O mínimo de 8 caracteres </LabelPassword>
                    <LabelPassword style={{ color: passUppercase ? '#1abc9c' : 'rgba(0,0,0,0.6)' }}>- 1 Letra maiuscula</LabelPassword>
                    <LabelPassword style={{ color: passLowerCase ? '#1abc9c' : 'rgba(0,0,0,0.6)' }}>- 1 Letra minúscula</LabelPassword>
                    <LabelPassword style={{ color: passNumber ? '#1abc9c' : 'rgba(0,0,0,0.6)' }}>- 1 Numero </LabelPassword>
                    <LabelPassword style={{ color: passEspecial ? '#1abc9c' : 'rgba(0,0,0,0.6)' }}>- 1 Caractere especial (!@#$%¨&*)</LabelPassword>

                </div>

                <CheckboxLabel><input type="checkbox" name="checkbox" value="value" />Ser notificado sobre meus pedidos via e-mail e Whatsapp.</CheckboxLabel>
                <CheckboxLabel style={{ marginBottom: '13px', marginTop: 4 }}><input type="checkbox" name="checkbox" checked={checkConcordo} onChange={() => setConcordo(!checkConcordo)} />Concordo com os <label onClick={() => alert('Ainda não especificado')}>Termos de Uso</label> e <label onClick={() => alert('Ainda não especificado')}>Política de Privacidade</label> da Goodog.</CheckboxLabel>
                <div style={{ marginTop: 25 }}>
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