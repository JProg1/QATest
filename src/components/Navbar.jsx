import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <h1>FLORISTS</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
            </ul>
        </nav>
    );
}