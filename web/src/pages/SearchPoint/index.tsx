import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logoRenova.png';
import three from '../../assets/figura-three.png';

import ResultPoint from '../ResultPoint'

interface Item {
    id: number;
    title: string;
    image_url: string;
}

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

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const SearchPoint = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [locales, setSearchLocales] = useState<Locales[]>([]);    
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    const history = useHistory();

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);

            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        if (selectedUf === '0') {
            return;
        }

        axios
            .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome);

            setCities(cityNames);
            });
    }, [selectedUf]);

    useEffect(() => {
        axios
<<<<<<< HEAD
        .get<Locales[]>(`https://localhost:3333/points?city=${selectedCity}&uf=${selectedUf}&items=${selectedItems}`)
        .then(response => {
            setSearchLocales(response.data);
        });
    }, [setSelectedItems])
=======
        .get<Locales[]>(`http://localhost:3333/points?city=${selectedCity}&uf=${selectedUf}&items=${selectedItems}`)
        .then(response => {
            setSearchLocales(response.data);
        });
    }, [selectedItems])

>>>>>>> 88fab0b00c6522575a5138c51b030f0eaeb68f24
    
    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);
        
        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems)
        } else {
            setSelectedItems([ ...selectedItems, id ]);
        }
    };

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }
    
    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const uf = selectedUf;
        const city = selectedCity;
        const items = selectedItems;

        const data = {
            uf,
            city,
            items
        };
<<<<<<< HEAD
=======

        if(selectedItems && selectedUf && selectedCity) {
            localStorage.setItem('items', String(selectedItems));
            localStorage.setItem('uf', selectedUf);
            localStorage.setItem('city', selectedCity);
        }else {
            alert('Complete as informações para buscar!')
        }

        history.push('/results');

>>>>>>> 88fab0b00c6522575a5138c51b030f0eaeb68f24
    }

    return (

    <div id="page-search-point">
<<<<<<< HEAD
        <div id="navLine">
=======

        <div id="navLine"/>
>>>>>>> 88fab0b00c6522575a5138c51b030f0eaeb68f24
        <img id="three" src={three} alt="three"/>
        <header>                             
            <img src={logo} alt="Renova" />

            <Link to ="/">
                <FiArrowLeft />
                Voltar para home
            </Link>
        </header>
        
        <form onSubmit={handleSubmit}>
            <h1>Busque um <br/> ponto de coleta</h1>

            <fieldset>
                <legend>
                    <h2>Localidade</h2>
                    <span>Selecione uma localidade</span>
                </legend>

                <div className="field-group">
                    <div className="field">
                        <label htmlFor="uf">Estado (UF)</label>
                        <select
                            name="uf"
                            id="uf"
                            value={selectedUf}
                            onChange={handleSelectUf}
                        >
                            <option value="0">Selecione uma UF</option>
                            {ufs.map(uf => (
                                <option key={uf} value={uf}>{uf}</option>
                            ))}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="city">Cidade</label>
                        <select
                            name="city"
                            id="city"
                            value={selectedCity}
                            onChange={handleSelectCity}
                        >
                            <option value="0">Selecione uma cidade</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>
                    <h2>Ítens de coleta</h2>
                    <span>Selecione um ou mais itens abaixo</span>
                </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                            <li key={item.id}
                                onClick={() => handleSelectItem(item.id)}
                                className={selectedItems.includes(item.id) ? 'selected' : ''}
                            >
                            
                            <img src={item.image_url} alt={item.title} />
                            <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>                                      
            </fieldset>

<<<<<<< HEAD
            {/* if(setSearchLocales === true ){
                //submit -> results 
            }else{
                //alert: selecione algum parametro
            } */}

            <button type="submit">
                <Link to="/results">Pequisar</Link>                
            </button>  
=======
                <button type="submit">
                    Buscar
                </button>
>>>>>>> 88fab0b00c6522575a5138c51b030f0eaeb68f24
        </form>
        </div>
    </div>
    );
};

export default SearchPoint;