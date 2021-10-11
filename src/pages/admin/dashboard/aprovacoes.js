import React from 'react';

import { Titulo, Content } from '../../../components/admin/globals';
import { Box, ContentDashboard, Listagem } from './style'
import { Bar, Line } from 'react-chartjs-2';


function dashboard() {

    const data = canvas => {
        const ctx = canvas.getContext('2d');
        const g = ctx.createLinearGradient(0, 0, 100, 0);

        return {
            datasets: [{
                backgroundColor: g,
                // ...the rest
            }],
        };
    }

    return (
        <div>
            <Content>
                <ContentDashboard>
                    <div style={{ flex: 1, padding: '36px' }}>
                        <span>Hoje</span>
                        <Line data={data} />
                    </div>
                    <div >
                        <div>
                            <label>Aprovados</label>
                            <span>0</span>
                        </div>
                        <div>
                            <label>Recebidos</label>
                            <span>0</span>
                        </div>
                        <div>
                            <label>Tempo mínimo de resposta</label>
                            <span>0</span>
                        </div>
                        <div>
                            <label>Reprovados</label>
                            <span>0</span>
                        </div>
                        <div>
                            <label>Nível de aprovação</label>
                            <span>0</span>
                        </div>
                    </div>
                </ContentDashboard>
            </Content>
            <Content>
                <ContentDashboard>
                    <div style={{ flex: 1, padding: '36px' }}>
                        <span>Aprovações pendentes</span>
                        <Listagem>
                        </Listagem>
                    </div>
                </ContentDashboard>
            </Content>
        </div>

    );
}

export default dashboard;