import React from 'react';

import { Retangle } from '../../../components/globals';

function pedidos() {
    return (
        <Retangle style={{ marginTop: 8, padding: '16px 30px' }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <img height={40} width={40} style={{ marginRight: 16, float: 'left', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '50px' }} />
                    <div>
                        <span style={{ display: 'block', margin: 0, padding: 0, fontSize: 20, fontFamily: 'Poppins' }}>Carla Pereira</span>
                        <span style={{ display: 'block', margin: 0, marginTop: -7, padding: 0, fontSize: 14, fontFamily: 'PoppinsLight' }}>Tobby</span>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ marginTop: 10 }}>
                        <span style={{ textAlign: 'right', color: '#1B98A7', display: 'block', margin: 0, padding: 0, fontSize: 20, fontFamily: 'Poppins' }}>Hotel</span>
                        <span style={{ textAlign: 'right', color: 'rgba(0, 0, 0, 0.6)', display: 'block', margin: 0, padding: 0, fontSize: 12, fontFamily: 'PoppinsLight' }}>Sex. 01/Jul. até Qua. 05/Jul.</span>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', marginTop: 8 }} />
            <div style={{ flexDirection: 'row', display: 'flex', marginTop: 8 }}>
                <div style={{ flex: 1 }}>
                    <span style={{ color: 'rgba(0, 0, 0, 0.6)', display: 'block', margin: 0, marginTop: 5, padding: 0, fontSize: 12, fontFamily: 'PoppinsLight' }}>Última atualização: 15/06/2021 às 16h15</span>
                </div>
                <div style={{ flex: 1 }}>
                    <span style={{ textAlign: 'right', color: 'rgba(0, 0, 0, 0.6)', display: 'block', margin: 0, padding: 0, fontSize: 20, fontFamily: 'Poppins' }}>Total: <span style={{ color: '#1B98A7' }}>R$20</span></span>
                </div>
            </div>
        </Retangle>
    );
}

export default pedidos;