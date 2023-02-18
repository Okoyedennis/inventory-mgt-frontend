import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(`${BACKEND_URL}/api/products`, formData);
  return response.data;
};


// Get all Product
const getProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/products`, );
  return response.data;
};

// Delete a Product
const deleteProducts = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/api/products/${id}`, );
  return response.data;
};

// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/api/products/${id}`, );
  return response.data;
};

// Update a Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${BACKEND_URL}/api/products/${id}`, formData);
  return response.data;
};

const productService = {
    createProduct,
    getProducts,
    deleteProducts,
    getProduct,
    updateProduct
};

export default productService;