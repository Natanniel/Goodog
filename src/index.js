import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Site from './pages/autenticacao/login'
import Recover from './pages/autenticacao/recoverPassword'

import Cliente from './routes/cliente';
import Admin from './routes/admin';
import App from './routes/app';

import { GlobalStyle } from './components/font.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" component={Cliente} />

      {/*     
      <Route path="/auth" exact component={Site} />
      <Route path="/recuperarsenha" exact component={Recover} />
      <Route path="/admin/dashboard" exact component={Admin} />
      <Route path="/app" component={App} />
      */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);