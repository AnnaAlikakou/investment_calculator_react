import headerImg from '../assets/blue-3d-calculators.png';
import './Header.css';

export default function Header() {
    return (
        <header>
            <img src={headerImg} alt="Main Header Image"></img>
            <h1>Investment Calculator</h1>
        </header>
    );
}