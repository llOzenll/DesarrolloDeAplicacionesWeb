"use strict";

class ProductService {
    constructor() {
        this.http = new Http();
    }

    // Devuelve una promesa con los productos devueltos por el servidor 
    async getAll() {
        const resp = await this.http.get(`${SERVER}/products`);
        return resp.products;
    }

    // Inserta el producto y devuelve una promesa con el producto insertado
    async post(product) {
        const resp = await this.http.post(`${SERVER}/products`, product)
        return resp.product;
    }

    // Devuelve la promesa del método Http.ajax con su correspondiente llamada al servidor
    delete(idProduct) { 
        return this.http.delete(`${SERVER}/products/${idProduct}`);
    }
}
