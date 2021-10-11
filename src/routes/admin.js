import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Autenticacao from '../pages/autenticacao/login/index'
import RecuperaSenha from '../pages/autenticacao/recoverPassword/index';
import Dashboard from './adminDashboard'


const routes = () => {
    return (
        <div>
            <Route path="/admin" exact component={Autenticacao} />
            <Route path="/admin/dashboard" exact component={Dashboard} />
        </div>
    );
}

export default routes;