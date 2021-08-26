import Cookies from 'js-cookie';
import React, { useState } from 'react';
import api from '../../../../service/api';

// import { Container } from './styles';

import { LogoR, SeparatorR } from '../styledResponsive'
import { BtnEntrar, BtnNoHas, FooterButtons, EsqueciSenha, LembrarSenha, Email, Titulo, Facebook, Google, Subtitulo } from './styled'

function Inicial() {

  let [email, setEmail] = useState('');
  let [senha, setSenha] = useState('');

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
      <LogoR></LogoR>

      <Titulo>Entrar</Titulo>

      <div style={{ marginTop: 16 }}>
        <Facebook>Entrar com Facebook</Facebook>
        <Google>Entrar com Google</Google>
        <SeparatorR></SeparatorR>
        <Subtitulo>Ou entre com seus dados</Subtitulo>
        <Email placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></Email>
        <Email placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}></Email>
        <div>
          <div style={{ float: 'left', width: '50%' }}>
            <LembrarSenha>
              <input type="checkbox" name="checkbox" value="value" />Lembrar senha
            </LembrarSenha>

          </div>
          <div style={{ float: 'left', width: '50%' }}>
            <EsqueciSenha>Esqueci a senha</EsqueciSenha>
          </div>
        </div>

        <FooterButtons>
          <BtnEntrar onClick={() => login()}>Entrar</BtnEntrar>
          <BtnNoHas>Não tenho conta ainda</BtnNoHas>
        </FooterButtons>

      </div>
    </div>
  );
}

export default Inicial;