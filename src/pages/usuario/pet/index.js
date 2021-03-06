import React, { useState } from 'react';

import { Titulo, Retangle, Linha, Input, Button, ButtonWhite } from '../../../components/globals';
import { FotoPerfil } from './styled';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";

function Pets() {

    let [pets, setPets] = useState([])

    return (
        <div style={{ width: '513px', margin: '0 auto' }}>
            <Titulo>
                Pets
            </Titulo>

            {pets.length > 0 ? null : (

                <Linha>
                    <span style={{ display: 'block', width: '100%', marginTop: 16, textAlign: 'center', fontFamily: 'PoppinsLight', fontSize: 12 }}>Nenhum pet cadastrado até o momento</span>
                </Linha>
            )}

            <Button style={{width:'100%', marginTop:24}}>+ Adicionar novo pet</Button>


        </ div>
    );
}

export default Pets;