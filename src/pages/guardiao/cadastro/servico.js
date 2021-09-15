import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { ServiceBox, Titulo, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";

// import { Container } from './styles';

function Servico({ aprovado }) {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [contatos, setContatos] = useState([]);

    let submit = () => {
        aprovado();
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

            </section>
         

            <Divider />
            <section>
                <Row style={{ flexDirection: 'row-reverse' }}>
                    <BtnSalvar onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                    <BtnVoltar>Voltar</BtnVoltar>
                </Row>
            </section>
        </div>
    );
}

export default Servico;