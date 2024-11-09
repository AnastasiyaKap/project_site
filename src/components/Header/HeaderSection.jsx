import "./Header.css";

export default function HeaderSection() {
  return (
    <div className="header-container">
      <div className="left-section">
        <ul className="left-ul">
          <li id="catalog">Catalog</li>
          <li id="brands">Brands</li>
          <li id="shops">Shops</li>
        </ul>
      </div>
      <div className="logo-image">
        <h1>COSMETIC</h1>
      </div>
      <div className="right-section">
        <ul className="right-ul">
          <li id="cosmetics">Cosmetics</li>
          <li id="perfume">Perfume</li>
          <li id="care">Carry</li>
        </ul>
      </div>
    </div>
  );
}
