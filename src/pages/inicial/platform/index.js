import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle, Filters, BtnPesquisarnormal } from './styled'

import { Container } from '../../../components/globals'
import { SearchTopics, SearchTypes, LeftTitleFilterSpan, LeftTitleFilterSpan2, Box, LeftDiv, RankingStars, Valor, FinaisSemana, RankingRecorrencia, ProfileRanking, RightDiv, Profile, ProfileInfo, ProfileNome, LeftTitleFilter, BtnFilter, SelectFilter, Map, Separator, CardUser } from './styled'
import { Link, useHistory } from "react-router-dom";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

function Inicial() {

    const Mapa = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    ))


    return (
        <div>

            <Menu style={{}} />
            <Box>
                <Filters>
                    <fieldset style={{ width: 168, height: 55, borderRadius: 3 }}>
                        <legend>Serviço</legend>
                        <select>
                            <option >Selecione ...</option>
                            <option>Hospedagem</option>
                            <option>Creche</option>
                            <option>Babá</option>
                            <option>Passeio</option>
                        </select>

                    </fieldset>
                    <fieldset style={{ width: 283, height: 55, borderRadius: 3 }}>
                        <legend>Seu endereço</legend>
                        <input />
                    </fieldset>
                    <fieldset style={{ width: 179, height: 55, borderRadius: 3 }}>
                        <legend>Entrada</legend>
                        <input type='date' style={{ width: '95%' }} />
                    </fieldset>
                    <fieldset style={{ width: 179, height: 55, borderRadius: 3 }}>
                        <legend>Saida</legend>
                        <input type='date' style={{ width: '95%' }} />
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
                    <Mapa
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8KQqard36yI5Dr28EfNPv80cYvxu67Uw&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `688px`, width: `393px` }} />}
                        containerElement={<div style={{ height: `688px`, width: `393px` }} />}
                        mapElement={<div style={{ height: `688px`, width: `393px` }} />}
                    />
                </RightDiv>

            </Container>

            
            <Footer />

        </div>
    );
}

export default Inicial;