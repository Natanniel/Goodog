import React, { useState } from 'react';

// import { Container } from './styles';
import TopMenu from '../../../components/admin/topMenu';
import { Box, ContentDashboard, Listagem } from './style'
import { Bar, Line } from 'react-chartjs-2';


function Dashboard() {

  let [menu, setMenu] = useState('1');

  return (
    <div style={{ paddingBottom: 20 }}>
      <TopMenu />
     



    </div>
  );
}

export default Dashboard;