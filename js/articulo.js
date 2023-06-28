const paginaArticulo = document.querySelector('main');
const articulo = document.querySelector('#articulo').innerHTML;
const sumarAlCArrito = document.querySelector('add-to-cart');

const functionArticulo = Handlebars.compile(articulo);

productos.forEach(producto => {
    if(producto.id === sessionStorage.getItem('id')){
        let templateArticulo = functionArticulo(producto)
        paginaArticulo.innerHTML = templateArticulo
    }
}); 

