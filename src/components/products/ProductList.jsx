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
        setProducts(data);
      }

      getAllProducts();
    },
    [keycloak.token]
  );

  async function handleDelete(id) {
    await deleteProduct(id, keycloak.token);
    setProducts((products) => products.filter((product) => product.id !== id));
  }

  return (
    <ul>
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
