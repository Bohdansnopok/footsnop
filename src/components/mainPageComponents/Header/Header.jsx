import './Header.css';
import logo from '../../../images/logo.png'
import cart from '../../../images/cart.svg'

export function Header() {
    return (
        <header className="header">
            <div className="container flex">
                <div className="logo">
                    <img src={logo} alt=""/>
                    footsnop
                </div>

                <a href="#"><img src={cart} alt="" className="cart"/></a>
            </div>
        </header>
    );
}