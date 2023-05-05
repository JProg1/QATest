import itemsData from '../itemsData.json';
import ItemCard from '../components/ItemCard';

export default function StorePage() {
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