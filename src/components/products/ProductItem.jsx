import { Link } from "react-router-dom";

function ProductItem({ product, handleDelete }) {
  const { id, name, price, isForSale } = product;

  return (
    <li>
      <h3>{name}</h3>

      <h3>{price}</h3>

      <p>Skladem {isForSale ? "ANO" : "NE"}</p>

      <div>
        <Link to={String(id)}>
          <button>Podrobnosti</button>
        </Link>

        <button onClick={() => handleDelete(id)}>Odstranit</button>
      </div>
    </li>
  );
}

export default ProductItem;
