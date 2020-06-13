import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoRenova.png';

const SearchPoint = () => {
    return (
    <div id="page-search-point">

        <header>
            <img src={logo} alt="Ecoleta" />

            <Link to ="/">
                <FiArrowLeft />
                Voltar para home
            </Link>
        </header>

        <form>
                <h1>Buscar <br /> ponto de coleta</h1>

                <button type="submit">
                    Buscar
                </button>
            </form>

    </div>
    );
};

export default SearchPoint;