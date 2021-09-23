import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { ServiceBox, ValueBox, Titulo, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";

// import { Container } from './styles';

function Servico({ aprovado, voltar }) {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [contatos, setContatos] = useState([]);

    let submit = () => {
        aprovado();
        window.scrollTo(0, 0)
    }

    let voltarAnterior = () => {
        voltar();
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Titulo2>
                Seus serviços
                <span>Controle o serviços que você oferecerá.</span>
            </Titulo2>
            <section>
                <Row style={{ display: 'block' }}>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Hotel</span>
                            <span className='descricao'>Abrigue pets em sua residência por uma noite ou mais.</span>
                        </div>
                        <input type='checkbox' />
                    </ServiceBox>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Creche</span>
                            <span className='descricao'>Divirta um pet durante o dia em sua residência.</span>
                        </div>
                        <input type='checkbox' />
                    </ServiceBox>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Babá</span>
                            <span className='descricao'>Dê todo seu amor e carinho para o pet na casa do cliente.</span>
                        </div>
                        <input type='checkbox' />
                    </ServiceBox>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Passeio</span>
                            <span className='descricao'>Leve um Pet para explorar o mundo.</span>
                        </div>
                        <input type='checkbox' />
                    </ServiceBox>

                </Row>

            </section>
            <Divider />
            <section>
                <Titulo2>
                    Seus valores
                    <span>Defina quanto deseja receber pelos seus serviços.</span>
                </Titulo2>
                <Row>
                    <ValueBox>
                        <div className='infos'>
                            <span className='title'>Passeio</span>
                            <span className='descricao'>Leve um Pet para explorar o mundo.</span>
                        </div>
                        <div className='values'>
                            <label>R$</label>
                            <input type="number" />
                            <span>Você recebe: R$0,00</span>
                        </div>
                        <span class='adicionais'>Adicionais</span>
                    </ValueBox>
                </Row>
            </section>
            <section>
                <Row>
                    <fieldset>
                        <legend>Titulo do seu perfil</legend>
                        <input placeholder="Seu nome" />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>E-mail</legend>
                        <input placeholder="Seu melhor e-mail" />
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
                <Row style={{ flexDirection: 'row-reverse' }}>
                    <BtnSalvar onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                    <BtnVoltar onClick={() => voltarAnterior()}>Voltar</BtnVoltar>
                </Row>
            </section>
        </div>
    );
}

export default Servico;