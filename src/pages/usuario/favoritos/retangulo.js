import React from 'react';

import { Retangle , Button, ButtonWhite} from '../../../components/globals';
import {Favorite, Chat} from '@material-ui/icons'

function pedidos() {
    return (
        <Retangle style={{ marginTop: 16, padding: '16px 30px' }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <img height={40} width={40} style={{ marginRight: 16, float: 'left', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '50px' }} />
                    <div>
                        <span style={{ display: 'block', margin: 0, padding: 0, fontSize: 20, fontFamily: 'Poppins' }}>Carla Pereira</span>
                        <span style={{ display: 'block', margin: 0, marginTop: -5, padding: 0, fontSize: 14, fontFamily: 'PoppinsLight', color: 'rgba(0, 0, 0, 0.6)' }}>Jardim maracanã</span>
                    </div>
                </div>
                <div style={{ flex: 1, textAlign:'right', color:'red' }}>
                    <Favorite />
                </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex',  marginTop:30 }}>
                <Button style={{flex:1, textAlign:'center'}}><Chat style={{float:'inherit'}}/>Conversar</Button>
                <ButtonWhite style={{flex:1}}>Reservar</ButtonWhite>
            </div>
        </Retangle>
    );
}

export default pedidos;