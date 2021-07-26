import React from 'react';

import { Sidebar, Logo, Menu } from './style';

function menu() {
    return (
        <div>
            <Sidebar>
                <Logo />
                <Menu>
                    <li selected={true}>Dashboard</li>
                    <li>Aprovação</li>
                    <li>Reclamações</li>
                    <li>Clientes</li>
                    <li>Guardiões</li>
                    <li>Usuários</li>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default menu;