import React, { useEffect, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiMail, FiGrid } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'
import { Map, TileLayer, Marker } from 'react-leaflet';

import axios from 'axios';


import './styles.css';
import logo from '../../assets/logoRenova.png';
import frameImg from '../../assets/frame-img.png';
import frameItem from '../../assets/frame-item.png';

interface ResultPointProps {
    searchURL: String;
};

interface Locales {
    id: number;
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
    city: string;
    uf: string;
}

async function handleSubmit(event: FormEvent) {
    event.preventDefault();
}

const ResultPoint = () => {

    const dataItems = localStorage.getItem('items');
    const dataUf = localStorage.getItem('uf');
    const dataCity = localStorage.getItem('city');

    const [locales, setSearchLocales] = useState<Locales[]>([]);

    const history = useHistory();



    useEffect(() => {
        axios.get<Locales[]>(`http://localhost:3333/points?city=${dataCity}&uf=${dataUf}&items=${dataItems}`).then(response => {
            const completeData = response.data;

            setSearchLocales(completeData);
        });

        if((dataItems && dataUf && dataCity)) {
            localStorage.removeItem('items');
            localStorage.removeItem('uf');
            localStorage.removeItem('city');
        } else {
            history.push('/search');
        };


    }, []);

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

                {locales.map(id => (
                    <fieldset>
                        <div id={String(id.id)} className="items">
                            <div className="imageLocal"> <img src={id.image} alt="Imagem do ponto"/> </div>
                            <div className="info">
                                <h2>{id.name}</h2>
                                <p><FaWhatsapp/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{id.whatsapp}</p>
                                <p><FiMail />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{id.email}</p>
                                <p><FiMapPin />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{id.city}, {id.uf} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                <p id={`ver${id.id}`}><strong>ver no mapa</strong></p>
                            </div>
                            <div>
                                <p><FiGrid />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ítens</p>
                                <div className="items-coleta">
                                <img src={frameItem} alt="Item"/>
                                <img src={frameItem} alt="Item"/>
                                </div>
                            </div>
                        </div>
                        <div className="mapItem" id={`map${id.id}`}>
                            <Map center={[Number(id.latitude),Number(id.longitude)]} zoom={15}>
                            <TileLayer 
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker position={[Number(id.latitude),Number(id.longitude)]} />

                            </Map>
                        </div>

                    </fieldset>
                ))}

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