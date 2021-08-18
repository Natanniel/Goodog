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
                <Link to={'/app/cadastrar'} style={{ display: 'block', position: 'absolute', top: 100, left: 50, height: 50, width: 170, cursor: 'pointer' }}></Link>
                <Link to={'/app/entrar'} style={{ display: 'block', position: 'absolute', top: 100, left: 240, height: 50, width: 100, cursor: 'pointer' }}></Link>
                <Link to={'/app'} style={{ display: 'block', position: 'absolute', top: 760, left: 30, height: 50, width: 150, cursor: 'pointer' }}></Link>
            </Content>

        </div>
    );
}

export default Inicial;