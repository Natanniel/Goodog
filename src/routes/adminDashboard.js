
import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Autenticacao from '../pages/autenticacao/login/index'
import RecuperaSenha from '../pages/autenticacao/recoverPassword/index'

import Menu from '../components/menu/index'

import Dashboard from '../pages/admin/dashboard';
import Aprovacao from '../pages/admin/aprovacao';

const routes = () => {
    return (
        <div >
            <div style={{ width: 255, float: 'left', background: '#363740', height: '100%' }}>
                <Menu />
            </div>
            <div style={{ width: window.screen.width - 255, padding: 30, height: '100vh', float: 'right', background: '#F7F8FC' }}>
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/aprovacao" component={Aprovacao} />
            </div>
        </div>
    );
}

export default routes;