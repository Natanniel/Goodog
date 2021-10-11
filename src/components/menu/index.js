import React, { useState } from 'react';

import { Link, useHistory } from "react-router-dom";
import { Sidebar, Logo, Menu } from './style';
import { DonutSmall, PlaylistAddCheck, EmojiObjects, Security, Group, LibraryBooks } from '@material-ui/icons'
function MenuLateral() {

    let [selecionado, setSelecionado] = useState('1');


    return (
        <div>
            <Sidebar>
                <Logo />
                <Menu>
                    <li className={selecionado == '1' ? 'selected' : ''} onClick={() => setSelecionado('1')}><DonutSmall style={{ float: 'left', marginTop: 16, marginLeft: 32, marginRight: 24 }} /><Link to='/admin/dashboard'>Dashboard</Link></li>
                    <li className={selecionado == '2' ? 'selected' : ''} onClick={() => setSelecionado('2')}><PlaylistAddCheck style={{ float: 'left', marginTop: 16, marginLeft: 32, marginRight: 24 }} /><Link to='/admin/aprovacao'>Aprovação</Link></li>
                    <li className={selecionado == '3' ? 'selected' : ''} onClick={() => setSelecionado('3')}><EmojiObjects style={{ float: 'left', marginTop: 16, marginLeft: 32, marginRight: 24 }} />Reclamações</li>
                    <li className={selecionado == '4' ? 'selected' : ''} onClick={() => setSelecionado('4')}><Group style={{ float: 'left', marginTop: 16, marginLeft: 32, marginRight: 24 }} />Clientes</li>
                    <li className={selecionado == '5' ? 'selected' : ''} onClick={() => setSelecionado('5')}><Security style={{ float: 'left', marginTop: 16, marginLeft: 32, marginRight: 24 }} />Guardiões</li>
                    <li className={selecionado == '6' ? 'selected' : ''} onClick={() => setSelecionado('6')}><LibraryBooks style={{ float: 'left', marginTop: 16, marginLeft: 32, marginRight: 24 }} />Usuários</li>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default MenuLateral;