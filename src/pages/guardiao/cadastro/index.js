import React from 'react';

// import { Container } from './styles';
import Menu from '../../../components/menu/inicial'
import { Container } from '../../../components/globals'
import { Titulo, Step, Titulo2, Row, Divider } from './styled'

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
                <section>
                    <Row>
                        <fieldset>
                            <legend>Nome</legend>
                            <input />
                        </fieldset>
                        <fieldset>
                            <legend>Sobrenome</legend>
                            <input />
                        </fieldset>
                    </Row>
                    <Row>
                        <fieldset>
                            <legend>E-mail</legend>
                            <input />
                        </fieldset>
                    </Row>
                    <Row>
                        <fieldset>
                            <legend>Data de Nascimento</legend>
                            <input type="date" />
                        </fieldset>
                        <fieldset>
                            <legend>Gênero</legend>
                            <select>
                                <option value="selecione">Selecione ...</option>
                                <option value="selecione">Feminino</option>
                                <option value="selecione">Masculino</option>
                            </select>
                        </fieldset>
                    </Row>
                </section>
                <Divider />
                <section>
                    <Titulo2>
                        Endereço
                        <span>Indique sua localização para que seus clientes saibam onde seus Pets vão ficar.</span>
                    </Titulo2>
                    <Row>
                        <fieldset>
                            <legend>Seu endereço</legend>
                            <input />
                        </fieldset>                       
                    </Row>
                    <Row>
                        <fieldset>
                            <legend>E-mail</legend>
                            <input />
                        </fieldset>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default cadastroGuardiao;