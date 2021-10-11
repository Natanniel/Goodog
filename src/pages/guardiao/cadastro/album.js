import React, { useState } from 'react';
import { ServiceBox, ValueBox, Titulo, BtnUpload, BtnUploadChange, MinimoFoto, RadioButtons, Experiencia, Options, LabelForm, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import ImageUploading from 'react-images-uploading';
import toastr from 'toastr';

function Servico({ visible, aprovado, voltar }) {

    const [images, setImages] = React.useState([]);
    const maxNumber = 10;

    let submit = () => {
        if (images.length > 0) {
            aprovado(images);
        } else {
            toastr.error('Você precisa informar pelo menos 1 foto para o seu album');
        }
    }

    let voltarAnterior = () => {
        voltar();
        window.scrollTo(0, 0)
    }

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    return (
        <div>
            {visible ? <>
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
                                    <div key={index} className="image-item" style={{ float: 'left', marginTop: 10, marginLeft: 10, marginBottom: 18 }}>
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
            </> : null}
        </div>
    );
}

export default Servico;