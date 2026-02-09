import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
        <p>Created for educational reasons</p>
        <p>© {year}</p>
        </footer>
    );
}