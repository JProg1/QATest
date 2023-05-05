import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
function ItemCard({ id, imageUrl, name, price}) {
    const [isCart, setCart] = useState(false);
    function removeFromCart(){
        setCart(false);
    }
    function addToCart(){
        setCart(true);
    }
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            £{price}
            </Card.Text>
            <Button variant="primary"
            onClick={isCart ? removeFromCart : addToCart}
            >{isCart ? 'In Cart' : 'Add to Cart'}</Button>
        </Card.Body>
        </Card>
    )
}
export default ItemCard;