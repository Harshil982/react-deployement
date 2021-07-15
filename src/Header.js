import {Component, React} from 'react';
import './Header.css';

class Header extends Component
{
    render()
    {
        return(
            <>
                <div className="flex-content">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Help">Help</a>
                    <a href="#Contact">Contact</a>
                </div>
            </>
        )
    }
}
export default Header;