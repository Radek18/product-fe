import axios from "axios";
import { SERVER_URL } from "../constants";

const API_URL = "/api/products";

export async function createProduct(product, token) {
  await axios.post(`${SERVER_URL}${API_URL}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateProduct(id, product, token) {
  await axios.put(`${SERVER_URL}${API_URL}/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function partialUpdateProduct(id, product, token) {
  await axios.patch(`${SERVER_URL}${API_URL}/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getAllProducts(token) {
  const response = await axios.get(`${SERVER_URL}${API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getProduct(id, token) {
  const response = await axios.get(`${SERVER_URL}${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteProduct(id, token) {
  await axios.delete(`${SERVER_URL}${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
