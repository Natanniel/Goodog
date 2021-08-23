import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import { NavMenu, MenuContainer, Logo, Menubox, BtnEntrar, MenuBoxRight, CriarConta } from './styled';
import DialogSignup from '../../dialogs/signup'
import DialogSignin from '../../dialogs/signin'
import { Link, useHistory } from "react-router-dom";

function Menu({ nav }) {

    let [visivel, setVisivel] = useState(false);
    let [visivelLogin, setVisivelLogin] = useState(false);

    useEffect(() => {

    }, [])

    let fecharModalSignup = () => {
        setVisivel(false)
    }

    let fecharModalSignin = () => {
        setVisivelLogin(false)
    }


    return (
        <NavMenu>
            {/*  <Link to="/cliente" style={{ height: 40, width: 165,top:25,left:120, display: 'block', position: 'absolute' }}></Link>
            
            <span onClick={() => setVisivel(true)} style={{ height: 40, width: 165,top:25,left:1060, display: 'block', position: 'absolute' }}></span>
            <span onClick={() => setVisivelLogin(true)} style={{ height: 40, width: 65,top:25,left:1260, display: 'block', position: 'absolute' }}></span>
           */}
            <MenuContainer>
                <Logo />

                <Menubox>
                    <li style={{ width: '80px' }}>Serviço<i></i>
                        <div>
                            <ul>
                                <li>Hospedagem </li>
                                <li>Creche</li>
                                <li>Babá</li>
                                <li>Passeio</li>
                            </ul>
                        </div>
                    </li>
                    <li>Como funciona?</li>
                    <li>Fazer parte</li>
                    <li>Dúvidas</li>
                    <li>Blog</li>

                </Menubox>
                <MenuBoxRight>
                    <CriarConta onClick={() => setVisivel(true)}>Criar conta</CriarConta>
                    <BtnEntrar onClick={() => setVisivelLogin(true)}>Entrar</BtnEntrar>
                </MenuBoxRight>
            </MenuContainer>
            {visivel ? <DialogSignup fechar={fecharModalSignup} /> : null}
            {visivelLogin ? <DialogSignin nav={nav} fechar={fecharModalSignin} /> : null}


        </NavMenu>
    );
}

export default Menu;