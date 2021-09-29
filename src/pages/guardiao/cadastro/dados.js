import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { Titulo, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";
import toastr from "toastr";
import moment from "moment";
// import { Container } from './styles';

function Cadastro({ aprovado }) {


    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
    const [genero, setGenero] = useState("0");

    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [contatos, setContatos] = useState([]);

    let submit = () => {
        alert();
        const testEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (testEmail.test(String(email).toLowerCase()))
            if (nome.length > 2)
                if (sobrenome.length > 2)
                    if (moment(data, 'DD/MM/YYYY', true).isValid())
                        if (genero != 'selecione' && genero != '')

                        else
                            toastr.success("Você precisa informar o seu gênero");
                    else
                        toastr.error("Data de nascimento inválido !");
                else
                    toastr.error("Sobrenome inválido !");
            else
                toastr.error("Nome inválido !");
        else
            toastr.error("Email inválido !");






    }


    return (
        <div>
            <Titulo2>
                Seus dados
                <span>Nos conte mais sobre você.</span>
            </Titulo2>
            <section>
                <Row>
                    <fieldset>
                        <legend>Nome</legend>
                        <input placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Sobrenome</legend>
                        <input placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>E-mail</legend>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor e-mail" />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>Data de Nascimento</legend>
                        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Gênero</legend>
                        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
                            <option value="selecione">Selecione ...</option>
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                        </select>
                    </fieldset>
                </Row>
            </section>
            <Divider />
            <section>
                <Titulo2>
                    Endereço
                    <span>Indique sua localização para que seus clientes saibam onde seus Pets vão ficar.</span>
                </Titulo2>
                <Row>
                    <fieldset>
                        <legend>Seu endereço</legend>
                        <input placeholder="Seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset style={{ width: '135px', flex: 'none' }}>
                        <legend>Numero</legend>
                        <input placeholder="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </fieldset>
                    <fieldset style={{ width: '338px', flex: 'none' }}>
                        <legend>Complemento</legend>
                        <input placeholder="Apartamento, bloco, conjunto, referência" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                    </fieldset>
                </Row>
                <Row>
                    <div style={{ border: '1px solid rgba(0, 0, 0, 0.2)', color: 'rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', lineHeight: '190px', textAlign: 'center', fontFamily: 'poppins', height: '190px' }}>
                        MAPA
                    </div>
                </Row>

            </section>
            <Divider />
            <section>
                <Titulo2>
                    Documentos
                    <span>Seus documentos são cruciais para a segurança de todos.</span>
                </Titulo2>
                <Row>
                    <fieldset>
                        <legend>Documento</legend>
                        <CpfCnpj
                            value={cpfCnpj}
                            onChange={(ev, type) => {
                                setCpfCnpj(ev.target.value);
                                setMask(type === "CPF");
                            }}
                            style={{ textIndent: 10, }}
                        />
                    </fieldset>
                </Row>
            </section>
            <Divider />
            <section>
                <Titulo2>
                    Contato
                    <span style={{ width: 339 }}>Saber como contatar você é muito importante para podermos falar com você caso seja necessário.</span>
                </Titulo2>
                <Row>
                    <fieldset style={{ width: '135px', flex: 'none' }}>
                        <legend>Telefone</legend>
                        <select>
                            <option value='Principal'>Principal</option>
                            <option value='Opcional'>Opcional</option>
                        </select>
                    </fieldset>
                    <fieldset style={{ width: '338px', flex: 'none' }}>
                        <legend>Numero</legend>
                        <InputMask mask="(99) 99999-9999" style={{ textIndent: 10 }} />
                    </fieldset>
                </Row>
                <Row style={{ marginTop: 9 }}>
                    <AddContact>Adicionar contato</AddContact>
                </Row>
            </section>

            <Divider />
            <section>
                <Row style={{ flexDirection: 'row-reverse' }}>
                    <BtnSalvar onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                    <BtnVoltar>Voltar</BtnVoltar>
                </Row>
            </section>
        </div>
    );
}

export default Cadastro;