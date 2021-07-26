import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar
import Autenticacao from '../pages/autenticacao/login/index'

const routes = () => {
    return (
        <div>
            {/* GESTAO DE COMPRAS ================ */}
            <Route path="/" exact component={Autenticacao} />

        </div>
    );
}

export default routes;