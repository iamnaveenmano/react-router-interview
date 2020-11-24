import './App.css';
import React, {useState, useEffect} from 'react';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
    )
    
        const items = await data.json();
        console.log(items);
        setItems(items);
    }
    return (
        <div>
            {items.map(item => (
            <h1 key={item.id}>
                {item.title}
            </h1>
            ))}
        </div>
    )
}

export default Shop;