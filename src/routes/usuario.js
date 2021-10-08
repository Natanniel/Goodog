import React from 'react';
import { Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Menu from '../components/menu/inicial';
import Footer from '../components/footer/inicio';
import { Container } from '../components/globals'

import Perfil from '../pages/usuario/perfil/index';
import Pets from '../pages/usuario/pet/index';

const routes = () => {
    return (
        <div>
            <Menu />
            <Container>
                <Route path="/usuario/perfil" exact component={Perfil} />
                <Route path="/usuario/pets" exact component={Pets} />
            </Container>
            <Footer />

        </div>
    );
}

export default routes;