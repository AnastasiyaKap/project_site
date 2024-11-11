import "./Footer.css";
import FormComponent from "./Form/FormComponent";

export default function FooterSection() {
  return (
    <div className="footer">
      <div className="footer-information">
        <section>
          <h3>Information</h3>
          <ul className="list-information">
            <li>Documents</li>
            <li>Our Shops</li>
            <li>Vacancy</li>
          </ul>
        </section>
        <section>
          <h3>Customers</h3>
          <ul className="list-information">
            <li>FAQ</li>
            <li>Orders and Delivery</li>
            <li>Return Items</li>
          </ul>
        </section>
        <section>
          <h3>Contacts</h3>
          <ul className="list-information">
            <li>Our Contacts</li>
            <li>Marketing Department</li>
            <li>Suggest items</li>
          </ul>
        </section>
      </div>
      <div className="footer-form">
        <FormComponent></FormComponent>
      </div>
    </div>
  );
}
