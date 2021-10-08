import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Inicio from '../pages/inicial/inicial/index';
import Autenticacao from '../pages/autenticacao/login/index'
import RecuperaSenha from '../pages/autenticacao/recoverPassword/index'

import ClientePlatform from '../pages/inicial/platform'
import ClienteHero from '../pages/inicial/heroDetail'
import ClienteHeroService from '../pages/inicial/heroDetailService'
import ClienteHeroServiceSubmit from '../pages/inicial/heroDetailSubmit'
import ClienteHeroConversar from '../pages/inicial/conversar'
import ClientePedido from '../pages/inicial/pedidos'


import GuardiaoCadastro from '../pages/guardiao/cadastro'

import Usuario from './usuario';

const routes = () => {
    return (
        <div>
            <Route path="/" exact component={Inicio} />
            <Route path="/recuperarsenha" exact component={RecuperaSenha} />

            <Route path="/cliente" exact component={ClientePlatform} />
            <Route path="/cliente/pedidos" exact component={ClientePedido} />
            <Route path="/cliente/hero" exact component={ClienteHero} />
            <Route path="/cliente/hero/service" exact component={ClienteHeroService} />
            <Route path="/cliente/hero/submit" exact component={ClienteHeroServiceSubmit} />
            <Route path="/cliente/hero/conversar" exact component={ClienteHeroConversar} />

            <Route path="/usuario" component={Usuario} />


            <Route path="/guardiao/cadastro" exact component={GuardiaoCadastro} />


        </div>
    );
}

export default routes;