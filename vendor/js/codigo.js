const productos = [
    {
        "nombre": "Unbranded Cotton Shoes",
        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "precio": "15.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "4"
    },
    {
        "nombre": "Modern Frozen Chair",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "300.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "5"
    },
    {
        "nombre": "Oriental Rubber Car",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "80.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "6"
    },
    {
        "nombre": "Awesome Plastic Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "144.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "7"
    },
    {
        "nombre": "Recycled Metal Ball",
        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "precio": "800.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "8"
    },
    {
        "nombre": "Handcrafted Concrete Towels",
        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "precio": "605.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "9"
    },
    {
        "nombre": "Handmade Bronze Salad",
        "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "precio": "566.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "11"
    },
    {
        "nombre": "Bespoke Bronze Keyboard",
        "descripcion": "The Football Is Good For Training And Recreational Purposes",
        "precio": "587.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "12"
    },
    {
        "nombre": "Awesome Cotton Gloves",
        "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "precio": "391.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "13"
    },
    {
        "nombre": "Handmade Concrete Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "306.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "14"
    }
]

const index = document.querySelector('#index').innerHTML;
const paginaIndex = document.querySelector('main');

console.log(index)

const functionIndex = Handlebars.compile(index);

productos.forEach(producto => {
    let templateIndex = functionIndex(producto);
    paginaIndex.innerHTML += templateIndex;
});




