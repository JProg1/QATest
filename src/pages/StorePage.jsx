import itemsData from '../itemsData.json';
import ItemCard from '../components/ItemCard';

function StorePage() {
    return (
        <div className="storePage">
            <h2>Store Page</h2>
            <p>Item Collection - Please see our wonderful plants.</p>
            <div className="items-grid">
                {itemsData.map((item) => (
                    <ItemCard
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    );
}
export default StorePage;