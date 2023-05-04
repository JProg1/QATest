export default function ItemCard({ name, price, imageUrl }) {
    return (
        <div className="item-card">
            <h3>{name}, £{price}</h3>
            <img src={imageUrl} alt={name} />
        </div>
    );
}