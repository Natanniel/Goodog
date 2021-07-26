import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Autenticacao from '../pages/autenticacao/login/index'
import RecuperaSenha from '../pages/autenticacao/recoverPassword/index'

const routes = () => {
    return (
        <div>
            <Route path="/" exact component={Autenticacao} />
            <Route path="/recuperarsenha" exact component={RecuperaSenha} />

        </div>
    );
}

export default routes;