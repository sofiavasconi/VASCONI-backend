class ProductManager {

    static idIncremento = 0;

    constructor () {
        this.products = [];
    }

    getProducts () {
        return this.products;
    }

    addProducts (title, description, price, thumbnail, code, stock) {
        ProductManager.idIncremento++;
        const codigo = this.products.find(cod => cod.code === code);
        
        const nuevoProducto = {
            id: ProductManager.idIncremento,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
        }

        if(codigo) {
            console.log ("Esta codigo ya existe");
            return;
        }

        return this.products.push(nuevoProducto);
    }

    getProductsById (idProductos) {
        const encontrarProductos = this.products.findIndex(encontrar => encontrar.id === idProductos);
        if(encontrarProductos < 0) {
            console.error ("Not Found");
            return;
        }
        const productoEncontrado = this.products[encontrarProductos];
        return productoEncontrado;
    };
};

