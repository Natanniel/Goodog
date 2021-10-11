import React, { useState } from 'react';

import { Titulo, Retangle, Linha, Input, Button, ButtonWhite } from '../../../components/globals';
import { FotoPerfil } from './styled';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";

import Retangulo from './retangulo'

function Pets() {

    let [pets, setPets] = useState([])

    return (
        <div style={{ width: '513px', margin: '0 auto' }}>
            <Titulo>
                Favoritos
            </Titulo>
            <div style={{marginTop:24}}>
                <Retangulo />
                <Retangulo />
                <Retangulo />
            </div>
        </ div>
    );
}

export default Pets;