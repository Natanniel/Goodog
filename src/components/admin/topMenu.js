import React from 'react';

// import { Container } from './styles';
import { Titulo, UserMenu } from './globals';
import { Notifications, Search } from '@material-ui/icons';

function admin() {
    return (
        <div>
            <Titulo>Dashboard</Titulo>
            <UserMenu style={{ float: 'right' }}>
                <div>
                    <div>
                        <img height={45} width={45} src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></img>
                    </div>
                    <span>Administrador</span>
                    <Notifications style={{ cursor: 'pointer', display: 'block', float: 'right', height: 30, width: 30, color: '#C5C7CD', marginTop: 15, marginRight: 30 }}></Notifications>
                    <Search style={{ cursor: 'pointer', display: 'block', float: 'right', height: 30, width: 30, color: '#C5C7CD', marginTop: 15, marginRight: 30 }}></Search>
                </div>
            </UserMenu>
        </div>
    );
}

export default admin;