const index = document.querySelector('#index').innerHTML;
const paginaIndex = document.querySelector('main');


const functionIndex = Handlebars.compile(index);

productos.forEach(producto => {
    let templateIndex = functionIndex(producto);
    paginaIndex.innerHTML += templateIndex;
});


 let articuloSeleccionado = document.querySelector('.article-text')
 articuloSeleccionado.addEventListener('click', (e)=>{
    console.log(e.target.id)
 }) 


