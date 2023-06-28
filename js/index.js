const index = document.querySelector('#index').innerHTML;
const paginaIndex = document.querySelector('main');


//Genero todas las cards

const functionIndex = Handlebars.compile(index);

productos.forEach(producto => {
    let templateIndex = functionIndex(producto);
    paginaIndex.innerHTML += templateIndex;
});


//Capturo el id del articulo seleccionado

const links = document.querySelectorAll('.link-articulo');

for(let link of links){
    link.addEventListener('click', (e)=>{
        let idArticulo = (e.target.firstChild.ownerDocument.activeElement.id)
        guardarArticuloSeleccionado(idArticulo)
     })     
}


//Guardo datos del articulo Seleccionado

const guardarArticuloSeleccionado = (idArticulo) => {
    productos.forEach(producto => {
        if(idArticulo === producto.id){
            sessionStorage.setItem('id',producto.id)
        }
    });
}

 

