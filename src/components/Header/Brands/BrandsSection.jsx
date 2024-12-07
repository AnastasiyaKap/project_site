import { brands } from "./brands";

export default function BrandsSection() {
  const itemList = brands.map((brand) => <li key={brand.id}>{brand.name}</li>);
  return <ul>{itemList}</ul>;
}
