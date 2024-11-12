import './Brands.css';
import adidas from '../../../images/adidas.png'
import puma from '../../../images/puma.png'
import nike from '../../../images/nike.png'

export function Brands() {
    return (
        <section className="brands flex">
            <img src={adidas} alt="" className="brand"/>
            <img src={puma} alt="" className="brand"/>
            <img src={nike} alt="" className="brand"/>
        </section>
    );
}