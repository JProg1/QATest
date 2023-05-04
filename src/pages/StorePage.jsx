import itemsData from '../itemsData.json';
import { Card } from 'react-bootstrap';
function StorePage() {
    return (
        <div className="storePage">
            <h2>Store Page</h2>
            <p>Item Collection - Please see our wonderful plants.</p>
            <div className="items-grid">
                {itemsData.map((item) => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        £{item.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default StorePage;