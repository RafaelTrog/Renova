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
                    <img src={logo} alt="Renova"/>
                </header>
                
                <main>
                    <h1>Onde o fim é um começo.</h1>
                    <p>Ajudamos a busca por materiais recicláveis de forma simples e eficaz.</p>

                    <Link to="/create">
                        <span>
                        <FiEdit />
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>

                    <Link to="/search">
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