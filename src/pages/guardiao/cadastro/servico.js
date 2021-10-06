import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { ServiceBox, ValueBox, Titulo, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";
import toastr from 'toastr';
// import { Container } from './styles';

function Servico({ aprovado, voltar }) {

    const [hotel, setHotel] = useState(false);
    const [creche, setCreche] = useState(false);
    const [baba, setBaba] = useState(false);
    const [passeio, setPasseio] = useState(false);

    const [hotelAdicional, setHotalAdicional] = useState(false);
    const [hotelValor, setHotelValor] = useState('0');
    const [hotelSuperValor, setHotelSuperValor] = useState('0');
    const [hotelAdicionalValor, setHotelAdicionalValor] = useState('0');
    const [hotelFeriadosValor, setHotelFeriadosValor] = useState('0');
    const [hotelExtraValor, setHotelExtraValor] = useState('0');

    const [crecheAdicional, setCrecheAdicional] = useState(false);
    const [crecheValor, setCrecheValor] = useState('0')

    const [babaAdicional, setBabaAdicional] = useState(false);
    const [babaValor, setBabaValor] = useState('0')

    const [passeioAdicional, setPasseioAdicional] = useState(false);
    const [passeioValor, setPasseioValor] = useState('0')



    let submit = () => {

        if (hotel || creche || baba || passeio) {

            let dados = {
                hotel: {
                    ativo: hotel,
                    valor: hotelValor,
                    superCliente: hotelSuperValor,
                    petAdicional: hotelAdicionalValor,
                    feriados: hotelFeriadosValor,
                    tempoExtra: hotelExtraValor
                }
            }

            aprovado(dados);
            window.scrollTo(0, 0)
        } else
            toastr.error('Você deve informar pelo menos 1 serviço.')


    }

    let voltarAnterior = () => {
        voltar();
        window.scrollTo(0, 0)
    }




    return (
        <div>
            <Titulo2>
                Seus serviços
                <span>Controle o serviços que você oferecerá.</span>
            </Titulo2>
            <section>
                <Row style={{ display: 'block' }}>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Hotel</span>
                            <span className='descricao'>Abrigue pets em sua residência por uma noite ou mais.</span>
                        </div>
                        <input type='checkbox' checked={hotel} onChange={() => setHotel(!hotel)} />
                    </ServiceBox>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Creche</span>
                            <span className='descricao'>Divirta um pet durante o dia em sua residência.</span>
                        </div>
                        <input type='checkbox' checked={creche} onChange={() => setCreche(!creche)} />
                    </ServiceBox>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Babá</span>
                            <span className='descricao'>Dê todo seu amor e carinho para o pet na casa do cliente.</span>
                        </div>
                        <input type='checkbox' checked={baba} onChange={() => setBaba(!baba)} />
                    </ServiceBox>
                    <ServiceBox>
                        <div className='infos'>
                            <span className='title'>Passeio</span>
                            <span className='descricao'>Leve um Pet para explorar o mundo.</span>
                        </div>
                        <input type='checkbox' checked={passeio} onChange={() => setPasseio(!passeio)} />
                    </ServiceBox>

                </Row>

            </section>
            {passeio || creche || baba || creche ?
                <Divider />
                : null
            }


            <section>
                {passeio || hotel || baba || creche ?
                    <Titulo2>
                        Seus valores
                        <span>Defina quanto deseja receber pelos seus serviços.</span>
                    </Titulo2>
                    : null
                }

                {hotel ?
                    <Row>
                        <ValueBox>
                            <div className='infos'>
                                <span className='title'>Hotel</span>
                                <span className='descricao'>Leve um Pet para explorar o mundo.</span>
                            </div>
                            <div className='values'>
                                <label>R$</label>
                                <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                <span>Você recebe: R$0,00</span>
                            </div>
                            <span class='adicionais' onClick={() => setHotalAdicional(!hotelAdicional)}><i></i>Adicionais</span>
                            {hotelAdicional ? <>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Super Cliente</span>
                                        <span className='descricao'>Desconto para clientes recorrentes</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Pet Adicional</span>
                                        <span className='descricao'>Acréscimo por pet adicional.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Feriados</span>
                                        <span className='descricao'>Acréscimo para feriados.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Tempo extra</span>
                                        <span className='descricao' style={{ width: 270, marginBottom: 10 }}>Acréscimo aplicado por excedente de reserva.</span>
                                    </div>
                                    <div className='values'>
                                        <label style={{ marginLeft: 10 }}><span className='plus'>+</span>R$</label>
                                        <input type="number" style={{ textIndent: 60 }} value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                            </> : null}
                        </ValueBox>
                    </Row>
                    : null}

                {creche ?
                    <Row>
                        <ValueBox>
                            <div className='infos'>
                                <span className='title'>Creche</span>
                                <span className='descricao' style={{ width: 250 }}>Divirta um pet durante o dia em sua residência.</span>
                            </div>
                            <div className='values'>
                                <label>R$</label>
                                <input type="number" value={crecheValor} onChange={(e) => setCrecheValor(e.target.value)} />
                                <span>Você recebe: R$0,00</span>
                            </div>
                            <span class='adicionais' onClick={() => setCrecheAdicional(!crecheAdicional)}><i></i>Adicionais</span>
                            {crecheAdicional ? <>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Super Cliente</span>
                                        <span className='descricao'>Desconto para clientes recorrentes</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Pet Adicional</span>
                                        <span className='descricao'>Acréscimo por pet adicional.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Feriados</span>
                                        <span className='descricao'>Acréscimo para feriados.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Tempo extra</span>
                                        <span className='descricao' style={{ width: 270, marginBottom: 10 }}>Acréscimo aplicado por excedente de reserva.</span>
                                    </div>
                                    <div className='values'>
                                        <label style={{ marginLeft: 10 }}><span className='plus'>+</span>R$</label>
                                        <input type="number" style={{ textIndent: 60 }} value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                            </> : null}
                        </ValueBox>
                    </Row>
                    : null}

                {baba ?
                    <Row>
                        <ValueBox>
                            <div className='infos'>
                                <span className='title'>Babá</span>
                                <span className='descricao' style={{ width: 250 }}>Dê todo seu amor e carinho para o pet na casa do cliente.</span>
                            </div>
                            <div className='values'>
                                <label>R$</label>
                                <input type="number" value={babaValor} onChange={(e) => setBabaValor(e.target.value)} />
                                <span>Você recebe: R$0,00</span>
                            </div>
                            <span class='adicionais' onClick={() => setBabaAdicional(!babaAdicional)}><i></i>Adicionais</span>
                            {babaAdicional ? <>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Super Cliente</span>
                                        <span className='descricao'>Desconto para clientes recorrentes</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Pet Adicional</span>
                                        <span className='descricao'>Acréscimo por pet adicional.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Feriados</span>
                                        <span className='descricao'>Acréscimo para feriados.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Tempo extra</span>
                                        <span className='descricao' style={{ width: 270, marginBottom: 10 }}>Acréscimo aplicado por excedente de reserva.</span>
                                    </div>
                                    <div className='values'>
                                        <label style={{ marginLeft: 10 }}><span className='plus'>+</span>R$</label>
                                        <input type="number" style={{ textIndent: 60 }} value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                            </> : null}
                        </ValueBox>
                    </Row>
                    : null}

                {passeio ?
                    <Row>
                        <ValueBox>
                            <div className='infos'>
                                <span className='title'>Passeio</span>
                                <span className='descricao' style={{ width: 250 }}>Leve um Pet para explorar o mundo.</span>
                            </div>
                            <div className='values'>
                                <label>R$</label>
                                <input type="number" value={passeioValor} onChange={(e) => setPasseioValor(e.target.value)} />
                                <span>Você recebe: R$0,00</span>
                            </div>
                            <span class='adicionais' onClick={() => setPasseioAdicional(!passeioAdicional)}><i></i>Adicionais</span>
                            {passeioAdicional ? <>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Super Cliente</span>
                                        <span className='descricao'>Desconto para clientes recorrentes</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Pet Adicional</span>
                                        <span className='descricao'>Acréscimo por pet adicional.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Feriados</span>
                                        <span className='descricao'>Acréscimo para feriados.</span>
                                    </div>
                                    <div className='values'>
                                        <label>R$</label>
                                        <input type="number" value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='infos'>
                                        <span className='title'>Tempo extra</span>
                                        <span className='descricao' style={{ width: 270, marginBottom: 10 }}>Acréscimo aplicado por excedente de reserva.</span>
                                    </div>
                                    <div className='values'>
                                        <label style={{ marginLeft: 10 }}><span className='plus'>+</span>R$</label>
                                        <input type="number" style={{ textIndent: 60 }} value={hotelValor} onChange={(e) => setHotelValor(e.target.value)} />
                                        <span>Você recebe: R$0,00</span>
                                    </div>
                                </Row>
                            </> : null}
                        </ValueBox>
                    </Row>
                    : null}






            </section>

            <Divider />
            <section>
                <Row style={{ flexDirection: 'row-reverse' }}>
                    <BtnSalvar onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                    <BtnVoltar onClick={() => voltarAnterior()}>Voltar</BtnVoltar>
                </Row>
            </section>
        </div >
    );
}

export default Servico;