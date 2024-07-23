import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api' // Ensure this URL is correct
});

export const fetchProducts = () => api.get('/products');
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const fetchCart = (userId) => api.get(`/cart/${userId}`);
export const addToCart = (userId, productId, quantity) => api.post('/cart/add', { userId, productId, quantity });

export default api;
