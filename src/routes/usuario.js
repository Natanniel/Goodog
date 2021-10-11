import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Menu from '../components/menu/inicial';
import Footer from '../components/footer/inicio';
import { Container } from '../components/globals'

import Perfil from '../pages/usuario/perfil/index';
import Pets from '../pages/usuario/pet/index';
import Pedidos from '../pages/usuario/pedidos/index';
import Favoritos from '../pages/usuario/favoritos/index';

const routes = () => {
    return (
        <div>
            <Menu />
            <Container>
                <Route path="/usuario/perfil" exact component={Perfil} />
                <Route path="/usuario/pets" exact component={Pets} />
                <Route path="/usuario/pedidos" exact component={Pedidos} />
                <Route path="/usuario/favoritos" exact component={Favoritos} />

            </Container>
            <Footer />

        </div>
    );
}

export default routes;