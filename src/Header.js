import {Component, React} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component
{
    render()
    {
        return(
            <>
                <div className="flex-content">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Help</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </>
        )
    }
}
export default Header;