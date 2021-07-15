import {Component, React} from 'react';
import logo from './logo512.png';
import './Logo.css';

class Logo extends Component
{
    state =
    {
        count : 0,
        name : "harshil"
    }
    buttonHover = () =>{
        console.log("Hover on button");
    }
    buttonLeave = () => {
        console.log("Leaved button");
    }
    increamentCount = () =>{
        let temp = this.state.count;
        this.setState({
            count : ++temp
        })
        console.log(this.state);
    }
    render()
    {
        return(
            <>
                <img src={logo} className="Anim" alt="logo" />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className="btn-started" onClick={this.increamentCount}>Get Started</button>
                <p style={{fontSize : "45px" , color : "red" , marginLeft : "30%" , backgroundColor : "gold"}}>Get started button clicked {this.state.count} times</p>
            </>
        )
    }
}
export default Logo;;