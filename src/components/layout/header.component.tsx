import { Link } from "react-router-dom";
import "./header.css";

/**
 * Header component
 * @author Manuel Zarraga
 * @returns {JSX.Element} JSX Component | Header
 */
const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <div>
          <h2>API Rick & Morty</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
