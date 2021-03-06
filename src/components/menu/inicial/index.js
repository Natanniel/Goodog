import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import { NavMenu, LabelNomeUsuario, ImgUser, MenuContainer, Logo, Idioma, Menubox, BtnEntrar, MenuBoxRight, CriarConta } from './styled';
import { SocialR, CriarContaR, MenuR, SeparatorFR, SeparatorR, EntrarR, ResponsiveR, NavMenuResponsive, NavMenuResponsiveLogado, Sidebar, LogoR, ReturnLogo } from './styledResponsive';

import DialogSignup from '../../dialogs/signup'
import DialogSignin from '../../dialogs/signin'
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

import Sign from './responsiveSign';
import Signup from './responsiveSignup';

function Menu({ nav }) {

    let [visivel, setVisivel] = useState(false);
    let [visivelLogin, setVisivelLogin] = useState(false);
    let [logado, setLogado] = useState(false);
    let [nome, setNome] = useState('');

    let [inicio, setInicio] = useState(true);
    let [menu, setMenu] = useState(false);
    let [pets, setPets] = useState(false);
    let [favoritos, setFavoritos] = useState(false);
    let [pedidos, setPedidos] = useState(false);


    let [sign, setSign] = useState(false);
    let [signup, setSignup] = useState(false);

    useEffect(() => {
        var token = Cookies.get("usuario");
        if (token != undefined) {
            setLogado(true);
            setNome(Cookies.get("nome"));
        }
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
        setMenu(true);
        setInicio(false);
        setFavoritos(false);
        setPedidos(false);
        setPets(false)
    }

    let verInicio = () => {
        setInicio(true);
        setMenu(false);
        setFavoritos(false);
        setPedidos(false);
        setPets(false);
    }

    let verPets = () => {
        setPets(true);
        setMenu(false);
        setInicio(false);
        setFavoritos(false);
        setPedidos(false);
    }
    let verFavoritos = () => {
        setMenu(false);
        setInicio(false);
        setFavoritos(true);
        setPedidos(false);
        setPets(false);
    }

    let verPedidos = () => {
        setMenu(false);
        setInicio(false);
        setPets(false);
        setFavoritos(false);
        setPedidos(true);
    }

    let retornarSubmenu = () => {
        setSign(false);
        setSignup(false);
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
                        <li id={"menuservico"} style={{ width: 100 }}><a href="#">Servi??o</a><i></i>
                            <div>
                                <ul>
                                    <li>Hospedagem</li>
                                    <li>Creche</li>
                                    <li>Bab??</li>
                                    <li>Passeio</li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#como_funciona">Como funciona?</a></li>
                        <li><a href="#fazer_parte">Fazer parte</a></li>
                        <li><a href="#duvidas">D??vidas</a></li>
                        <li><a href="#">Blog</a></li>
                    </Menubox>
                    <MenuBoxRight>
                        {logado ? (
                            <div>
                                  <Idioma>
                                    <i></i>
                                    <span className='brasil' />
                                    <div>
                                        <ul>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </ul>
                                    </div>
                                </Idioma>
                                <LabelNomeUsuario>{nome} <i></i>
                                    <div>
                                        <ul>
                                            <li><Link to='/usuario/perfil'>Perfil </Link></li>
                                            <li><Link to='/usuario/pets'>Pets </Link></li>
                                            <li><Link to='/usuario/pedidos'>Pedidos </Link></li>
                                            <li><Link to='/usuario/favoritos'>Favoritos</Link></li>
                                            <li onClick={() => sair()}>Sair</li>
                                        </ul>
                                    </div>
                                </LabelNomeUsuario>
                                <ImgUser></ImgUser>
                              
                            </div>
                        ) : (
                            <div>
                                <CriarConta id='criarconta' onClick={() => setVisivel(true)}>Criar conta</CriarConta>
                                <BtnEntrar onClick={() => setVisivelLogin(true)}>Entrar</BtnEntrar>
                                <Idioma>
                                    <i></i>
                                    <span className='brasil' />
                                    <div>
                                        <ul>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </ul>
                                    </div>
                                </Idioma>
                            </div>
                        )}

                    </MenuBoxRight>
                </MenuContainer>
                {visivel ? <DialogSignup fechar={fecharModalSignup} /> : null}
                {visivelLogin ? <DialogSignin nav={nav} fechar={fecharModalSignin} /> : null}
            </NavMenu >


            {logado ? (
                <NavMenuResponsiveLogado>
                    <ul>
                        <li onClick={() => verInicio()} className={inicio ? 'active' : ''}>
                            <i id={'house'}></i>
                            <span>Inicio</span>
                        </li>
                        <li onClick={() => verPets()} className={pets ? 'active' : ''}>
                            <i id={'pets'}></i>
                            <span>Pets</span>
                        </li>
                        <li onClick={() => verFavoritos()} className={favoritos ? 'active' : ''}>
                            <i id={'favoritos'}></i>
                            <span>Favoritos</span>
                        </li>
                        <li onClick={() => verPedidos()} className={pedidos ? 'active' : ''}>
                            <i id={'pedidos'}></i>
                            <span>Pedidos</span>
                        </li>

                        <li onClick={() => verMenu()} className={menu ? 'active' : ''}>
                            <i id={'menu'}></i>
                            <span>Menu</span>
                        </li>
                    </ul >
                </NavMenuResponsiveLogado>
            ) : (
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
                    </ul >

                </NavMenuResponsive >
            )}

            {
                menu ? (
                    <Sidebar>
                        <ResponsiveR>

                            {sign ? <Sign retornar={retornarSubmenu} />
                                :
                                signup ? <Signup retornar={retornarSubmenu} />
                                    : (
                                        <div>
                                            <LogoR></LogoR>
                                            <div style={{ marginTop: 37, height: '36px' }}>
                                                <CriarContaR onClick={() => setSignup(true)}>Criar conta</CriarContaR>
                                                <EntrarR onClick={() => setSign(true)}>Entrar</EntrarR>

                                            </div>
                                            <SeparatorFR />
                                            <MenuR>
                                                Servi??o
                                            </MenuR>
                                            <SeparatorR />
                                            <MenuR>
                                                Como funciona?
                                            </MenuR>
                                            <SeparatorR />
                                            <MenuR>
                                                Fa??a parte
                                            </MenuR>
                                            <SeparatorR />
                                            <MenuR>
                                                D??vidas
                                            </MenuR>
                                            <SocialR>
                                                <i id='facebook' style={{ marginLeft: '90px' }}></i>
                                                <i id='instagram'></i>
                                                <i id='youtube'></i>
                                            </SocialR>
                                        </div>
                                    )}
                        </ResponsiveR>
                    </Sidebar >
                ) : null
            }

        </div >
    );
}

export default Menu;