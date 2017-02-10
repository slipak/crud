import template from './product.component.html';
import controller from './product.controller';

const productComponent = {
    template,
    controller,
    bindings: {
        product: '<'
    }
};

export default productComponent;