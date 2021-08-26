import React from 'react';

// import { Container } from './styles';

import { LogoR, SeparatorR } from '../styledResponsive'
import { BtnEntrar,BtnNoHas, FooterButtons, EsqueciSenha, LembrarSenha, Email, Titulo, Facebook, Google, Subtitulo } from './styled'

function inicial() {
  return (
    <div>
      <LogoR></LogoR>

      <Titulo>Entrar</Titulo>

      <div style={{ marginTop: 16 }}>
        <Facebook>Entrar com Facebook</Facebook>
        <Google>Entrar com Google</Google>
        <SeparatorR></SeparatorR>
        <Subtitulo>Ou entre com seus dados</Subtitulo>
        <Email placeholder="E-mail"></Email>
        <Email placeholder="Senha" type="password"></Email>
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
          <BtnEntrar>Entrar</BtnEntrar>
          <BtnNoHas>Não tenho conta ainda</BtnNoHas>
        </FooterButtons>

      </div>
    </div>
  );
}

export default inicial;