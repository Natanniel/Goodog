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


  let cadastrar = () => {
    if (email.length > 3)
      if (nome.length > 10)
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
                retornar();
              }).catch(function () {
                alert('Usuario já cadastrado em nosso sistema');
              })
            } else alert('Você precisa concordar com os termos de uso e politicas de privacidade.')
          else
            alert('sua senha deve conter pelo menos 6 digitos');
        else
          alert('Você precisa informar um telefone válido');
      else
        alert('Você precisa informar um seu nome completo');
    else
      alert('Você precisa informar um email válido');
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
          <BtnEntrar onClick={() => cadastrar()}>Cadastrar</BtnEntrar>
          <BtnNoHas>Já tenho conta</BtnNoHas>

        </FooterButtons>

      </div>
    </div>
  );
}

export default Inicial;