import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Autenticacao from '../pages/autenticacao/login/index'
import RecuperaSenha from '../pages/autenticacao/recoverPassword/index'

import Menu from '../components/menu'

const routes = () => {
    return (
        <div>
            <Menu />

       

        </div>
    );
}

export default routes;