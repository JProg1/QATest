import itemsData from '../itemsData.json';
import { Card, Button } from 'react-bootstrap';
// Utilising Bootstrap components instead of creating own components
// Included Card and Button components to build the store page.
export default function StorePage() {
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
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}