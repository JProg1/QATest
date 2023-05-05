import ItemCard from '../components/ItemCard';
import { useEffect, useState } from 'react';
export default function StorePage() {
    const [itemsData, setItemsData] = useState([]);
    function setData(data){
        setItemsData(data);
    }
    useEffect(() => {
        fetch('https://seed-theory-api.netlify.app/data.json')
        .then((response) => response.json())
        .then((data) => setData(data));
    });
    return (
        <div className="storePage">
            <h2>Store Page</h2>
            <p>Item Collection - Please see our wonderful plants.</p>
            <div className="items-grid">
                {itemsData.map((item) => (
                    <ItemCard id={item.id}
                        imageUrl={item.imageUrl}
                        name={item.name}
                        price={item.price} />
                ))}
            </div>
        </div>
    );
}