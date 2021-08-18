import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Retangle, BoxRetangle } from './styled'

import { Content, Container, Titulo2, Subtitulo2, SectionCards, Card, IconCard, CardTitle, CardSubtitle, CardButton } from './styled'
import { BoxQuestion, LastLineQuestion, LastLineQuestionTitle, LasLineGroup, LasLineGroupInput, LasLineTalkUs } from './styled'
import { Link, useHistory } from "react-router-dom";


function Inicial() {



    return (
        <div>
            <Menu />
            <Content>
                <Link to={'/cliente/hero/submit'} style={{ display: 'block', position: 'relative', top: 1200, left: 780, height: 50, width: 170, cursor: 'pointer' }}></Link>
                <Link to={'/cliente/hero'} style={{ display: 'block', position: 'absolute', top: 1290, left: 830, height: 50, width: 170, cursor: 'pointer' }}></Link>
            </Content>
            <Footer></Footer>
        </div>
    );
}

export default Inicial;