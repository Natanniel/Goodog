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

    const [crianca, setState] = useState('2');

    const maxNumber = 10;

    let submit = () => {
        aprovado();
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
                Seu perfil Guardião
                <span>Descreva como você quer ser visto na Goodog.</span>
            </Titulo2>

            <Divider />

            <Row>
                <fieldset>
                    <legend>Titulo do seu pefil</legend>
                    <input placeholder="Titulo do seu perfil" />
                </fieldset>
            </Row>
            <Row>
                <fieldset style={{ height: 180, }}>
                    <legend>Por que você é o Guardião ideal para seu cliente?</legend>
                    <textarea rows='8' cols='80' style={{ border: 'none', fontFamily: 'Poppins' }} resize='none' />
                </fieldset>
            </Row>
            <Divider />
            <Row style={{ display: 'block' }}>
                <Titulo2>
                    Sua experiência
                    <span>Há quantos anos você trabalha com pets?</span>
                </Titulo2>
                <Row>
                    <Experiencia>
                        <div onClick={() => experiencia == 1 || experiencia == '1' ? setExperiencia('1') : setExperiencia(parseInt(experiencia) - 1)}>-</div>
                        <div><input value={experiencia} style={{ width: 120 }} /></div>
                        <div onClick={() => setExperiencia(parseInt(experiencia) + 1)}>+</div>
                    </Experiencia>
                </Row>
            </Row>

            <Divider />
            <Row style={{ display: 'block' }}>
                <Titulo2>
                    Suas habilidades
                </Titulo2>

                <Row style={{ display: 'block', height: 95 }}>
                    <LabelForm>É habilitado para atendimento de primeiros socorros?</LabelForm>
                    <Options style={{ marginTop: 16 }}>
                        <span onClick={() => setPrimeiroSocorros(true)} className={primeirosSocorros ? "selected" : ""}>Sim</span>
                        <span onClick={() => setPrimeiroSocorros(false)} className={primeirosSocorros ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>

                <Row style={{ display: 'block', height: 75, marginTop: 16 }}>
                    <LabelForm>Sabe aplicar medicação oral?</LabelForm>
                    <Options>
                        <span onClick={() => setMedicacaoHoral(true)} className={medicacaoHoral ? "selected" : ""}>Sim</span>
                        <span onClick={() => setMedicacaoHoral(false)} className={medicacaoHoral ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>

                <Row style={{ display: 'block', height: 75, marginTop: 16 }}>
                    <LabelForm>Sabe aplicar medicação injetável?</LabelForm>
                    <Options>
                        <span onClick={() => setMedicacaoInjetavel(true)} className={medicacaoInjetavel ? "selected" : ""}>Sim</span>
                        <span onClick={() => setMedicacaoInjetavel(false)} className={medicacaoInjetavel ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>
                <Row style={{ display: 'block', height: 75, marginTop: 16 }}>
                    <LabelForm>Possui automóvel para emergência?</LabelForm>
                    <Options>
                        <span onClick={() => setAutomovel(true)} className={automovel ? "selected" : ""}>Sim</span>
                        <span onClick={() => setAutomovel(false)} className={automovel ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>
            </Row>
            <Divider />

            <Row style={{ display: 'block' }}>
                <Titulo2>
                    Suas motivações
                </Titulo2>
                <RadioButtons>
                    <LabelForm style={{ marginTop: 16, height: 20 }}>Por que deseja ser um Guardião?</LabelForm>
                    <ul>
                        <li className={motivacao == '1' ? 'selected' : ''}>
                            <label>
                                <span>Para ter uma fonte de renda primária</span>
                                <input type="checkbox" value="1" name="radio" onClick={() => setMotivacao('1')} checked={motivacao == '1' ? true : false} />
                            </label>
                        </li>
                        <li className={motivacao == '2' ? 'selected' : ''}>
                            <label>
                                <span>Para ter uma fonte de renda extra</span>
                                <input type="checkbox" value="2" name="radio" onClick={() => setMotivacao('2')} checked={motivacao == '2' ? true : false} />
                            </label>
                        </li>
                        <li className={motivacao == '3' ? 'selected' : ''}>
                            <label>
                                <span>Para me ocupar no tempo livre</span>
                                <input type="checkbox" value="3" name="radio" onClick={() => setMotivacao('3')} checked={motivacao == '3' ? true : false} />
                            </label>
                        </li>
                        <li className={motivacao == '4' ? 'selected' : ''}>
                            <label>
                                <span>Para expandir meu negócio</span>
                                <input type="checkbox" value="4" name="radio" onClick={() => setMotivacao('4')} checked={motivacao == '4' ? true : false} />
                            </label>
                        </li>
                    </ul>
                </RadioButtons>
            </Row>
            <Divider />
            <Row style={{ display: 'block' }}>
                <Titulo2>
                    Tipo de residência
                </Titulo2>
                <Row style={{ display: 'block', height: 75, marginTop: 16 }}>
                    <LabelForm>Tipo de residência</LabelForm>
                    <Options>
                        <span onClick={() => tipoResidencia('1')} className={tipoResidencia == '1' ? "selected" : ""}>Casa</span>
                        <span onClick={() => tipoResidencia('2')} className={tipoResidencia == '2' ? '' : 'selected'}>Apartamento</span>
                    </Options>
                </Row>
                <RadioButtons>
                    <LabelForm style={{ marginTop: 16, height: 20 }}>Tamanho do seu quintal</LabelForm>
                    <ul>
                        <li className={quintal == '1' ? 'selected' : ''}>
                            <label>
                                <span>Pequeno</span>
                                <input type="checkbox" value="1" name="radio" onClick={() => setQuintal('1')} checked={quintal == '1' ? true : false} />
                            </label>
                        </li>
                        <li className={quintal == '2' ? 'selected' : ''}>
                            <label>
                                <span>Médio</span>
                                <input type="checkbox" value="2" name="radio" onClick={() => setQuintal('2')} checked={quintal == '2' ? true : false} />
                            </label>
                        </li>
                        <li className={quintal == '3' ? 'selected' : ''}>
                            <label>
                                <span>Grande</span>
                                <input type="checkbox" value="3" name="radio" onClick={() => setQuintal('3')} checked={quintal == '3' ? true : false} />
                            </label>
                        </li>
                        <li className={motivacao == '4' ? 'selected' : ''}>
                            <label>
                                <span>Não possui quintal</span>
                                <input type="checkbox" value="4" name="radio" onClick={() => setQuintal('4')} checked={quintal == '4' ? true : false} />
                            </label>
                        </li>
                    </ul>
                </RadioButtons>
                <Row style={{ display: 'block', height: 75, marginTop: 16, width: 400 }}>
                    <LabelForm>Janelas da residência possuem tela de proteção?</LabelForm>
                    <Options style={{ marginTop: 8 }}>
                        <span onClick={() => setJanelas(true)} className={janelas ? "selected" : ""}>Sim</span>
                        <span onClick={() => setJanelas(false)} className={janelas ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>
                <Row style={{ display: 'block', height: 75, marginTop: 16, width: 400 }}>
                    <LabelForm>Permitido Pets dentro de casa?</LabelForm>
                    <Options>
                        <span onClick={() => setPetsDentroCasa(true)} className={petsDentroCasa ? "selected" : ""}>Sim</span>
                        <span onClick={() => setPetsDentroCasa(false)} className={petsDentroCasa ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>
                <Row style={{ display: 'block', height: 75, marginTop: 16 }}>
                    <LabelForm>Possui casinha de cachorro?</LabelForm>
                    <Options>
                        <span onClick={() => setCasaCachorro(true)} className={casaCachorro ? "selected" : ""}>Sim</span>
                        <span onClick={() => setCasaCachorro(false)} className={casaCachorro ? '' : 'selected'}>Não</span>
                    </Options>
                </Row>
                <RadioButtons>
                    <LabelForm style={{ marginTop: 16, height: 20 }}>Presença de crianças?</LabelForm>
                    <ul>
                        <li>
                            <label>
                                <span>Sim, até 10 anos</span>
                                <input type="radio" value="1" name="radio" onClick={() => setMotivacao('1')} checked={motivacao == '1' ? true : false} />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>Não tenho crianças</span>
                                <input type="radio" value="2" name="radio" onClick={() => setMotivacao('2')} checked={motivacao == '2' ? true : false} />
                            </label>
                        </li>
                    </ul>
                </RadioButtons>
            </Row>
            <Divider />
            <Row style={{ display: 'block', minHeight: 300 }}>
                <Titulo2>
                    Fotos
                </Titulo2>
                <LabelForm style={{ marginTop: 16, height: 'auto', width: 530, fontSize: 14, fontFamily: 'poppinsLight' }}>Para conhecermos melhor a sua residêcia, envie fotos dos itens abaixo. Vale ressalar que essas fotos não serão exibidas no seu perfil, são apenas para validação do seu perfil de Guardião.</LabelForm>
                <MinimoFoto>
                    Limite mínimo de 5 fotos
                    <div>
                        <ul>
                            <li>Portões</li>
                            <li>Muros</li>
                            <li>Areas externas</li>
                        </ul>
                        <ul>
                            <li>Janelas</li>
                            <li>Escadas</li>
                            <li>Cômodos</li>
                        </ul>
                    </div>
                </MinimoFoto>
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
                            <BtnUpload
                                id={'btn-upload'}
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Enviar fotos
                            </BtnUpload>
                            &nbsp;
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item" style={{ float: 'left', marginTop: 10, marginLeft: 10 }}>
                                    <img src={image['data_url']} alt="" width="100" height="100" />
                                    <div className="image-item__btn-wrapper">
                                        <BtnUploadChange onClick={() => onImageRemove(index)}>Remover</BtnUploadChange>
                                    </div>
                                </div>
                            ))}
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