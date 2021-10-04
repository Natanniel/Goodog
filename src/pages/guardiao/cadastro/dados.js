import React, { useState, useEffect } from 'react';
import { Container } from '../../../components/globals'
import { Titulo, Step, Titulo2, Row, Divider, AddContact, BtnSalvar, BtnVoltar } from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";
import toastr from "toastr";
import moment from "moment";

// import { Container } from './styles';

function CadastroDados({ aprovado }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
    const [genero, setGenero] = useState("selecione");

    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    let [contatos, setContatos] = useState([]);


    let validarFormulario = () => {
        let validar = false;
        console.log(cpfCnpj.length);
        const testEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (testEmail.test(String(email).toLowerCase()))
            if (nome.length > 2)
                if (sobrenome.length > 2)
                    if (moment(data).isValid())
                        if (genero != 'selecione' && genero != '')
                            if (endereco.length > 5)
                                if (numero.length > 0)
                                    if (complemento.length > 0)
                                        if (cpfCnpj.length == 14 || cpfCnpj.length == 18)
                                            validar = true;
                                        else
                                            toastr.error("Informe um documento válido");
                                    else
                                        toastr.error("Complemento um numero válido");
                                else
                                    toastr.error("Informe um numero válido");
                            else
                                toastr.error("Endereço deve conter pelo menos 10 digitos.");
                        else
                            toastr.error("Você precisa informar o seu gênero");
                    else
                        toastr.error("Data de nascimento inválido !");
                else
                    toastr.error("Sobrenome inválido !");
            else
                toastr.error("Nome inválido !");
        else
            toastr.error("Email inválido !");

        return validar;
    }

    let validarContatos = () => {
        let valida = false;

        if (contatos.length > 0) {

            let AlgumComErro = false;
            let Principal = false;

            for (let i = 0; i < contatos.length; i++) {
                // Verifica se o contato foi selecionado o tipo
                if (contatos[i].tipo == '') {
                    if (contatos[i].tipo == 'principal')
                        if (Principal) {
                            toastr.error('Você só pode ter 1 contato principal');
                            AlgumComErro = true;
                        } else {
                            Principal = true;
                        }

                    else {
                        toastr.error('Você precisa informar o tipo do contato ' + (i + 1));
                        AlgumComErro = true;
                    }

                }

                if (contatos[i].contato.length != 15 && contatos[i].contato.length != 14) {
                    toastr.error('Você precisa um numero válido no contato ' + (i + 1));
                    AlgumComErro = true;
                }
            }

            if (AlgumComErro == false)
                valida = true;
        }

        else
            toastr.error("Você deve informar pelo menos um numero de contato.");

        return valida;
    }

    let submit = () => {
        if (validarFormulario())
            if (validarContatos()) {
                toastr.success("aee");

                let dados = {
                    dados: {
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        dataNascimento: data,
                        genero: genero,
                        endereco: {
                            logradouro: endereco,
                            numero: numero,
                            complemento: complemento
                        },
                        documento: cpfCnpj,
                        contato: contatos
                    }
                }
                aprovado(dados)
            }
    }

    let adicionarContato = () => {
        let x = [];
        for (let i = 0; i < contatos.length; i++)
            x.push(contatos[i])
        x.push({ tipo: '', contato: '' });
        setContatos(x);
    }

    let ChangeNumeroContato = (e, index) => {
        let x = [];
        for (let i = 0; i < contatos.length; i++) {
            console.log(index, i, e)

            if (i == index)
                x.push({ tipo: contatos[i].tipo, contato: e });
            else
                x.push(contatos[i])
        }

        setContatos(x);
    }

    let ChangeTipoContato = (e, index) => {
        let x = [];
        for (let i = 0; i < contatos.length; i++) {

            if (i == index)
                x.push({ tipo: e.target.value, contato: contatos[i].contato });
            else
                x.push(contatos[i])
        }

        setContatos(x);
    }

    let keyDownCheck = (e) => {
        console.log('Enter', e.key);
        if (e.key == 'Enter')
            submit()
    }



    return (
        <div>
            <Titulo2>
                Seus dados
                <span>Nos conte mais sobre você.</span>
            </Titulo2>
            <form onSubmit={e => {
                submit();
            }}>
                <section>
                    <Row>
                        <fieldset>
                            <legend>Nome</legend>
                            <input placeholder="Seu nome" value={nome} onKeyDown={(e) => keyDownCheck(e)} onChange={(e) => setNome(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <legend>Sobrenome</legend>
                            <input placeholder="Sobrenome" value={sobrenome} onKeyDown={(e) => keyDownCheck(e)} onChange={(e) => setSobrenome(e.target.value)} />
                        </fieldset>
                    </Row>
                    <Row>
                        <fieldset>
                            <legend>E-mail</legend>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => keyDownCheck(e)} placeholder="Seu melhor e-mail" />
                        </fieldset>
                    </Row>
                    <Row>
                        <fieldset>
                            <legend>Data de Nascimento</legend>
                            <input type="date" value={data} onChange={(e) => setData(e.target.value)} onKeyDown={(e) => keyDownCheck(e)} />
                        </fieldset>
                        <fieldset>
                            <legend>Gênero</legend>
                            <select value={genero} onChange={(e) => setGenero(e.target.value)} onKeyDown={(e) => keyDownCheck(e)} >
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
                            <input placeholder="Seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} onKeyDown={(e) => keyDownCheck(e)} />
                        </fieldset>
                    </Row>
                    <Row>
                        <fieldset style={{ width: '135px', flex: 'none' }}>
                            <legend>Numero</legend>
                            <input placeholder="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} onKeyDown={(e) => keyDownCheck(e)} />
                        </fieldset>
                        <fieldset style={{ width: '338px', flex: 'none' }}>
                            <legend>Complemento</legend>
                            <input placeholder="Apartamento, bloco, conjunto, referência" value={complemento} onChange={(e) => setComplemento(e.target.value)} onKeyDown={(e) => keyDownCheck(e)} />
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
                                onKeyDown={(e) => keyDownCheck(e)}
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
                    {
                        contatos.length > 0 ?
                            contatos.map((e, index) => (
                                <Row key={index}>
                                    <fieldset style={{ width: '135px', flex: 'none' }}>
                                        <legend>Telefone</legend>
                                        <select value={e.tipo} onChange={(e) => ChangeTipoContato(e, index)}>
                                            <option value=''>Selecione ...</option>
                                            <option value='principal'>Principal</option>
                                            <option value='opcional'>Opcional</option>
                                        </select>
                                    </fieldset>
                                    <fieldset style={{ width: '338px', flex: 'none' }}>
                                        <legend>Numero</legend>
                                        <InputMask onKeyDown={(e) => keyDownCheck(e)} mask="(99) 99999-9999" style={{ textIndent: 10 }} value={e.contato} onChange={(e) => ChangeNumeroContato(e.target.value, index)} />
                                    </fieldset>
                                </Row>
                            ))
                            : null
                    }


                    <Row style={{ marginTop: 9 }}>
                        <AddContact onClick={() => adicionarContato()}>Adicionar contato</AddContact>
                    </Row>
                </section>

                <Divider />
                <section>
                    <Row style={{ flexDirection: 'row-reverse' }}>
                        <BtnSalvar type='submit' onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                        <BtnVoltar>Voltar</BtnVoltar>
                    </Row>
                </section>
            </form>
        </div >
    );
}

export default CadastroDados;