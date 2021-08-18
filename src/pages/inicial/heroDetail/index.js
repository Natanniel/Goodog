import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import { Retangle, BoxRetangle } from './styled'

import { Content, Container, Titulo2, Subtitulo2, SectionCards, Card, IconCard, CardTitle, CardSubtitle, CardButton } from './styled'
import { BoxQuestion, LastLineQuestion, LastLineQuestionTitle, LasLineGroup, LasLineGroupInput, LasLineTalkUs } from './styled'
import { Link, useHistory } from "react-router-dom";


import Footer from '../../../components/footer/inicio';

function Inicial() {



    return (
        <div>

            <Menu />
            <Content>
                <Link to={'/cliente/hero/conversar'} style={{ display: 'block', position: 'relative', top: 590, left: 930, height: 40, width: 385, cursor: 'pointer'}}></Link>

                <Link to={'/cliente/hero/service'} style={{ display: 'block', position: 'relative', top: 600, left: 930, height: 40, width: 385, cursor: 'pointer' }}></Link>
                <div style={{position:'absolute', marginTop:'10px', height:'270px', width:'600px',lineHeight:'270px',textAlign:'center',fontSize:22, background:'#fff', border:'1px solid',top:'1775px', left:'220px'}}>Mapa aqui</div>
  
            </Content>

            <Footer/>
        </div>
    );
}

export default Inicial;