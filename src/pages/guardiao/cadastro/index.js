import React from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial'
import { Container } from '../../../components/globals'
import { Titulo, Step, Titulo2, Row } from './styled'

function cadastroGuardiao() {
    return (
        <div>
            <Menu />
            <Container style={{ width: 531 }}>
                <Titulo>Cadastro de Guardião </Titulo>
                <Step>
                    <span style={{ width: '30%' }}></span>
                </Step>
                <Titulo2>
                    Seus dados
                    <span>Nos conte mais sobre você.</span>
                </Titulo2>

                <Row>
                    <fieldset>
                        <legend>Nome</legend>
                    </fieldset>
                    <fieldset>
                        <legend>Sobrenome</legend>
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>E-mail</legend>
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>Data de Nascimento</legend>
                    </fieldset>
                    <fieldset>
                        <legend>Gênero</legend>
                    </fieldset>
                </Row>
            </Container>
        </div>
    );
}

export default cadastroGuardiao;