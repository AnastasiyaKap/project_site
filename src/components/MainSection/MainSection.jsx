import "./MainSection.css";
import { items, lipsticks } from "./items";

export default function MainSection() {
  return (
    <>
      <div className="image-section">
        <img src={require("./pictures/image_5.jpg")} alt="picture1"></img>
        <img
          src={require("./pictures/image_2.jpg")}
          id="picture2"
          alt="picture2"
        ></img>
      </div>
      <div className="items-section">
        <div className="items-section-label">
          <h2>Daily Routine</h2>
          <h3>Essential daily skin care</h3>
        </div>
        <div className="item-section">
          {items.map((item) => (
            <>
              <div className="product-cards">
                <img key={item.id} src={require(`${item.image}`)}></img>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="cosmetics-section">
        <img src={require("./pictures/models.jpg")} alt="picture1"></img>
        <img
          src={require("./pictures/swatch.jpg")}
          alt="picture2"
          id="swatch"
        ></img>
      </div>
      <div className="lips-section">
        <div className="lips-section-label">
          <h2>Dream Lipsticks</h2>
          <h3>Lips will always be well-groomed and expressive</h3>
        </div>
        <div className="lip-section">
          {lipsticks.map((lipstick) => (
            <>
              <div className="product-cards">
                <img key={lipstick.id} src={require(`${lipstick.image}`)}></img>
                <p>{lipstick.title}</p>
                <p>{lipstick.price}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
