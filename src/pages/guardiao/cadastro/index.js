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
import Finish from './finish'
import api from '../../../service/api';

function CadastroGuardiao() {

    const [etapa, setEtapa] = useState(1);

    const [dados, setDados] = useState({});
    const [servicos, setServicos] = useState({});
    const [perfil, setPerfil] = useState({});
    const [fotosPerfil, setFotosPerfil] = useState([])
    const [fotosAlbum, setFotosAlbum] = useState([]);
    const [cadastro, setCadastro] = useState(false);

    let dadosAprovado = (dados) => {
        setDados(dados);
        setEtapa(2);
        window.scrollTo(0, 0);
    }

    let servicoAprovado = (dados) => {
        setServicos(dados);
        setEtapa(3);
        window.scrollTo(0, 0);
    }

    let perfilAprovado = (dados, images) => {
        setEtapa(4);
        setPerfil(dados);
        setFotosPerfil(images);
        cadastrar();
        window.scrollTo(0, 0);
    }

    let albumAprovado = (imagens) => {
        setEtapa(5);
        setFotosAlbum(imagens);
        window.scrollTo(0, 0);
        cadastrar();
    }

    let voltarDados = () => {

    }

    let voltarServico = () => {
        setEtapa(1);
    }

    let voltarPerfil = () => {
        setEtapa(2);
    }

    let voltarAlbum = () => {
        setEtapa(3);
    }



    let cadastrar = () => {
        api.post('guardiao/cadastro', { dados, servicos, perfil }).then(function (e) {

            let data = new FormData();
           
            for (let i = 0; i < fotosPerfil.length; i++) {
                data.append('file', fotosPerfil[i].file, fotosPerfil[i].file.name);
                api.post('guardiao/fotoperfil', data, {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        'x-access-token': e.data.token
                    }
                }
                ).then((response) => {
                    //handle success
                }).catch((error) => {
                    //handle error
                });
            }

            for (let i = 0; i < fotosAlbum.length; i++) {
                data.append('file', fotosAlbum[i].file, fotosAlbum[i].file.name);
                api.post('guardiao/album', data, {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        'x-access-token': e.data.token
                    }
                }
                ).then((response) => {
                    //handle success
                }).catch((error) => {
                    //handle error
                });
            }

            setCadastro(true)


        }).catch(function () {
            // toastr.error('Usuario ou senha inválidos');
        })
    }



    return (

        <div>
            <Menu />
            <Container style={{ width: 531 }}>
                {etapa < 5 ? (
                    <>
                        <Titulo>Cadastro de Guardião </Titulo>

                        <Step>
                            <span style={{ width: (25 * (etapa > 4 ? 4 : etapa)) + '%' }}></span>
                        </Step>
                    </>
                ) : <Finish status={cadastro} />}

                <Dados visible={etapa == 1 ? true : false} aprovado={dadosAprovado} voltar={voltarDados} />

                <Servico visible={etapa == 2 ? true : false} aprovado={servicoAprovado} voltar={voltarServico} />

                <Perfil visible={etapa == 3 ? true : false} aprovado={perfilAprovado} voltar={voltarPerfil} />

                <Album visible={etapa == 4 ? true : true} aprovado={albumAprovado} voltar={voltarAlbum} />


            </Container>
            <Footer />
        </div>
    );
}

export default CadastroGuardiao;