import itemsData from '../itemsData.json';
import ItemCard from '../components/ItemCard';

function StorePage() {
    return (
        <div className="storePage">
            <h2>Store Page</h2>
            <p>Lorem</p>
            <div className="items-grid">
                {itemsData.map((item) => (
                    <ItemCard
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}></ItemCard>
                ))}
            </div>
        </div>
    );
}
export default StorePage;