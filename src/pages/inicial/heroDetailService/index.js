import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle } from './styled'

import { Content, ContentMB, BoxDogProfile, BoxDog, Linha, BoxService, Titulo, CardUser, TituloSection, Profile, ProfileInfo, ProfileNome, ProfileRanking, RankingStars, RankingRecorrencia, FinaisSemana, Valor } from './styled'
import { Container } from '../../../components/globals'
import { Link, useHistory } from "react-router-dom";


function Inicial() {



    return (
        <div>
            <Menu />
            <Content>
                <Container style={{ width: 638, fontFamily: 'Poppins' }}>
                    <Titulo>Converse com Carla</Titulo>

                    <CardUser>
                        <Profile></Profile>
                        <ProfileInfo>
                            <ProfileNome>Carla Pereira <span>2.5km</span></ProfileNome>
                            <ProfileRanking>
                                <RankingStars>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <label>(15)</label>
                                </RankingStars>
                                <RankingRecorrencia>
                                    <span></span>
                                    <label>5 clientes recorrentes</label>
                                </RankingRecorrencia>

                            </ProfileRanking>
                            <FinaisSemana>Atende aos fins de semana</FinaisSemana>
                        </ProfileInfo>
                        <Valor>
                            <span>R$ 30</span>
                            <label>por Noite</label>
                        </Valor>
                    </CardUser>

                    <TituloSection>Qual serviço precisa?</TituloSection>
                    <BoxService>
                        <div style={{ position: 'relative', height: 70 }}>
                            <div style={{ height: 40, width: 137, borderBottom: '2px solid #1B98A7', position: 'absolute', top: 16, left: 24 }}>
                                <span style={{ display: 'block', fontSize: 14, textAlign: 'center' }}>HOSPEDAGEM</span>
                                <span style={{ display: 'block', fontSize: 8, textAlign: 'center', color: 'rgba(0, 0, 0, 0.87)' }}>Hotel</span>
                            </div>
                            <div style={{ height: 40, width: 137, position: 'absolute', top: 16, left: 154 }}>
                                <span style={{ display: 'block', fontSize: 14, textAlign: 'center', color: ' rgba(0, 0, 0, 0.6)' }}>PASSEIO</span>
                                <span style={{ display: 'block', fontSize: 8, textAlign: 'center', color: 'rgba(0, 0, 0, 0.87)' }}>Tab 1</span>
                            </div>
                        </div>
                        <span style={{ display: 'block', fontSize: 16, color: 'rgba(0, 0, 0, 0.87)', marginLeft: 24, marginTop: 5 }}>Quando?</span>
                        <div style={{ marginTop: 9 }}>
                            <fieldset style={{ width: 288, margin: 0, height: 55, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 3, padding: 0, float: 'left', marginLeft: 25 }}>  <legend style={{ fontSize: 12, display: 'block', color: 'rgba(0, 0, 0, 0.6)', marginLeft: 10 }}>Entrada</legend></fieldset>
                            <fieldset style={{ width: 288, margin: 0, height: 55, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 3, padding: 0, float: 'left', marginLeft: 10 }}>  <legend style={{ fontSize: 12, display: 'block', color: 'rgba(0, 0, 0, 0.6)', marginLeft: 10 }}>Saida</legend></fieldset>
                        </div>
                    </BoxService>
                    <Linha></Linha>
                    <TituloSection>Quem é o hospede?</TituloSection>
                    <BoxDog>
                        <BoxDogProfile />
                        <div style={{ marginTop: 29, float: 'left', marginLeft: 16 }}>
                            <span style={{ display: 'block', fontSize: 20 }}>Tobby</span>
                            <span style={{ display: 'block', marginTop: -7, color: 'rgba(0, 0, 0, 0.6)', fontSize: 14 }}>Husky</span>
                        </div>
                    </BoxDog>
                    <span style={{ display: 'block', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 4, marginTop: 16, color: '#1B98A7', textAlign: 'center', padding: 5, fontSize: 14, cursor: 'pointer' }}>Adicionar novo pet</span>
                    <Linha />
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                        <div style={{ float: 'left' }}>
                            <span style={{ display: 'block', color: '#1B98A7', fontSize: 24 }}>R$ 150</span>
                            <span style={{ display: 'block', color: 'rgba(0, 0, 0, 0.87)', fontSize: 10 }}>5 noites</span>
                        </div>
                        <div style={{ float: 'right' }}>
                            <Link to="/cliente/pedidos" style={{ textDecoration: 'none' }}>
                                <span style={{ display: 'block', fontSize: '14px', borderRadius: 4, float: 'right', border: '1px solid rgba(0, 0, 0, 0.12)', height: 36, width: 128, lineHeight: '36px', color: '#fff', background: '#1B98A7', textAlign: 'center', cursor: 'pointer' }}>Prosseguir</span>
                            </Link>
                            <Link to="/cliente/hero" style={{ textDecoration: 'none' }}>
                                <span style={{ display: 'block', fontSize: '14px', borderRadius: 4, float: 'right', border: '1px solid rgba(0, 0, 0, 0.12)', height: 36, width: 128, lineHeight: '36px', color: '#1B98A7', textAlign: 'center', marginRight: 8, cursor: 'pointer' }}>Cancelar</span>
                            </Link>
                        </div>
                    </div>
                    <br /><br /><br />
                </Container>
            </Content>
            <ContentMB>
                <Link to={'/cliente/hero'} style={{ float: 'right', display: 'block', position: 'absolute', left: '10px', top: '10px', height: 30, width: 330, cursor: 'pointer' }}></Link>
                <Link to={'/cliente/hero'} style={{ float: 'right', display: 'block', position: 'absolute', left: '20px', top: '1030px', height: 30, width: 330, cursor: 'pointer' }}></Link>
                <Link to={'/cliente/pedidos'} style={{ float: 'right', display: 'block', position: 'absolute', left: '20px', top: '985px', height: 30, width: 330, cursor: 'pointer' }}></Link>
            </ContentMB>
            <Footer></Footer>
        </div >
    );
}

export default Inicial;