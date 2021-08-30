import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle, Filters, BtnPesquisarnormal } from './styled'

import { Container } from '../../../components/globals'
import { SearchTopics, SearchTypes, LeftTitleFilterSpan, LeftTitleFilterSpan2, Box, LeftDiv, RankingStars, Valor, FinaisSemana, RankingRecorrencia, ProfileRanking, RightDiv, Profile, ProfileInfo, ProfileNome, LeftTitleFilter, BtnFilter, SelectFilter, Map, Separator, CardUser } from './styled'
import { Link, useHistory } from "react-router-dom";


function Inicial() {



    return (
        <div>

            <Menu style={{}} />
            <Box>
                <Filters>
                    <fieldset style={{ width: 168, height: 55, borderRadius: 3 }}>
                        <legend>Serviço</legend>
                    </fieldset>
                    <fieldset style={{ width: 283, height: 55, borderRadius: 3 }}>
                        <legend>Seu endereço</legend>
                    </fieldset>
                    <fieldset style={{ width: 179, height: 55, borderRadius: 3 }}>
                        <legend>Entrada</legend>
                    </fieldset>
                    <fieldset style={{ width: 179, height: 55, borderRadius: 3 }}>
                        <legend>Saida</legend>
                    </fieldset>
                    <BtnPesquisarnormal>
                        <Link to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                            Encontrar
                        </Link>
                    </BtnPesquisarnormal>
                </Filters>

            </Box>
            <Container style={{ minHeight: 700 }}>
                <LeftDiv>
                    <div style={{ height: 48 }}>
                        <LeftTitleFilter>
                            <LeftTitleFilterSpan>Hospedagens próximas a</LeftTitleFilterSpan>
                            <LeftTitleFilterSpan2 >Rua Silveira, Porto</LeftTitleFilterSpan2>

                        </LeftTitleFilter>

                        <BtnFilter>Filtrar</BtnFilter>
                        <SelectFilter>
                            <select>
                                <option>Mais relevantes</option>
                            </select>
                        </SelectFilter>
                    </div>

                    <SearchTopics>
                        <span>Hospedagem</span>
                        <span>Até 5kg</span>
                    </SearchTopics>

                    <SearchTypes>
                        <span id="comboSearch" style={{ float: 'left' }}>Mais relevantes </span>
                        <span id="mapView">Mapa</span>

                    </SearchTypes>



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