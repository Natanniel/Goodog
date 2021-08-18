import React, { useEffect, useState } from 'react';

import { Link, useHistory } from "react-router-dom";
// import { Container } from './styles';
import { Close, BackgroundModal, Modal, Title, Cadastrar, JaTenhoConta, BtnFacebook, BtnGoogle, LabelInfo, InputDiv, Input, CheckboxLabel } from './style';

function Dialogs({ fechar, nav }) {


    return (
        <BackgroundModal>
            <Modal>
                <Close onClick={() => fechar()}></Close>

                <Link style={{ cursor: 'pointer', display: 'block', height: 30, width: 330, position: 'absolute', top: '402px', left: '30px' }} to={'/cliente'}></Link>
            </Modal>
        </BackgroundModal>
    )
}

export default Dialogs;

//C14W00700451
//C14W00700395