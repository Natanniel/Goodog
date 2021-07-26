import React from 'react';

import { Sidebar, Logo, Menu } from './style';

function menu() {
    return (
        <div>
            <Sidebar>
                <Logo />
                <Menu>
                    <li>teste</li>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default menu;