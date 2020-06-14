import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logoRenova.png';
import three from '../../assets/figura-three.png';
import nav from '../../assets/nav-bg.png'; 

interface Item {
    id: number;
    title: string;
    image_url: string;
}

const SearchPoint = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);

    
    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);
        
        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems)
        } else {
            setSelectedItems([ ...selectedItems, id ]);
        }
    };

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const items = selectedItems;
        console.log('EBAAA DEU CERTO');
    }
    
    return (
    <div id="page-search-point">
        <div id="navLine">
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
            <button type="submit">Pesquisar</button>  
        </form>
        </div>
    </div>
    );
};

export default SearchPoint;