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
            <Content>
                <Link to={'/app/logado'} style={{ display: 'block', position: 'absolute', top: 20, left: 10, height: 50, width: 100, cursor: 'pointer'}}></Link>
            </Content>
        </div>
    );
}

export default Inicial;