import { Link } from 'react-router-dom';
// Nav was build before we introduced bootstrap - and it works effectively for the job at hand so we are keeping our custom navbar.
export default function Navbar() {
    return (
        <nav>
            <h1>THE BEST FLORISTS IN THE WORLD</h1>
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