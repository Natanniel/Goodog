import React, { useState } from 'react';

import { Titulo, Linha, Input, Button, ButtonWhite } from '../../../components/globals';
import { FotoPerfil } from './styled';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";

function Perfil() {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    let [telefone, setTelefone] = useState('');


    return (
        <div style={{ width: '513px', margin: '0 auto' }}>
            <Titulo>
                Perfil
            </Titulo>

            <FotoPerfil>
                <img></img>
                <span>+</span>
            </FotoPerfil>

            <Linha style={{ marginTop: 26 }}>
                <Input>
                    <legend>Nome</legend>
                    <input type="text" placeholder='Nome' />
                </Input>
                <Input>
                    <legend>Sobrenome</legend>
                    <input type="text" placeholder='Sobrenome' />
                </Input>
            </Linha>
            <Linha >
                <Input>
                    <legend>Documento</legend>
                    <CpfCnpj
                        value={cpfCnpj}
                        onChange={(ev, type) => {
                            setCpfCnpj(ev.target.value);
                            setMask(type === "CPF");
                        }}
                        placeholder='Documento'
                    />
                </Input>
                <Input>
                    <legend>Telefone</legend>
                    <InputMask mask="(99) 99999-9999" placeholder="Celular" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </Input>
            </Linha>
            <Linha >
                <Input>
                    <legend>Email</legend>
                    <input type="text" placeholder='Email' />
                </Input>
            </Linha>
            <Linha >
                <Input>
                    <legend>Senha</legend>
                    <input type="password" placeholder='Senha' />
                </Input>
                <Input>
                    <legend>Confirmar Senha</legend>
                    <input type="password" placeholder='Confirmar Senha' />
                </Input>
            </Linha>
            <Linha style={{ flexDirection: 'row-reverse', WebkitFlexDirection: 'row-reverse', }}>
                <Button>Salvar alterações</Button>
                <ButtonWhite style={{ marginRight: 10, float: 'right' }}>Voltar</ButtonWhite>

            </Linha>

        </ div>
    );
}

export default Perfil;