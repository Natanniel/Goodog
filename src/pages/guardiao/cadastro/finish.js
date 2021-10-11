import React from 'react';

// import { Container } from './styles';
import { CheckCircleOutline, Timer } from '@material-ui/icons';
import { Button } from '../../../components/globals'
import { Link, useHistory } from "react-router-dom";

function cadastro(status) {

    return (
        <div style={{ height: 266, width: 530, borderRadius: 4, background: '#EEFBFC', border: '1px solid #1B98A7', marginTop: 121 }}>

            {status.status == false ? (
                <>
                    <Timer style={{ display: 'block', height: 40, width: 40, color: '#1B98A7', margin: '0 auto', marginTop: 20 }} />
                    <span style={{ display: 'block', fontSize: 34, color: '#1B98A7', marginTop: 7, fontFamily: 'Poppins', textAlign: 'center', width: '100%' }}>Processando ...</span>
                    <span style={{ letterSpacing: '0.15px', display: 'block', width: 500, margin: '0 auto', textAlign: 'center', marginTop: 20, fontSize: 17, fontFamily: 'poppinsLight' }}>Aguarde até que o sistema faça cadastro e upload dos seus dados de cadastro.</span>

                </>
            ) : (
                <>
                    <CheckCircleOutline style={{ display: 'block', height: 40, width: 40, color: '#1B98A7', margin: '0 auto', marginTop: 20 }} />
                    <span style={{ display: 'block', fontSize: 34, color: '#1B98A7', marginTop: 7, fontFamily: 'Poppins', textAlign: 'center', width: '100%' }}>Cadastro enviado!</span>
                    <span style={{ letterSpacing: '0.15px', display: 'block', width: 500, margin: '0 auto', textAlign: 'center', marginTop: 20, fontSize: 17, fontFamily: 'poppinsLight' }}>Seu perfil foi enviado e nossa equipe analisará seu perfil, em breve terá uma resposta</span>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Button style={{ display: 'block', margin: '0 auto', marginTop: 24, float: 'initial' }}>OK</Button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default cadastro;