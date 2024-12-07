import "./Header.css";
import { Link } from "react-router-dom";

export default function HeaderSection() {
  return (
    <div className="header-container">
      <div className="left-section">
        <ul className="left-ul">
          <li id="catalog">
            <Link to="/catalog">Catalog</Link>
          </li>
          <li id="brands">
            <Link to="/brands">Brands</Link>
          </li>
          <li id="shops">
            <Link to="/shops">Shops</Link>
          </li>
        </ul>
      </div>
      <div className="logo-image">
        <Link to="/">
          <h1>COSMETIC</h1>
        </Link>
      </div>
      <div className="right-section">
        <ul className="right-ul">
          <li id="cosmetics">
            <Link to="/cosmetics">Cosmetics</Link>
          </li>
          <li id="perfume">
            <Link to="/perfume">Perfume</Link>
          </li>
          <li id="care">
            <Link to="/care">Care</Link>
          </li>
          <li id="search">
            <Link to="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Link>
          </li>
          <li id="shopping-bag">
            <Link to="/shopping-bag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
