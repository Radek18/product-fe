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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Číslo</label>

        <input type="number" defaultValue={partNo} required />
      </div>

      <div>
        <label>Název</label>

        <input type="text" defaultValue={name} required />
      </div>

      <div>
        <label>Popis</label>

        <input type="text" defaultValue={description} />
      </div>

      <div>
        <label>Cena</label>

        <input type="number" defaultValue={price} required />
      </div>

      <div>
        <label htmlFor="isForSale">Skladem</label>

        <input type="checkbox" id="isForSale" defaultChecked={isForSale} />
      </div>

      <button>{!product ? "Uložit" : "Upravit"}</button>
    </form>
  );
}

export default ProductForm;
