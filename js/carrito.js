const paginaCarrito = document.querySelector('main')
const carrito = document.querySelector('#carrito').innerHTML
const functionCarrito = Handlebars.compile(carrito)


const recuperarDelCarrito = () =>{
    let carritoDeArticulos = JSON.parse(localStorage.getItem('carritoDeArticulos'))
    return carritoDeArticulos;
}

function verificarSiYaExiste(carritoDeArticulos, producto){
    let repetido = false
    carritoDeArticulos.forEach(articulo => {
        if(articulo.id === producto.id){
            repetido = true
            return repetido
        }
    })
    return repetido
}

const guardarProducto = (carritoDeArticulos, producto) =>{
    carritoDeArticulos.push(producto)
    localStorage.setItem('carritoDeArticulos', JSON.stringify(carritoDeArticulos))
}

const agregarAlCarrito = () =>{
    const id = sessionStorage.getItem('id')    //Articulo seleccionado en el HTML Articulo
    sessionStorage.clear()
    productos.forEach(producto => {
        if(id === producto.id){
            if(!localStorage.getItem('carritoDeArticulos')){
                const carritoDeArticulos = []
                producto.cantidad = 1
                guardarProducto(carritoDeArticulos, producto)
            }
            else{
                console.log('paso por aca') 
                carritoDeArticulos = recuperarDelCarrito()
                if(verificarSiYaExiste(carritoDeArticulos, producto)){
                    alert('El producto ya está en el carrito. Seleccione la cantidad')
                }
                else{ 
                    producto.cantidad = 1
                    guardarProducto(carritoDeArticulos, producto)
                }
            }  
        }
    })
}

const mostrarProductos = () =>{
    paginaCarrito.textContent = ''
    const carritoDeArticulos = recuperarDelCarrito()
    carritoDeArticulos.forEach(articulo => {
        paginaCarrito.innerHTML += functionCarrito(articulo) 
    });
}


const buscarProducto = (carrito, id) =>{
    let producto = ''
    carrito.forEach(articulo => {
        if(articulo.id === id){
            producto = articulo
        }
    });
    return producto
}

const quitarProducto = (carritoDeArticulos, producto) => {
    const id = producto.id
    const elementoHTML = document.getElementById(id)

    carritoDeArticulos = carritoDeArticulos.filter(articulo => articulo != producto)
    elementoHTML.parentElement.remove()

    console.log(carritoDeArticulos)
    return carritoDeArticulos
}



agregarAlCarrito()
mostrarProductos()



const botones = document.querySelectorAll('.buttons')
botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const numero = boton.querySelector('.numero')
        const id = boton.id
        let carritoDeArticulos = recuperarDelCarrito()
        const producto = buscarProducto(carritoDeArticulos, id)
    /*  console.log(id)
        console.log(carritoDeArticulos)
        console.log(producto)
    */
        if(e.target.className === 'quitar'){
    //        console.log(e.target.className)
            if( producto.cantidad > 1){
                producto.cantidad--    
            }
            else{
                carritoDeArticulos = quitarProducto(carritoDeArticulos, producto)
                localStorage.setItem('carritoDeArticulos', JSON.stringify(carritoDeArticulos))
            }
        }
        else if(e.target.className === 'agregar'){
    //        console.log(e.target.className)
            producto.cantidad++
        }
        numero.textContent = producto.cantidad
        localStorage.setItem('carritoDeArticulos', JSON.stringify(carritoDeArticulos))
    })
})
    





  
