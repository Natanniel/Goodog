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
                <Link to={'/cliente/pedidos'} style={{ display: 'block', position: 'relative', top: 1660, left: 700, height: 40, width: 740, cursor: 'pointer' }}></Link>
                <Link to={'/cliente/hero/service'} style={{ display: 'block', position: 'relative', top: 1670, left: 700, height: 40, width: 740, cursor: 'pointer' }}></Link>
            </Content>
            <Footer></Footer>
        </div>
    );
}

export default Inicial;