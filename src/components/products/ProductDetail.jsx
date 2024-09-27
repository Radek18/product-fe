import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import ProductForm from "./ProductForm";
import { getProduct as getProductApi } from "../../service/product-service";

function ProductDetail() {
  const { keycloak } = useKeycloak();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [activeProductForm, setActiveProductForm] = useState(false);

  const { partNo, name, description, price, isForSale } = product || {};

  useEffect(
    function () {
      async function getProduct() {
        const data = await getProductApi(id, keycloak.token);
        setProduct(data);
      }

      getProduct();
    },
    [id, keycloak.token, setProduct]
  );

  return (
    <div>
      <p>{partNo}</p>

      <h3>{name}</h3>

      <p>{description}</p>

      <h3>{price}</h3>

      <p>Skladem {isForSale ? "ANO" : "NE"}</p>

      <button
        onClick={() =>
          setActiveProductForm((activeProductForm) => !activeProductForm)
        }
      >
        {!activeProductForm ? "Upravit" : "Zrušit"}
      </button>

      {activeProductForm && (
        <ProductForm
          product={product}
          setActiveProductForm={setActiveProductForm}
        />
      )}
    </div>
  );
}

export default ProductDetail;
