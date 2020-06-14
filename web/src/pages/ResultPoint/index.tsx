import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiMail, FiGrid } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'


import './styles.css';
import logo from '../../assets/logoRenova.png';
import frameImg from '../../assets/frame-img.png';
import frameItem from '../../assets/frame-item.png';

const ResultPoint = () => {

    return (

        <div id="page-result-point">

            <div id="navLine"/>

            <div id="figure"></div>

            <header>
                <img src={logo} alt="Renova"/>

                <Link to ="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form>

                <h1>Resultados <br/> da busca</h1>

                <fieldset>
                    <div className="items">
                        <div> <img src={frameImg} alt="Imagem do ponto"/> </div>
                        <div className="info">
                            <h2>Lugar Um</h2>
                            <p><FaWhatsapp/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XX XXXXXXXXX</p>
                            <p><FiMail />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contato@lugar2.com.br</p>
                            <p><FiMapPin />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cidade, UF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>ver no mapa</strong></p>
                        </div>
                        <div>
                            <p><FiGrid />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ítens</p>
                            <div className="items-coleta">
                            <img src={frameItem} alt="Item"/>
                            <img src={frameItem} alt="Item"/>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <Link to="/search">
                    <button type="submit">
                        Nova busca
                    </button>
                </Link>
            </form>

        </div>

    );

};

export default ResultPoint;