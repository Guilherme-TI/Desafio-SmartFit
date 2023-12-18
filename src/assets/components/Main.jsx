import React, { useState, useEffect } from "react";
import './Main.css'
import IconHour from '../img/icon-hour.png'
import RequiredMask from '../img/mascara-obrigatoria.png'
import RecommendedMask from '../img/mascara-recomendada.png'
import RequiredTowel from '../img/toalha-obrigatoria.png'
import RecommendedTowel from '../img/toalha-recomendada.png'
import PartialFountain from '../img/bebedouro-parcial.png'
import ForbiddenFountain from '../img/bebedouro-proibido.png'
import RequiredLockerrom from '../img/vestuario-obrigatorio.png'
import PartialLockerrom from '../img/vestuario-parcial.png'
import ForbiddeLockerrom from '../img/vestuario-proibido.png'

function Main() {
    const [horario, setHorario] = useState('');
    const [dadosDaApi, setDadosDaApi] = useState([]);

    const handleHorario = (event) => {
        setHorario(event.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados da API');
                }
                const data = await response.json();
                const firstThreeLocations = data.locations.slice(0, 3); // Pegando apenas as 3 primeiras informações
                setDadosDaApi(firstThreeLocations);
            } catch (error) {
                console.error('Erro:', error);
            }
        };
    
        fetchData();
    }, []);


    return(
        <div className="container">
            <div className="header">
                <h1>Reabertura <br /> Smart Fit</h1>
                <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
            </div>

            {/* Div do formulário de busca*/}

            <div className="horario">

                <div className="header-hour">
                    <img src={IconHour} alt="Icon" />
                    <span>Horário</span>
                </div>

                <div className="h2">
                    <h2>Qual período quer treinar?</h2>
                </div>

                    <form>

                        <div className="container-manha">
                            <div className="manha">
                                <input
                                type="radio"
                                name="horario"
                                id="manha"
                                value="manha"
                                checked={horario === 'manha'}
                                onChange={handleHorario}
                                />
                                <label htmlFor="manha">Manhã</label><br />
                            </div>

                            <div className="manhainfo">
                                <span>06:00 às 12:00</span>
                            </div>
                        </div>

                        <div className="container-tarde">
                            <div className="tarde">
                                <input
                                    type="radio"
                                    name="horario"
                                    id="tarde"
                                    value="tarde"
                                    checked={horario === 'tarde'}
                                    onChange={handleHorario}
                                />
                                <label htmlFor="tarde">Tarde</label><br />
                            </div>

                            <div className="manhainfo">
                                <span>06:00 às 12:00</span>
                            </div>
                        </div>

                        <div className="container-noite">
                            <div className="noite">
                                <input
                                    type="radio"
                                    name="horario"
                                    id="noite"
                                    value="noite"
                                    checked={horario === 'noite'}
                                    onChange={handleHorario}
                                />
                                <label htmlFor="noite">Noite</label><br />
                            </div>

                            <div className="manhainfo">
                                <span>06:00 às 12:00</span>
                            </div>
                        </div>

                        <div className="unidades">
                            <div className="unidadesFechadas">
                                <input
                                    type="checkbox"
                                    name="exibir"
                                    id="noite"
                                    value="noite"
                                />
                                <label htmlFor="noite">Exibir unidades fechadas</label><br />
                            </div>

                            <div className="unidadesEncontradas">
                                <span>Resultados encontrados:</span>
                            </div>
                        </div>
                        

                        <div className="botoes">
                            <div className="botao-encontrarUnidade">
                                <button>Encontrar Unidade</button>
                            </div>

                            <div className="botao-limpar">
                                <button>Limpar</button>
                            </div>
                        </div>

                    </form>
            </div>

            {/* Div de avisos */}

            <div className="aviso">

                <div className="card-aviso">
                    <span className="titulo-aviso">Máscara</span><br />
                    <div className="mascara">
                    
                        <div className="obrigatorio">
                            <img src={RequiredMask} /><br />
                            <span>Obrigatório</span>
                        </div>
                        <div className="recomendado">
                            <img src={RecommendedMask} /><br />
                            <span>Recomendado</span>
                        </div>
                    </div>
                </div>

                <div className="card-aviso">
                    <span className="titulo-aviso">Toalha</span><br />
                    <div className="toalha">
                        <div className="obrigatorio">
                            <img src={RequiredTowel} /><br />
                            <span>Obrigatório</span>
                        </div>
                        <div className="recomendado">
                            <img src={RecommendedTowel} /><br />
                            <span>Recomendado</span>
                        </div>
                    </div>
                </div>

                <div className="card-aviso">
                    <span className="titulo-aviso">Bebedouro</span><br />

                    <div className="bebedouro">
                        <div className="parcial">
                            <img src={PartialFountain} /><br />
                            <span>Parcial</span>
                        </div>
                        <div className="proibido">
                            <img src={ForbiddenFountain} /><br />
                            <span>Proibido</span>
                        </div>
                    </div>
                </div>

                <div className="card-aviso">
                    <span className="titulo-aviso">Vestiários</span><br />

                    <div className="vestiarios">
                        <div className="obrigatorio">
                            <img src={RequiredLockerrom} /><br />
                            <span>Liberado</span>
                        </div>
                        <div className="parcial">
                            <img src={PartialLockerrom} /><br />
                            <span>Parcial</span>
                        </div>
                        <div className="proibido">
                            <img src={ForbiddeLockerrom} /><br />
                            <span>Proibido</span>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Div do flexbox*/}

            <div className="flexbox">
                {dadosDaApi.map(academia => (
                    <div className="unidade" key={academia.id}>
                        <h2>{academia.title}</h2>
                        <p>{academia.content}</p>
                        {/* Mais detalhes da academia */}
                        {/* ... (detalhes da academia) */}
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Main
