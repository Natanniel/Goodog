import React, { useState } from 'react';

import { Titulo, Retangle, Box, Linha, Tabs, Input, Button, ButtonWhite } from '../../../components/globals';
import { Ticket } from '../../../components/icons';

import { FotoPerfil } from './styled';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";
import { RecentActors, Security } from '@material-ui/icons';

import Aberto from './aberto';

function Pedidos() {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    let [telefone, setTelefone] = useState('');

    let [selected, setSelected] = useState('Aberto');

    return (
        <div style={{ width: '638px', margin: '0 auto' }}>
            <Titulo>
                Pedidos
            </Titulo>

            <Linha>


                <Button><RecentActors /> Cliente</Button>
                <Button><Security /> Guardião</Button>


            </Linha>

            <Linha style={{ marginTop: 26 }}>
                <Box style={{height:'auto'}}>
                    <Tabs>
                        <div className={selected == "Aberto" ? 'selected' : null} onClick={() => setSelected("Aberto")}>
                            <span>ABERTO</span>
                        </div>
                        <div className={selected == "Confirmado" ? 'selected' : null} onClick={() => setSelected("Confirmado")}>
                            <span>CONFIRMADOS</span>
                        </div>
                        <div className={selected == "Concluido" ? 'selected' : null} onClick={() => setSelected("Concluido")}>
                            <span>CONCLUÍDOS</span>
                        </div>
                        <div className={selected == "Arquivadas" ? 'selected' : null} onClick={() => setSelected("Arquivadas")}>
                            <span>ARQUIVADAS</span>
                        </div>
                    </Tabs>

                    {selected == "Aberto" ? <Aberto /> : null}
                </Box>
            </Linha>

        </ div>
    );
}

export default Pedidos;