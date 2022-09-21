import axios from 'axios'

const Products_Rest_url_getProducts = 'http://localhost:8080/api/product';

const Products_Rest_url_getProductImage = 'http://localhost:8080/api/product/image'

const Products_Rest_url_getProductsBySeller = 'http://localhost:8080/api/product/seller';

const Category_Rest_url_getcategory = 'http://localhost:8080/api/category';

const Products_Rest_url_getProductsByCategory = 'http://localhost:8080/api/product/category'

class ProductService {

    getProducts(){
        return axios.get(Products_Rest_url_getProducts);
    }
    getProductImage(img){
        return axios.get(Products_Rest_url_getProductImage + "/" + img);
    }
    getCategory(){
        return axios.get(Category_Rest_url_getcategory);
    }
    getCategoryById(cat_id){
        return axios.get(Category_Rest_url_getcategory + "/" + cat_id);
    }
    createProduct(product){
        return axios.post(Products_Rest_url_getProducts, product);
    }
    uploadProductImg(picture){
        return axios.post(Products_Rest_url_getProductImage,picture);
    }
    getProductById(product_id){
        return axios.get(Products_Rest_url_getProducts + "/" + product_id);
    }
    getProductBySeller(seller_id){
        return axios.get(Products_Rest_url_getProductsBySeller + "/" + seller_id);
    }
    getProductByCategory(cat_id){
        return axios.get(Products_Rest_url_getProductsByCategory + "/" + cat_id);
    }
    

}

export default new ProductService();