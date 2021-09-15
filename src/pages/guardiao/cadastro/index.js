import React, { useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial'
import { Container } from '../../../components/globals'
import { Titulo, Step, Titulo2, Row, Divider, AddContact, } from './styled'
import Dados from './dados';
import Servico from './servico';


function CadastroGuardiao() {

    const [etapa, setEtapa] = useState(60);

    const [dados, setDados] = useState({});


    let dadosAprovado = (dados) => {
        setEtapa(60)
    }

    let voltarDados = () => {

    }

    return (

        <div>
            <Menu />
            <Container style={{ width: 531 }}>
                <Titulo>Cadastro de Guardião </Titulo>
                <Step>
                    <span style={{ width: etapa + '%' }}></span>
                </Step>


                <section>
                    {etapa == 30 ?
                        <Dados aprovado={dadosAprovado} voltarDados={voltarDados} />
                        : etapa == 60 ?
                            <Servico /> : null}
                </section>

            </Container>
        </div>
    );
}

export default CadastroGuardiao;