import home from './home/home.component';
import products from './products/products.component';
import product from './product/product.component';

const module = angular.module('app.components', []);

module.component('home', home);
module.component('products', products);
module.component('product', product);

export default module;