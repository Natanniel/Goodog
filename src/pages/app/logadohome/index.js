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
                <Link to={'/app/logado/list'} style={{ display: 'block', position: 'absolute', top: 370, left: 50, height: 50, width: 270, cursor: 'pointer'}}></Link>
            </Content>
        </div>
    );
}

export default Inicial;