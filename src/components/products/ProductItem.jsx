import { Link } from "react-router-dom";

function ProductItem({ product, handleDelete }) {
  const { id, name, price, isForSale } = product;

  return (
    <li className="h flex w-64 flex-col items-center justify-center gap-2 border-2 p-2">
      <h3 className="text-lg font-bold">{name}</h3>

      <h3>{Math.round(price).toLocaleString("cs-CZ")} Kč</h3>

      <p className={`${isForSale ? "text-green-300" : "text-red-300"}`}>
        Skladem {isForSale ? "ANO" : "NE"}
      </p>

      <div className="flex gap-2">
        <Link to={String(id)}>
          <button className="w-28 bg-blue-100 px-3 py-2 transition-all duration-300 hover:bg-blue-200">
            Podrobnosti
          </button>
        </Link>

        <button
          className="w-28 bg-red-100 px-3 py-2 transition-all duration-300 hover:bg-red-200"
          onClick={() => handleDelete(id)}
        >
          Odstranit
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
