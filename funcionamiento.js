// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos01"
        },
        precio: 149.99
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos02"
        },
        precio: 119.99
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos03"
        },
        precio: 99.99
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos04"
        },
        precio: 84.99
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos05"
        },
        precio: 52.99
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas01"
        },
        precio: 12.99
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas02"
        },
        precio: 9.99
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas03"
        },
        precio: 14.95
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas04"
        },
        precio: 16.99
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas05"
        },
        precio: 8.99
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas06"
        },
        precio: 14.99
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas07"
        },
        precio: 11.50
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas08"
        },
        precio: 12.99
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones01"
        },
        precio: 30.99
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones02"
        },
        precio: 25.90
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones03"
        },
        precio: 27.98
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones04"
        },
        precio: 30.50
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
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
        // Abrigos
        {
            id: "abrigo-01",
            titulo: "Abrigo 01",
            imagen: "./img/abrigos/01.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos01"
            },
            precio: 149.99
        },
        {
            id: "abrigo-02",
            titulo: "Abrigo 02",
            imagen: "./img/abrigos/02.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos02"
            },
            precio: 119.99
        },
        {
            id: "abrigo-03",
            titulo: "Abrigo 03",
            imagen: "./img/abrigos/03.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos03"
            },
            precio: 99.99
        },
        {
            id: "abrigo-04",
            titulo: "Abrigo 04",
            imagen: "./img/abrigos/04.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos04"
            },
            precio: 84.99
        },
        {
            id: "abrigo-05",
            titulo: "Abrigo 05",
            imagen: "./img/abrigos/05.jpg",
            categoria: {
                nombre: "Abrigos",
                id: "abrigos05"
            },
            precio: 52.99
        },
        // Camisetas
        {
            id: "camiseta-01",
            titulo: "Camiseta 01",
            imagen: "./img/camisetas/01.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas01"
            },
            precio: 12.99
        },
        {
            id: "camiseta-02",
            titulo: "Camiseta 02",
            imagen: "./img/camisetas/02.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas02"
            },
            precio: 9.99
        },
        {
            id: "camiseta-03",
            titulo: "Camiseta 03",
            imagen: "./img/camisetas/03.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas03"
            },
            precio: 14.95
        },
        {
            id: "camiseta-04",
            titulo: "Camiseta 04",
            imagen: "./img/camisetas/04.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas04"
            },
            precio: 16.99
        },
        {
            id: "camiseta-05",
            titulo: "Camiseta 05",
            imagen: "./img/camisetas/05.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas05"
            },
            precio: 8.99
        },
        {
            id: "camiseta-06",
            titulo: "Camiseta 06",
            imagen: "./img/camisetas/06.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas06"
            },
            precio: 14.99
        },
        {
            id: "camiseta-07",
            titulo: "Camiseta 07",
            imagen: "./img/camisetas/07.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas07"
            },
            precio: 11.50
        },
        {
            id: "camiseta-08",
            titulo: "Camiseta 08",
            imagen: "./img/camisetas/08.jpg",
            categoria: {
                nombre: "Camisetas",
                id: "camisetas08"
            },
            precio: 12.99
        },
        // Pantalones
        {
            id: "pantalon-01",
            titulo: "Pantalón 01",
            imagen: "./img/pantalones/01.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones01"
            },
            precio: 30.99
        },
        {
            id: "pantalon-02",
            titulo: "Pantalón 02",
            imagen: "./img/pantalones/02.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones02"
            },
            precio: 25.90
        },
        {
            id: "pantalon-03",
            titulo: "Pantalón 03",
            imagen: "./img/pantalones/03.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones03"
            },
            precio: 27.98
        },
        {
            id: "pantalon-04",
            titulo: "Pantalón 04",
            imagen: "./img/pantalones/04.jpg",
            categoria: {
                nombre: "Pantalones",
                id: "pantalones04"
            },
            precio: 30.50
        },
        {
            id: "pantalon-05",
            titulo: "Pantalón 05",
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

// Función para cargar los productos en el carrito
function cargarProductosCarrito() {
    console.log("Producto actual:");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedorCarrito = document.querySelector("#contenedor-carrito");
    const totalElement = document.querySelector("#total-importe");
    let total = 0;
    
    // Limpiar el contenedor de carrito antes de agregar los productos
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        carrito.forEach((producto, index) => {
            // Buscar el producto en la lista de productos
            const productoInfo = productos.find(p => p.id === producto.id);
            
            // Crear el HTML para cada producto en el carrito
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

        // Agregar evento a los botones de eliminar
        const botonesEliminar = document.querySelectorAll(".eliminar-producto");
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", function() {
                const index = this.getAttribute("data-index");
                eliminarProductoCarrito(index);
            });
        });
    }
}

