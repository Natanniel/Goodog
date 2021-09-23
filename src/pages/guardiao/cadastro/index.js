import React, { useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Container } from '../../../components/globals';
import { Titulo, Step, Titulo2, Row, Divider, AddContact, } from './styled';
import Dados from './dados';
import Servico from './servico';
import Perfil from './perfil';


function CadastroGuardiao() {

    const [etapa, setEtapa] = useState(1);

    const [dados, setDados] = useState({});


    let dadosAprovado = (dados) => {
        setEtapa(2)
    }

    let servicoAprovado = (dados) => {
        setEtapa(3)
    }

    let voltarDados = () => {

    }

    let voltarServico = () => {
        setEtapa(1);
    }

    return (

        <div>
            <Menu />
            <Container style={{ width: 531 }}>
                <Titulo>Cadastro de Guardião </Titulo>
                <Step>
                    <span style={{ width: (25 * etapa) + '%' }}></span>
                </Step>


                <section>
                    {etapa == 1 ?
                        <Dados aprovado={dadosAprovado} voltar={voltarDados} />
                        : etapa == 2 ?
                            <Servico aprovado={servicoAprovado} voltar={voltarServico} />
                            : etapa == 3 ?
                                <Perfil /> : null
                    }
                </section>

            </Container>
            <Footer />
        </div>
    );
}

export default CadastroGuardiao;