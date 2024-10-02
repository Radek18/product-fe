import { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import ProductItem from "./ProductItem";
import {
  deleteProduct,
  getAllProducts as getAllProductsApi,
} from "../../service/product-service";

function ProductList() {
  const { keycloak } = useKeycloak();
  const [products, setProducts] = useState([]);

  useEffect(
    function () {
      async function getAllProducts() {
        const data = await getAllProductsApi(keycloak.token);
        data.sort((a, b) => a.id - b.id);
        setProducts(data);
      }

      getAllProducts();
    },
    [keycloak.token],
  );

  async function handleDelete(id) {
    await deleteProduct(id, keycloak.token);
    setProducts((products) => products.filter((product) => product.id !== id));
  }

  return (
    <ul className="m-5 flex flex-wrap justify-center gap-3">
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ProductList;