// Verifica si estamos en la página de carrito
if (window.location.pathname.includes("carrito.html")) {
    // Si estamos en la página de carrito, agregar el evento al formulario de pago
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

        // Aquí puedes realizar la lógica de pago, por ejemplo, enviar los datos a un servidor
        alert("Pago realizado con éxito. ¡Gracias por tu compra!");
        generarFacturaPDF(nombre, direccion);
        // Limpiar el carrito después del pago
        localStorage.removeItem("carrito");
        cargarProductosCarrito(); // Actualizar el carrito para que se vea vacío
        totalElement.textContent = "0";
        
    });
}

function generarFacturaPDF(nombre, direccion) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título de la factura
    doc.setFontSize(18);
    doc.text("Factura de Compra", 20, 20);

    // Información del cliente
    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Dirección: ${direccion}`, 20, 50);

    // Detalles de los productos del carrito
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    let yPosition = 60;

    // Encabezado de los productos
    doc.text("Productos:", 20, yPosition);
    yPosition += 10;

    carrito.forEach(producto => {
        const productoInfo = productos.find(p => p.id === producto.id);
        const subtotal = productoInfo.precio * producto.cantidad;
        total += subtotal;

        doc.text(`${productoInfo.titulo} - €${productoInfo.precio} x ${producto.cantidad} = €${subtotal}`, 20, yPosition);
        yPosition += 10;
    });

    // Total
    doc.text(`Total: €${total}`, 20, yPosition + 10);

    // Descargar el PDF
    doc.save(`factura_${nombre.replace(" ", "_")}.pdf`);
}

// Función para eliminar un producto del carrito
function eliminarProductoCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Verificar si la cantidad de ese producto es mayor a 1
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad -= 1;  // Reducir la cantidad en 1
    } else {
        // Si la cantidad es 1, eliminar el producto completamente
        carrito.splice(index, 1);
    }
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    // Recargar el carrito para reflejar los cambios
    cargarProductosCarrito();
}

// Función para actualizar el numerito del carrito
function actualizarNumeritoCarrito() {
    const carrito = localStorage.getItem("carrito");
    const numerito = document.querySelector("#numerito");
    
    if (!carrito || carrito === "") {
        numerito.innerHTML = 0;
    } else {
        numerito.innerHTML = carrito.split(",").length - 1; // Restar 1 porque el último valor es una coma extra
    }
}

// Llamar a la función para cargar los productos del carrito cuando se cargue la página
document.addEventListener("DOMContentLoaded", () => {
    cargarProductosCarrito();
    actualizarNumeritoCarrito();
});


// Cargar todos los productos al inicio
// Función para cargar los productos
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

        // Añadir evento a cada botón "Agregar"
        const botonAgregar = div.querySelector(".producto-agregar");
        botonAgregar.addEventListener("click", () => agregarAlCarrito(producto.id));
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    // Obtener el carrito de localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no está en el carrito, agregarlo con cantidad 1
        carrito.push({ id: id, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar el número del carrito en la interfaz
    document.querySelector("#numerito").innerHTML = carrito.length;
}


// Función para actualizar el numerito en el carrito
function actualizarNumeritoCarrito() {
    const carrito = localStorage.getItem("carrito");
    const numerito = document.querySelector("#numerito");
    if (carrito) {
        numerito.innerHTML = carrito.split(",").length - 1; // Restar 1 porque el último valor es una coma extra
    } else {
        numerito.innerHTML = 0;
    }
}


// Función para limpiar el carrito
function limpiarCarrito() {
    // Eliminar el carrito de localStorage
    localStorage.removeItem("carrito");
    
    // Actualizar el numerito a 0
    actualizarNumeritoCarrito();
}

// Función para actualizar el numerito del carrito
function actualizarNumeritoCarrito() {
    const carrito = localStorage.getItem("carrito");
    const numerito = document.querySelector("#numerito");
    
    // Si el carrito está vacío o no existe, mostrar 0
    if (!carrito || carrito === "") {
        numerito.innerHTML = 0;
    } else {
        numerito.innerHTML = carrito.split(",").length - 1; // Restar 1 porque el último valor es una coma extra
    }
}

// Agregar el evento al botón de limpiar carrito
document.getElementById('limpiar-carrito').addEventListener('click', function() {
    // Limpiar el carrito en localStorage
    localStorage.removeItem('carrito');
    
    // Actualizar el numerito del carrito a 0
    document.getElementById('numerito').textContent = '0';
    
    // Recargar la página para reflejar el carrito vacío
    window.location.reload();
});


// Cargar productos al inicio
cargarProductos("todos");
document.getElementById('todos').addEventListener('click', function (){cargarProductos("todos");});
document.getElementById('abrigos').addEventListener('click', function(){cargarProductos("abrigos");});
document.getElementById('camisetas').addEventListener('click', function(){cargarProductos("camisetas");});
document.getElementById('pantalones').addEventListener('click', function(){cargarProductos("pantalones");}); 

// Actualizar el numerito al cargar la página
actualizarNumeritoCarrito();


