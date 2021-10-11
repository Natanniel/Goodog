import React, { useState } from 'react';

// import { Container } from './styles';
import TopMenu from '../../../components/admin/topMenu';
import { Box, ContentDashboard, Listagem } from './style'
import { Bar, Line } from 'react-chartjs-2';

import Clientes from './clientes';
import Guardioes from './guardioes';
import Aprovacoes from './aprovacoes';
import Reclamacoes from './reclamacoes';

function Dashboard() {

  let [menu, setMenu] = useState('1');

  return (
    <div style={{ paddingBottom: 20 }}>
      <TopMenu />
      <Box>
        <div className={menu == '1' ? 'selected' : ''} onClick={() => setMenu('1')}>
          <label>Clientes</label>
          <span>0</span>
        </div>
        <div className={menu == '2' ? 'selected' : ''} onClick={() => setMenu('2')}>
          <label>Guardiões</label>
          <span>0</span>
        </div>
        <div className={menu == '3' ? 'selected' : ''} onClick={() => setMenu('3')}>
          <label>Aprovações</label>
          <span>0</span>
        </div>
        <div className={menu == '4' ? 'selected' : ''} onClick={() => setMenu('4')}>
          <label>Reclamações</label>
          <span>0</span>
        </div>
      </Box>

      {menu == '1' ? <Clientes /> : null}
      {menu == '2' ? <Guardioes /> : null}
      {menu == '3' ? <Aprovacoes /> : null}
      {menu == '4' ? <Reclamacoes /> : null}

    </div>
  );
}

export default Dashboard;