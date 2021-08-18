import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle } from './styled'

import { Container, Titulo2, Subtitulo2, SectionCards, Card, IconCard, CardTitle, CardSubtitle, CardButton } from './styled'
import { BoxQuestion, LastLineQuestion, LastLineQuestionTitle, LasLineGroup, LasLineGroupInput, LasLineTalkUs } from './styled'

import Modal from 'styled-react-modal'

import VectorHospedagem from '../../../assets/icons/Vector.png';
import VectorCreche from '../../../assets/icons/Vector-1.png';
import VectorBaba from '../../../assets/icons/Vector-2.png';
import VectorPasseio from '../../../assets/icons/Vector-3.png';
import VectorIndexDog from '../../../assets/img/retangleIndexDog.png';

function Inicial({ navigation }) {



    return (
        <div>

            <Menu nav={navigation} />

            <Retangle>
                <BoxRetangle></BoxRetangle>
            </Retangle>

            <section>
                <Titulo2>Como funciona ? </Titulo2>
                <Subtitulo2>Para quem quer oferecer um bem estar melhor para seu bichinho, a Goodog é o lugar certo</Subtitulo2>
            </section>

            <Container>
                <SectionCards>
                    <Card>
                        <IconCard src={VectorHospedagem} />
                        <CardTitle>Hospedagem</CardTitle>
                        <CardSubtitle>Lugar de conforto para seu pet pernoitar</CardSubtitle>
                        <CardButton style={{ color: '#1B98A7', borderColor: '#1B98A7' }}>encontrar</CardButton>
                    </Card>
                    <Card>
                        <IconCard src={VectorCreche} />
                        <CardTitle>Creche</CardTitle>
                        <CardSubtitle>Diversão o dia todo</CardSubtitle>
                        <CardButton style={{ color: '#FCC23E', borderColor: '#FCC23E' }}>encontrar</CardButton>
                    </Card>
                    <Card>
                        <IconCard src={VectorBaba} />
                        <CardTitle>Babá</CardTitle>
                        <CardSubtitle>Visitas em sua casa</CardSubtitle>
                        <CardButton style={{ color: '#EE4770', borderColor: '#EE4770' }}>encontrar</CardButton>
                    </Card>
                    <Card style={{ marginRight: 0 }}>
                        <IconCard src={VectorPasseio} />
                        <CardTitle>Passeio</CardTitle>
                        <CardSubtitle>Para descontrair</CardSubtitle>
                        <CardButton style={{ color: '#193B80', borderColor: '#193B80' }}>encontrar</CardButton>
                    </Card>

                </SectionCards>
            </Container>

            <section style={{ width: '1366px', height: '480px', background: '#EEFBFC', marginTop: '80px' }}>
                <Container>
                    <img src={VectorIndexDog} style={{ width: '475px', height: '320px', marginTop: '80px', float: 'left', marginRight: '94px' }} />
                    <div style={{ float: 'left', width: '350px' }}>
                        <h2 style={{ display: 'block', marginTop: '156px', fontSize: 34, }}>Faça parte</h2>
                        <div style={{ display: 'block' }}>
                            <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.6)', width: '316px', height: '48px' }}> Ofereça seus serviços e ganhe dando amor aos pets que precisam de você!</span>
                        </div>
                        <span style={{ cursor: 'pointer', display: 'block', width: '180px', color: '#fff', background: '#1B98A7', borderRadius: '4px', textAlign: 'center', fontSize: '14px', padding: '10px 15px', clear: 'both', marginTop: '24px' }}>Cadastrar Agora</span>
                    </div>
                </Container>
            </section>

            <section>
                <Titulo2 style={{ marginTop: '80px' }}>Dúvidas Frequentes</Titulo2>
                <Container>
                    <BoxQuestion style={{ marginTop: '40px' }}>
                        Como é feito o pagamento do serviço?
                        <span></span>
                    </BoxQuestion>
                    <BoxQuestion>
                        Os serviços são seguros ?
                        <span></span>
                    </BoxQuestion>
                    <BoxQuestion>
                        Que tipo de animais são ermitidos?
                        <span></span>
                    </BoxQuestion>
                    <BoxQuestion>
                        Esqueci minha senha
                        <span></span>
                    </BoxQuestion>
                    <BoxQuestion>
                        Como pedir reembolso?
                        <span></span>
                    </BoxQuestion>
                    <LastLineQuestion>
                        <LastLineQuestionTitle>Ainda esta com dúvida</LastLineQuestionTitle>
                        <LasLineGroup>
                            <LasLineGroupInput placeholder="Deixe seu melhot e-mail" />
                            <LasLineTalkUs>Fale Conosco</LasLineTalkUs>
                        </LasLineGroup>
                    </LastLineQuestion>
                </Container>
            </section>

            <Footer />

        </div>
    );
}

export default Inicial;