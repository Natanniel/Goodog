import React, { useState } from 'react';
import { Container } from '../../../components/globals'
import { Titulo, Step, Titulo2, Row, Divider, AddContact, BtnSalvar ,BtnVoltar} from './styled'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import InputMask from "react-input-mask";

// import { Container } from './styles';

function Cadastro({aprovado}) {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [contatos, setContatos] = useState([]);

    let submit = () => {
        aprovado();
        window.scrollTo(0, 0)
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
                        <input placeholder="Seu nome" />
                    </fieldset>
                    <fieldset>
                        <legend>Sobrenome</legend>
                        <input placeholder="Sobrenome" />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>E-mail</legend>
                        <input placeholder="Seu melhor e-mail" />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset>
                        <legend>Data de Nascimento</legend>
                        <input type="date" />
                    </fieldset>
                    <fieldset>
                        <legend>Gênero</legend>
                        <select>
                            <option value="selecione">Selecione ...</option>
                            <option value="selecione">Feminino</option>
                            <option value="selecione">Masculino</option>
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
                        <input placeholder="Seu endereço" />
                    </fieldset>
                </Row>
                <Row>
                    <fieldset style={{ width: '135px', flex: 'none' }}>
                        <legend>Numero</legend>
                        <input placeholder="Numero" />
                    </fieldset>
                    <fieldset style={{ width: '338px', flex: 'none' }}>
                        <legend>Complemento</legend>
                        <input placeholder="Apartamento, bloco, conjunto, referência" />
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
                <Row style={{flexDirection:'row-reverse'}}>                  
                    <BtnSalvar onClick={() => submit()}>Salvar e continuar</BtnSalvar>
                    <BtnVoltar>Voltar</BtnVoltar>
                </Row>
            </section>
        </div>
    );
}

export default Cadastro;