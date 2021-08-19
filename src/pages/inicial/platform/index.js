import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle } from './styled'

import { Container } from '../../../components/globals'
import { Box, LeftDiv, RankingStars, Valor, FinaisSemana, RankingRecorrencia, ProfileRanking, RightDiv, Profile, ProfileInfo, ProfileNome, LeftTitleFilter, BtnFilter, SelectFilter, Map, Separator, CardUser } from './styled'
import { Link, useHistory } from "react-router-dom";


function Inicial() {



    return (
        <div>

            <Menu />
            <Box>

            </Box>
            <Container style={{ minHeight: 700 }}>
                <LeftDiv>
                    <div style={{ height: 48 }}>
                        <LeftTitleFilter>
                            <span style={{ fontSize: 16, fontFamily: 'Poppins', color: 'rgba(0, 0, 0, 0.87)', width: 215, display: 'block' }}>Hospedagens próximas a</span>
                            <span style={{ fontSize: 20, fontFamily: 'Poppins', color: '#1B98A7', display: 'block', width: 215, marginTop: -5, paddingTop: 0 }}>Rua Silveira, Porto</span>

                        </LeftTitleFilter>

                        <BtnFilter>Filtrar</BtnFilter>
                        <SelectFilter>
                            <select>
                                <option>Mais relevantes</option>
                            </select>
                        </SelectFilter>
                    </div>
                    <Separator></Separator>
                    <div>
                        <CardUser>
                            <Profile></Profile>
                            <ProfileInfo>
                                <Link to={'/cliente/hero'} style={{ textDecoration: 'none' }}>
                                    <ProfileNome>Carla Pereira <span>2.5km</span></ProfileNome>
                                </Link>
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
                    </div>
                </LeftDiv>
                <RightDiv>
                    <Map>MAPA</Map>
                </RightDiv>
            </Container>


            <Footer />

        </div>
    );
}

export default Inicial;