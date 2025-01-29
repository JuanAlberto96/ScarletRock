const productos = [
    {
        id: "abrigo-01",
        titulo: "Plumas azúl marino",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos01"
        },
        precio: 149.99
    },
    {
        id: "abrigo-02",
        titulo: "Chaqueta informal",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos02"
        },
        precio: 119.99
    },
    {
        id: "abrigo-03",
        titulo: "Plumas acolchado gris",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos03"
        },
        precio: 99.99
    },
    {
        id: "abrigo-04",
        titulo: "Plumas acolchado negro",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos04"
        },
        precio: 84.99
    },
    {
        id: "abrigo-05",
        titulo: "Chaqueta deportiva gris",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos05"
        },
        precio: 52.99
    },
    {
        id: "camiseta-01",
        titulo: "Camiseta azúl marino",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas01"
        },
        precio: 12.99
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta blanca y rosa",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas02"
        },
        precio: 9.99
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta blanca palmera",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas03"
        },
        precio: 14.95
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta granate",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas04"
        },
        precio: 16.99
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta gris",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas05"
        },
        precio: 8.99
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta roja",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas06"
        },
        precio: 14.99
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta verde",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas07"
        },
        precio: 11.50
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta azúl",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas08"
        },
        precio: 12.99
    },
    {
        id: "pantalon-01",
        titulo: "Pantalón veis",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones01"
        },
        precio: 30.99
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón blanco",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones02"
        },
        precio: 25.90
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón negro",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones03"
        },
        precio: 27.98
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón azúl marino",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones04"
        },
        precio: 30.50
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón gris",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones05"
        },
        precio: 19.99
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
function inicializarProductos(){
    productos = [
        
        {
            id: "abrigo-01",
            titulo: "Plumas azúl marino",
            imagen: "./img/abrigos/01.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos01"
            },
            precio: 149.99
        },
        {
            id: "abrigo-02",
            titulo: "Chaqueta informal",
            imagen: "./img/abrigos/02.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos02"
            },
            precio: 119.99
        },
        {
            id: "abrigo-03",
            titulo: "Plumas acolchado gris",
            imagen: "./img/abrigos/03.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos03"
            },
            precio: 99.99
        },
        {
            id: "abrigo-04",
            titulo: "Plumas acolchado negro",
            imagen: "./img/abrigos/04.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos04"
            },
            precio: 84.99
        },
        {
            id: "abrigo-05",
            titulo: "Chaqueta deportiva gris",
            imagen: "./img/abrigos/05.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos05"
            },
            precio: 52.99
        },
        {
            id: "camiseta-01",
            titulo: "Camiseta azúl marino",
            imagen: "./img/camisetas/01.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas01"
            },
            precio: 12.99
        },
        {
            id: "camiseta-02",
            titulo: "Camiseta blanca y rosa",
            imagen: "./img/camisetas/02.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas02"
            },
            precio: 9.99
        },
        {
            id: "camiseta-03",
            titulo: "Camiseta blanca palmera",
            imagen: "./img/camisetas/03.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas03"
            },
            precio: 14.95
        },
        {
            id: "camiseta-04",
            titulo: "Camiseta granate",
            imagen: "./img/camisetas/04.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas04"
            },
            precio: 16.99
        },
        {
            id: "camiseta-05",
            titulo: "Camiseta gris",
            imagen: "./img/camisetas/05.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas05"
            },
            precio: 8.99
        },
        {
            id: "camiseta-06",
            titulo: "Camiseta roja",
            imagen: "./img/camisetas/06.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas06"
            },
            precio: 14.99
        },
        {
            id: "camiseta-07",
            titulo: "Camiseta verde",
            imagen: "./img/camisetas/07.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas07"
            },
            precio: 11.50
        },
        {
            id: "camiseta-08",
            titulo: "Camiseta azúl",
            imagen: "./img/camisetas/08.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas08"
            },
            precio: 12.99
        },
        {
            id: "pantalon-01",
            titulo: "Pantalón veis",
            imagen: "./img/pantalones/01.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones01"
            },
            precio: 30.99
        },
        {
            id: "pantalon-02",
            titulo: "Pantalón blanco",
            imagen: "./img/pantalones/02.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones02"
            },
            precio: 25.90
        },
        {
            id: "pantalon-03",
            titulo: "Pantalón negro",
            imagen: "./img/pantalones/03.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones03"
            },
            precio: 27.98
        },
        {
            id: "pantalon-04",
            titulo: "Pantalón azúl marino",
            imagen: "./img/pantalones/04.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones04"
            },
            precio: 30.50
        },
        {
            id: "pantalon-05",
            titulo: "Pantalón gris",
            imagen: "./img/pantalones/05.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones05"
            },
            precio: 19.99
        }
    ];
}

