import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import { NavMenu, LabelNomeUsuario, ImgUser, MenuContainer, Logo, Menubox, BtnEntrar, MenuBoxRight, CriarConta } from './styled';
import { CriarContaR, EntrarR, ResponsiveR, NavMenuResponsive, Sidebar, LogoR } from './styledResponsive';

import DialogSignup from '../../dialogs/signup'
import DialogSignin from '../../dialogs/signin'
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';



function Menu({ nav }) {

    let [visivel, setVisivel] = useState(false);
    let [visivelLogin, setVisivelLogin] = useState(false);
    let [logado, setLogado] = useState(false);

    let [inicio, setInicio] = useState(true);
    let [menu, setMenu] = useState(false);

    useEffect(() => {
        var token = Cookies.get("usuario");
        if (token != undefined)
            setLogado(true)
    }, [])

    let fecharModalSignup = () => {
        setVisivel(false)
    }

    let fecharModalSignin = () => {
        setVisivelLogin(false)
    }

    let sair = () => {
        Cookies.remove("usuario");
        window.location.reload();
    }

    let verMenu = () => {
        setInicio(false);
        setMenu(true);
    }

    let verInicio = () => {
        setInicio(true);
        setMenu(false);
    }

    return (
        <div>
            <NavMenu>
                {/*  <Link to="/cliente" style={{ height: 40, width: 165,top:25,left:120, display: 'block', position: 'absolute' }}></Link>
            
            <span onClick={() => setVisivel(true)} style={{ height: 40, width: 165,top:25,left:1060, display: 'block', position: 'absolute' }}></span>
            <span onClick={() => setVisivelLogin(true)} style={{ height: 40, width: 65,top:25,left:1260, display: 'block', position: 'absolute' }}></span>
           */}
                <MenuContainer>
                    <Link to={'/'} style={{ cursor: 'pointer' }}>
                        <Logo />
                    </Link>



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
                        {logado ? (
                            <div>
                                <LabelNomeUsuario>Usuario <i></i>
                                    <div>
                                        <ul>
                                            <li>Perfil </li>
                                            <li>Pets</li>
                                            <li>Pedidos</li>
                                            <li>Favoritos</li>
                                            <li onClick={() => sair()}>Sair</li>
                                        </ul>
                                    </div>
                                </LabelNomeUsuario>
                                <ImgUser></ImgUser>
                            </div>
                        ) : (
                            <div>
                                <CriarConta onClick={() => setVisivel(true)}>Criar conta</CriarConta>
                                <BtnEntrar onClick={() => setVisivelLogin(true)}>Entrar</BtnEntrar>
                            </div>
                        )}
                    </MenuBoxRight>
                </MenuContainer>
                {visivel ? <DialogSignup fechar={fecharModalSignup} /> : null}
                {visivelLogin ? <DialogSignin nav={nav} fechar={fecharModalSignin} /> : null}


            </NavMenu >

            <NavMenuResponsive>
                <ul>
                    <li onClick={() => verInicio()} className={inicio ? 'active' : ''}>
                        <i id={'house'}></i>
                        <span>Inicio</span>
                    </li>
                    <li onClick={() => verMenu()} className={menu ? 'active' : ''}>
                        <i id={'menu'}></i>
                        <span>Menu</span>
                    </li>
                </ul>
            </NavMenuResponsive>

            {menu ? (
                <Sidebar>
                    <ResponsiveR>
                        <LogoR></LogoR>
                        <div style={{ marginTop: 37 }}>
                            <CriarContaR>Criar conta</CriarContaR>
                            <EntrarR>Entrar</EntrarR>
                        </div>
                    </ResponsiveR>
                </Sidebar>
            ) : null}

        </div>
    );
}

export default Menu;