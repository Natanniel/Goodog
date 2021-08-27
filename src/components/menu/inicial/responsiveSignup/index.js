import Cookies from 'js-cookie';
import React, { useState } from 'react';
import api from '../../../../service/api';

// import { Container } from './styles';

import { LogoR, SeparatorR, ReturnLogo } from '../styledResponsive'
import { BtnEntrar, BtnNoHas, FooterButtons, CheckboxLabel, EsqueciSenha, LembrarSenha, Email, Titulo, Facebook, Google, Subtitulo } from './styled'

function Inicial({ retornar }) {

  let [email, setEmail] = useState('');
  let [nome, setNome] = useState('');
  let [telefone, setTelefone] = useState('');
  let [senha, setSenha] = useState('');
  let [checkConcordo, setConcordo] = useState(false);

  let login = () => {
    api.post('usuario/login', { email, senha }).then(function (e) {
      Cookies.set('usuario', e.data.id);
      window.location.reload();
    }).catch(function () {
      alert('Usuario ou senha inválidos');
    })
  }


  return (
    <div>
      <ReturnLogo onClick={() => retornar()} />
      <LogoR style={{ marginLeft: 20 }}></LogoR>
      <Titulo>Cadastre-se</Titulo>
      <div style={{ marginTop: 16 }}>
        <Facebook>Entrar com Facebook</Facebook>
        <Google>Entrar com Google</Google>
        <SeparatorR></SeparatorR>
        <Subtitulo>Ou entre com seus dados</Subtitulo>
        <Email placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></Email>
        <Email placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)}></Email>
        <Email placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}></Email>
        <Email placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}></Email>
        <div>
          <CheckboxLabel><input type="checkbox" name="checkbox" value="value" />Ser notificado sobre meus pedidos via e-mail e Whatsapp.</CheckboxLabel>
          <CheckboxLabel style={{ marginBottom: '13px', marginTop: 4 }}><input type="checkbox" name="checkbox" checked={checkConcordo} onChange={() => setConcordo(!checkConcordo)} />Concordo com os <label onClick={() => alert('Ainda não especificado')}>Termos de Uso</label> e <label onClick={() => alert('Ainda não especificado')}>Política de Privacidade</label> da Goodog.</CheckboxLabel>

        </div>
      

        <FooterButtons>
          <BtnEntrar onClick={() => login()}>Entrar</BtnEntrar>
          <BtnNoHas>Já tenho ainda</BtnNoHas>
          
        </FooterButtons>

      </div>
    </div>
  );
}

export default Inicial;