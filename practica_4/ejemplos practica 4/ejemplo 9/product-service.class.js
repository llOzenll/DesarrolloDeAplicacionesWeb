"use strict";

class ProductService {
    constructor(prodJSON) {
        this.http = new Http();
    }

    // Devuelve una promesa con los productos devueltos por el servido
    getAll() {
        return this.http.get(`${SERVER}/products`).then(resp => resp.products);
    }

    // Inserta el producto y devuelve una promesa con el producto insertado
    post(product) {
        return this.http.post(`${SERVER}/products`, product).then(resp => resp.product);
    }

    // Devuelve la promesa del método Http.ajax con su correspondiente llamada al servidor
    delete(idProduct) { 
        return this.http.delete(`${SERVER}/products/${idProduct}`);
    }
}