function filtrarProductos(categoria){
    const seleccion = [];
    productos.forEach(producto => {
        if (producto.categoria.nombre === categoria)
            seleccion.push(producto);

    });

    return seleccion;

}

console.log("Producto actual:");

function cargarProductosCarrito() {
    console.log("Producto actual:");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedorCarrito = document.querySelector("#contenedor-carrito");
    const totalElement = document.querySelector("#total-importe");
    let total = 0;
    
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        carrito.forEach((producto, index) => {
        
            const productoInfo = productos.find(p => p.id === producto.id);
            
            
            const div = document.createElement("div");
            div.classList.add("producto-carrito");
            div.innerHTML = `
                <img src="${productoInfo.imagen}" alt="${productoInfo.titulo}" class="producto-imagen">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${productoInfo.titulo}</h3>
                    <p class="producto-precio">€${productoInfo.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="eliminar-producto" data-index="${index}">Eliminar</button>
                </div>
            `;
            contenedorCarrito.append(div);
             total += productoInfo.precio * producto.cantidad;
        
             
        });

        totalElement.textContent = total.toFixed(2);

        const botonesEliminar = document.querySelectorAll(".eliminar-producto");
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", function() {
                const index = this.getAttribute("data-index");
                eliminarProductoCarrito(index);
            });
        });
    }
}

if (window.location.pathname.includes("carrito.html")) {
    document.querySelector("#pago-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const direccion = document.querySelector("#direccion").value;
        const tarjeta = document.querySelector("#tarjeta").value;
        const totalElement = document.querySelector("#total-importe");

        if (!nombre || !direccion || !tarjeta) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("Pago realizado con éxito. ¡Gracias por tu compra!");
        generarFacturaPDF(nombre, direccion);
        localStorage.removeItem("carrito");
        cargarProductosCarrito();
        totalElement.textContent = "0";
        
    });
}

function generarFacturaPDF(nombre, direccion) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Factura de Compra", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Dirección: ${direccion}`, 20, 50);

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    let yPosition = 60;

    doc.text("Productos:", 20, yPosition);
    yPosition += 10;

    carrito.forEach(producto => {
        const productoInfo = productos.find(p => p.id === producto.id);
        const subtotal = productoInfo.precio * producto.cantidad;
        total += subtotal;

        doc.text(`${productoInfo.titulo} - €${productoInfo.precio} x ${producto.cantidad} = €${subtotal}`, 20, yPosition);
        yPosition += 10;
    });

    doc.text(`Total: €${total}`, 20, yPosition + 10);

    doc.save(`factura_${nombre.replace(" ", "_")}.pdf`);
}

function eliminarProductoCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad -= 1;
    } else {
        carrito.splice(index, 1);
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    cargarProductosCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
    cargarProductosCarrito();
    actualizarNumeritoCarrito();
});

function cargarProductos(seleccion) {
    console.log("Cargar productos", seleccion);
    if (seleccion === "todos")
        productosElegidos = productos;
    else if (seleccion === "abrigos")
        productosElegidos = filtrarProductos("Abrigos");
    else if (seleccion === "camisetas")
        productosElegidos = filtrarProductos("Camisetas");
    else if (seleccion === "pantalones")
        productosElegidos = filtrarProductos("Pantalones");
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">€${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);

        const botonAgregar = div.querySelector(".producto-agregar");
        botonAgregar.addEventListener("click", () => agregarAlCarrito(producto.id));
    });
}

function agregarAlCarrito(id) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    document.querySelector("#numerito").innerHTML = carrito.length;
}

function actualizarNumeritoCarrito() {
    const carrito = localStorage.getItem("carrito");
    const numerito = document.querySelector("#numerito");
    if (carrito) {
        numerito.innerHTML = carrito.split(",").length - 1;
    } else {
        numerito.innerHTML = 0;
    }
}

function limpiarCarrito() {
    localStorage.removeItem("carrito");
    actualizarNumeritoCarrito();
}

function actualizarNumeritoCarrito() {
    const carrito = localStorage.getItem("carrito");
    const numerito = document.querySelector("#numerito");
    
    if (!carrito || carrito === "") {
        numerito.innerHTML = 0;
    } else {
        numerito.innerHTML = carrito.split(",").length - 1;
    }
}

document.getElementById('limpiar-carrito').addEventListener('click', function() {
    localStorage.removeItem('carrito');
    
    document.getElementById('numerito').textContent = '0';
    
    window.location.reload();
});

cargarProductos("todos");
document.getElementById('todos').addEventListener('click', function (){cargarProductos("todos");});
document.getElementById('abrigos').addEventListener('click', function(){cargarProductos("abrigos");});
document.getElementById('camisetas').addEventListener('click', function(){cargarProductos("camisetas");});
document.getElementById('pantalones').addEventListener('click', function(){cargarProductos("pantalones");}); 

actualizarNumeritoCarrito();


