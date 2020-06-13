import React from 'react';
import { FiEdit, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logoRenova.png';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>
                
                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos as pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link className="addBtn" to="/create-point">
                        <span>
                        <FiEdit />
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>

                    <Link to="/search-point">
                        <span>
                        <FiSearch />
                        </span>
                        <strong>Realize uma busca por materiais</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;