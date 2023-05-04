import { Card } from "react-bootstrap";

export default function ItemCard({ name, price, imageUrl }) {
    return (
        <div className="item-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                £{price}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}