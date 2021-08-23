import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial2';
import { Retangle, BoxRetangle } from './styled'

import { Content, ContentMB, Container, Titulo2, Subtitulo2, SectionCards, Card, IconCard, CardTitle, CardSubtitle, CardButton } from './styled'
import { BoxQuestion, LastLineQuestion, LastLineQuestionTitle, LasLineGroup, LasLineGroupInput, LasLineTalkUs } from './styled'
import { Link, useHistory } from "react-router-dom";


import Footer from '../../../components/footer/inicio';

function Inicial() {



    return (
        <div>

            <Menu />
            <Content>
                <div style={{ width: 1000, margin: '0 auto', height: 100, position: 'relative', top: 525 }}>
                    <Link to={'/cliente/hero/conversar'} style={{ float: 'right', display: 'block', position: 'relative', height: 30, width: 330, cursor: 'pointer' }}></Link>

                    <Link to={'/cliente/hero/service'} style={{ float: 'right', display: 'block', position: 'absolute', left: '670px', top: '40px', height: 30, width: 330, cursor: 'pointer' }}></Link>
                </div>
            </Content>

            <ContentMB>
            <Link to={'/cliente'} style={{ float: 'right', display: 'block', position: 'absolute', left: '10px', top: '10px', height: 30, width: 330, cursor: 'pointer'}}></Link>
            <Link to={'/cliente'} style={{ float: 'right', display: 'block', position: 'absolute', left: '20px', top: '1030px', height: 30, width: 330, cursor: 'pointer' }}></Link>

                <Link to={'/cliente/hero/service'} style={{ float: 'right', display: 'block', position: 'absolute', left: '20px', top: '985px', height: 30, width: 330, cursor: 'pointer' }}></Link>

            </ContentMB>

            <Footer />
        </div>
    );
}

export default Inicial;