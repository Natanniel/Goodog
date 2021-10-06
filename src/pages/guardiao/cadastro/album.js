import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { ServiceBox, ValueBox, Titulo, BtnUpload, BtnUploadChange, MinimoFoto, RadioButtons, Experiencia, Options, LabelForm, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";
import { BtnNoHas } from '../../../components/menu/inicial/responsiveSign/styled';

import ImageUploading from 'react-images-uploading';

// import { Container } from './styles';

function Servico({ aprovado, voltar }) {

    const [experiencia, setExperiencia] = useState('1');

    const [primeirosSocorros, setPrimeiroSocorros] = useState(false);
    const [medicacaoHoral, setMedicacaoHoral] = useState(false);
    const [medicacaoInjetavel, setMedicacaoInjetavel] = useState(false);
    const [automovel, setAutomovel] = useState(false);

    const [motivacao, setMotivacao] = useState('0')
    const [quintal, setQuintal] = useState('0')
    const [images, setImages] = React.useState([]);

    const [tipoResidencia, setTipoResidencia] = useState('0')

    const [janelas, setJanelas] = useState(false);
    const [petsDentroCasa, setPetsDentroCasa] = useState(false);
    const [casaCachorro, setCasaCachorro] = useState(false);

    const [crianca, setCrianca] = useState('2');

    const maxNumber = 10;

    let submit = () => {
        // aprovado();
        window.scrollTo(0, 0)
    }

    let voltarAnterior = () => {
        voltar();
        window.scrollTo(0, 0)
    }

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div>
            <Titulo2>
                Seu álbum
                <span>Fotos atraentes no seu álbum aumentam a confiança e credibilidade no seu perfil.</span>
            </Titulo2>


            <Row style={{ display: 'block', minHeight: 300 }}>

                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper" style={{ display: 'inline-block' }}>

                            {imageList.map((image, index) => (
                                <div key={index} className="image-item" style={{ float: 'left', marginTop: 10, marginLeft: 10 , marginBottom:18}}>
                                    <img src={image['data_url']} alt="" width="100" height="100" />
                                    <div className="image-item__btn-wrapper">
                                        <BtnUploadChange onClick={() => onImageRemove(index)}>Remover</BtnUploadChange>
                                    </div>
                                </div>
                            ))}

                            <BtnUpload
                                id={'btn-upload'}
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Enviar fotos
                            </BtnUpload>
                            &nbsp;

                        </div>
                    )}
                </ImageUploading>
            </Row>


            <section>
                <Row style={{ flexDirection: 'row-reverse' }}>
                    <BtnSalvar onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                    <BtnVoltar onClick={() => voltarAnterior()}>Voltar</BtnVoltar>
                </Row>
            </section>
        </div>
    );
}

export default Servico;