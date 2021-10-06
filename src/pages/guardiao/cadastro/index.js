import React, { useState } from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial';
import Footer from '../../../components/footer/inicio';
import { Container } from '../../../components/globals';
import { Titulo, Step, Titulo2, Row, Divider, AddContact, } from './styled';
import Dados from './dados';
import Servico from './servico';
import Perfil from './perfil';
import Album from './album';

function CadastroGuardiao() {

    const [etapa, setEtapa] = useState(3);

    const [dados, setDados] = useState({});
    const [servicos, setServicos] = useState({});

    let dadosAprovado = (dados) => {
        setDados(dados);
        setEtapa(2)
    }

    let servicoAprovado = (dados) => {
        setServicos(dados);
        setEtapa(3)
    }

    let perfilAprovado = (dados) => {
        setEtapa(4);
    }

    let voltarDados = () => {

    }

    let voltarServico = () => {
        setEtapa(1);
    }

    let voltarPerfil = () => {
        setEtapa(2);
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
                                <Perfil aprovado={perfilAprovado} voltar={voltarPerfil} />
                                : etapa == 4 ?
                                    <Album />
                                    : null
                    }
                </section>

            </Container>
            <Footer />
        </div>
    );
}

export default CadastroGuardiao;