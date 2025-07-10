import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.scss";
import Container from "../../components/Container/Container";

interface Product {
  name: string;
  title: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${product.name}/dashboard`);
  };

  return (
    <div className={`product-card`} onClick={handleClick}>
      <img
        src={`/assets/${
          product.name === "firstaid" ? "cpr2.png" : "hygiene.jpg"
        }`}
        alt="product"
      />
      <h2 className="product-card__name">{product.title}</h2>
    </div>
  );
};

const ProductPage: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <Container type="wide">
      <div className="product-page">
        <h2 className="product-page__heading">Pasirinkite savo mokymus</h2>
        <div className="product-page__products">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
