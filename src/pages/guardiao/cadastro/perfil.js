import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { ServiceBox, ValueBox, Titulo, Experiencia, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
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
                Seu perfil Guardião
                <span>Descreva como você quer ser visto na Goodog.</span>
            </Titulo2>

            <Divider />

            <Row>
                <fieldset>
                    <legend>Titulo do seu pefil</legend>
                    <input placeholder="Titulo do seu perfil" />
                </fieldset>
            </Row>
            <Row>
                <fieldset style={{ height: 180, }}>
                    <legend>Por que você é o Guardião ideal para seu cliente?</legend>
                    <textarea rows='8' cols='80' style={{ border: 'none', fontFamily: 'Poppins' }} resize='none' />
                </fieldset>
            </Row>
            <Divider />
            <Row>
                <Titulo2>
                    Sua experiência
                    <span>Há quantos anos você trabalha com pets?</span>
                </Titulo2>
                <Row>
                    <Experiencia>
                        <div>-</div>
                        <div><input value='0'/></div>
                        <div>+</div>
                    </Experiencia>
                </Row>
            </Row>

            <Divider />
            <Row>
                <Titulo2>
                    Suas habilidades
                    <span>Há quantos anos você trabalha com pets?</span>
                </Titulo2>
            </Row>


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