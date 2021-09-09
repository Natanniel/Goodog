import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Home from '../pages/app/home';
import Menu from '../pages/app/menu';
import Entrar from '../pages/app/entrar';
import Cadastrar from '../pages/app/cadastrar';

import LogadoHome from '../pages/app/logadohome';
import LogadoList from '../pages/app/logadoList';
import LogadoHero from '../pages/app/logadoHero';
import LogadoHeroDetail from '../pages/app/logadoHeroDetail';
import LogadoHeroDetailFinish from '../pages/app/logadoHeroDetailFinish';

const routes = () => {
    return (
        <div>
            <Route path="/app" exact component={Home} />
            <Route path="/app/menu" exact component={Menu} />
            <Route path="/app/entrar" exact component={Entrar} />
            <Route path="/app/cadastrar" exact component={Cadastrar} />
            <Route path="/app/logado" exact component={LogadoHome} />
            <Route path="/app/logado/list" exact component={LogadoList} />
            <Route path="/app/logado/hero" exact component={LogadoHero} />
            <Route path="/app/logado/hero/detail" exact component={LogadoHeroDetail} />
            <Route path="/app/logado/hero/detailfinish" exact component={LogadoHeroDetailFinish} />



        </div>
    );
}

export default routes;