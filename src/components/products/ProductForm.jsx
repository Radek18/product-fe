import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { createProduct, updateProduct } from "../../service/product-service";

function ProductForm({ product }) {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  const { id, partNo, name, description, price, isForSale } = product || {};

  async function handleSubmit(e) {
    const formProduct = {
      id: id,
      partNo: Number(e.target[0].value),
      name: e.target[1].value,
      description: e.target[2].value,
      price: Number(e.target[3].value),
      isForSale: e.target[4].checked,
    };

    if (!product) {
      e.preventDefault();
      await createProduct(formProduct, keycloak.token);
      navigate("/products");
    } else {
      await updateProduct(id, formProduct, keycloak.token);
    }
  }

  return (
    <div className="flex h-full items-center justify-center">
      <form className="flex w-56 flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Číslo</label>

          <input
            className="border-2 px-2 py-1 outline-none"
            type="number"
            defaultValue={partNo || ""}
            required
          />
        </div>

        <div className="flex flex-col">
          <label>Název</label>

          <input
            className="border-2 px-2 py-1 outline-none"
            type="text"
            defaultValue={name || ""}
            required
          />
        </div>

        <div className="flex flex-col">
          <label>Popis</label>

          <input
            className="border-2 px-2 py-1 outline-none"
            type="text"
            defaultValue={description || ""}
          />
        </div>

        <div className="flex flex-col">
          <label>Cena</label>

          <input
            className="border-2 px-2 py-1 outline-none"
            type="number"
            defaultValue={Math.round(price) || ""}
            required
          />
        </div>

        <div className="flex gap-3">
          <label htmlFor="isForSale">Skladem</label>

          <input
            type="checkbox"
            id="isForSale"
            defaultChecked={isForSale || false}
          />
        </div>

        <div className="mt-5 flex justify-center">
          <button className="w-28 bg-blue-100 px-3 py-2 transition-all duration-300 hover:bg-blue-200">
            {!product ? "Uložit" : "Upravit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
