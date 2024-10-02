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
  const [reloadData, setReloadData] = useState(0);

  const { partNo, name, description, price, isForSale } = product || {};

  useEffect(
    function () {
      async function getProduct() {
        const data = await getProductApi(id, keycloak.token);
        setProduct(data);
      }

      getProduct();
    },
    [id, keycloak.token, setProduct, reloadData],
  );

  return (
    <div className="mt-5 flex flex-col items-center gap-3">
      <p>č. {partNo}</p>

      <h3 className="text-xl font-bold">{name}</h3>

      <p>{description}</p>

      <h3 className="font-bold">
        {Math.round(price).toLocaleString("cs-CZ")} Kč
      </h3>

      <p className={`${isForSale ? "text-green-300" : "text-red-300"}`}>
        Skladem {isForSale ? "ANO" : "NE"}
      </p>

      <button
        className="mb-5 w-28 bg-blue-100 px-3 py-2 transition-all duration-300 hover:bg-blue-200"
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
          setReloadData={setReloadData}
        />
      )}
    </div>
  );
}

export default ProductDetail;
