import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Router } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar

import Autenticacao from './routes/autenticacao'
import {GlobalStyle} from './components/font.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" exact component={Autenticacao} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);