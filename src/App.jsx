import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSection from "./components/Header/HeaderSection";
import MainSection from "./components/MainSection/MainSection";
import BrandsSection from "./components/Header/Brands/BrandsSection";
import "./styles.css";

const Catalog = () => <h1>Catalog</h1>;
// const Brands = () => <h1>Brands</h1>;
const Shops = () => <h1>Shops</h1>;
const Cosmetics = () => <h1>Cosmetics</h1>;
const Perfume = () => <h1>Perfume</h1>;
const Care = () => <h1>Care</h1>;
const Shopping = () => <h1>Shopping Bag</h1>;
const Search = () => <h1>Search</h1>;

export default function App() {
  return (
    <>
      <Router>
        <HeaderSection />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <FooterSection />
              </>
            }
          ></Route>
          <Route
            path="catalog"
            element={
              <>
                <Catalog />
                <FooterSection />
              </>
            }
          />
          <Route
            path="brands"
            element={
              <>
                <BrandsSection />
                <FooterSection />
              </>
            }
          />
          <Route
            path="shops"
            element={
              <>
                <Shops />
                <FooterSection />
              </>
            }
          />
          <Route
            path="cosmetics"
            element={
              <>
                <Cosmetics />
                <FooterSection />
              </>
            }
          />
          <Route
            path="perfume"
            element={
              <>
                <Perfume />
                <FooterSection />
              </>
            }
          />
          <Route
            path="care"
            element={
              <>
                <Care />
                <FooterSection />
              </>
            }
          />
          <Route
            path="Search"
            element={
              <>
                <Search />
                <FooterSection />
              </>
            }
          />
          <Route
            path="shopping-bag"
            element={
              <>
                <Shopping />
                <FooterSection />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
