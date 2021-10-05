import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle, Cabecalho, Filters, ItensInput } from './styled'

import { Link, useHistory } from "react-router-dom";
import { BtnPesquisar, Itens, BtnPesquisarnormal, SectionFacaParte, FacaParte, Container, Titulo2, Subtitulo2, SectionCards, Card, IconCard, CardTitle, CardSubtitle, CardButton, Titulo, SubTitulo } from './styled'
import { BoxQuestion, LastLineQuestion, LastLineQuestionTitle, LasLineGroup, LasLineGroupInput, LasLineTalkUs } from './styled'

import Modal from 'styled-react-modal'

import VectorHospedagem from '../../../assets/icons/Vector.png';
import VectorCreche from '../../../assets/icons/Vector-1.png';
import VectorBaba from '../../../assets/icons/Vector-2.png';
import VectorPasseio from '../../../assets/icons/Vector-3.png';
import VectorIndexDog from '../../../assets/img/retangleIndexDog.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

function Inicial({ navigation }) {

    let [selected, setSelected] = useState("hospedagem")


    return (
        <div>
            <Menu nav={navigation} />

            <Retangle>
                <Titulo>Seu pet sempre em boas mãos</Titulo>
                <SubTitulo>A melhor companhia para seu pet.</SubTitulo>

                <BoxRetangle>
                    <Itens>
                        <span>HOSPEDAGEM</span>
                        <label>Lugar de conforto para o seu pet pernoitar</label>
                    </Itens>
                    <Itens>
                        <span>CRECHE</span>
                        <label>Diversão o dia todo</label>
                    </Itens>
                    <Itens>
                        <span>BABÁ</span>
                        <label>Visitas em sua casa</label>
                    </Itens>
                    <Itens>
                        <span>PASSEIO</span>
                        <label>Para descontrair</label>
                    </Itens>

                    <ItensInput>
                        <legend>Seu endereço</legend>

                    </ItensInput>
                    <ItensInput>
                        <legend>Quando?</legend>
                    </ItensInput>
                    <ItensInput>
                        <legend>Tamanho do animal</legend>
                    </ItensInput>


                    <Cabecalho>
                        <div className={selected == "hospedagem" ? 'selected' : null} onClick={() => setSelected("hospedagem")}>
                            <span>HOSPEDAGEM</span>
                            <label>Lugar de conforto para seu pet pernoitar</label>
                        </div>
                        <div className={selected == "creche" ? 'selected' : null} onClick={() => setSelected("creche")}>
                            <span>CRECHE</span>
                            <label>Diversão o dia todo</label>
                        </div>
                        <div className={selected == "baba" ? 'selected' : null} onClick={() => setSelected("baba")}>
                            <span>BABÁ</span>
                            <label>Visitas em sua casa</label>
                        </div>
                        <div className={selected == "passeio" ? 'selected' : null} onClick={() => setSelected("passeio")}>
                            <span>PASSEIO</span>
                            <label>Para descontrair</label>
                        </div>
                    </Cabecalho>
                    <Filters>
                        <fieldset style={{ width: 350, height: 55, borderRadius: 3 }}>
                            <legend>Seu Endereço</legend>
                            <input type="search" placeholder="Seu endereço"></input>
                        </fieldset>
                        <fieldset style={{ width: 160, height: 55, borderRadius: 3 }}>
                            <legend>Quando?</legend>
                            <input type="date" placeholder="Quando ?"></input>
                        </fieldset>
                        <fieldset style={{ width: 200, height: 55, borderRadius: 3 }}>
                            <legend>Tamanho do animal</legend>
                            <select>
                                <option>Teste parametro</option>
                            </select>
                        </fieldset>
                        <BtnPesquisarnormal>
                            <Link to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                                Encontrar
                            </Link>
                        </BtnPesquisarnormal>
                    </Filters>
                    <BtnPesquisar>
                        <Link id="pesquisar" to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                            Pesquisar
                        </Link>
                    </BtnPesquisar>
                </BoxRetangle>
            </Retangle>

            <section id='como_funciona'>
                <Titulo2>Como funciona? </Titulo2>
                <Subtitulo2>Para quem quer oferecer um bem estar melhor para seu bichinho, a Goodog é o lugar certo</Subtitulo2>
            </section>

            <Container>
                <SectionCards>
                    <Card>
                        <IconCard src={VectorHospedagem} />
                        <CardTitle>Hospedagem</CardTitle>
                        <CardSubtitle style={{ width: '165px' }}>Lugar de conforto para seu pet pernoitar</CardSubtitle>
                        <CardButton style={{ color: '#1B98A7', borderColor: '#1B98A7' }} onClick={() => document.getElementById("pesquisar").click()}>encontrar</CardButton>
                    </Card>
                    <Card>
                        <IconCard src={VectorCreche} />
                        <CardTitle>Creche</CardTitle>
                        <CardSubtitle style={{ width: '97px' }}>Diversão o dia todo</CardSubtitle>
                        <CardButton style={{ color: '#FCC23E', borderColor: '#FCC23E' }} onClick={() => document.getElementById("pesquisar").click()}>encontrar</CardButton>
                    </Card>
                    <Card>
                        <IconCard src={VectorBaba} />
                        <CardTitle>Babá</CardTitle>
                        <CardSubtitle>Visitas em sua casa</CardSubtitle>
                        <CardButton style={{ color: '#EE4770', borderColor: '#EE4770' }} onClick={() => document.getElementById("pesquisar").click()}>encontrar</CardButton>
                    </Card>
                    <Card>
                        <IconCard src={VectorPasseio} />
                        <CardTitle>Passeio</CardTitle>
                        <CardSubtitle>Para descontrair</CardSubtitle>
                        <CardButton style={{ color: '#193B80', borderColor: '#193B80' }} onClick={() => document.getElementById("pesquisar").click()}>encontrar</CardButton>
                    </Card>

                </SectionCards>
            </Container>

            <SectionFacaParte id="fazer_parte">
                <Container>
                    <img src={VectorIndexDog} />
                    <FacaParte style={{}}>
                        <h2>Faça parte</h2>
                        <div >
                            <span> Ofereça seus serviços e ganhe dando amor aos pets que precisam de você!</span>
                        </div>
                        <Link to="guardiao/cadastro" style={{ textDecoration: 'none' }}>
                            <span id={'btnCadastrar'} >Cadastrar Agora</span>
                        </Link>
                    </FacaParte>
                </Container>
            </SectionFacaParte>

            <section id="duvidas">
                <Titulo2 style={{ marginTop: '80px' }}>Dúvidas Frequentes</Titulo2>




                <Container>
                    <BoxQuestion style={{ marginTop: '40px' }}>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Como é feito o pagamento?
                                        <span></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Os serviços são seguros ?
                                        <span></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Os serviços são seguros ?
                                        <span></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Esqueci minha senha
                                        <span></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Como pedir reembolso?
                                        <span></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>




                    </BoxQuestion>
                    <LastLineQuestion>
                        <LastLineQuestionTitle>Ainda esta com dúvida?</LastLineQuestionTitle>
                        <LasLineGroup>
                            <LasLineGroupInput placeholder="Deixe seu e-mail" />
                            <LasLineTalkUs>Fale conosco</LasLineTalkUs>
                        </LasLineGroup>
                    </LastLineQuestion>
                </Container>
            </section>

            <Footer />

        </div>
    );
}

export default Inicial;