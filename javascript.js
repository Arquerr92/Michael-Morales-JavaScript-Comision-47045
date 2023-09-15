// Captura la edad del usuario
let edad = prompt("Por favor, ingresa tu edad:")
edad = parseInt(edad)

// Verifica si el usuario es mayor de edad
if (edad >= 18) {
    alert("Bienvenido. Eres mayor de edad y puedes acceder al contenido restringido.")
    console.log("Eres Mayor de edad. Puedes acceder al contenido restringido.")
} else {
// Si el usuario es menor de edad, muestra un mensaje y redirige a una página restringida.
    alert("Lo siento, eres menor de edad y no puedes acceder al contenido restringido.")
    console.log("Eres menor de edad. Debes ser mayor de edad para acceder al contenido restringido")
    window.location.href = "/pages/restringido.html"
}

//SIMULADOR INTERACTIVO DE PEDIDOS DE COMIDA (FUNCIONES , OBJETOS, ARRAY, Y METODOS DE BUSQUEDA FILTRADO SOBRE EL ARRAY)
const productosComida = [
    { nombre: 'Pizza', precio: 10 },
    { nombre: 'Hamburguesa', precio: 8 },
    { nombre: 'Ensalada', precio: 6 },
]

const productosBebida = [
    { nombre: 'Agua', precio: 1 },
    { nombre: 'Refresco', precio: 2 },
    { nombre: 'Jugo', precio: 2.5 },
]

// Función para mostrar el catálogo de productos
function mostrarProductos(categoria, productos) {
    let mensaje = `Catálogo de ${categoria}:\n`
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`
    }
    alert(mensaje)
    console.log(mensaje)
}

// Función para ordenar productos de menor a mayor por precio
function ordenarPorPrecioMenor(productos) {
    const productosOrdenados = productos.slice().sort((a, b) => a.precio - b.precio)
    mostrarProductos('Productos ordenados de menor a mayor por precio', productosOrdenados)
}

// Función para ordenar productos de mayor a menor por precio
function ordenarPorPrecioMayor(productos) {
    const productosOrdenados = productos.slice().sort((a, b) => b.precio - a.precio)
    mostrarProductos('Productos ordenados de mayor a menor por precio', productosOrdenados)
}

// Función para buscar productos por nombre
function buscarPorNombre(productos, nombre) {
    nombre = nombre.toLowerCase().replace(/[^a-záéíóúüñ ]/g, '')
    return productos.filter(producto => producto.nombre.toLowerCase().includes(nombre))
}

// Función para buscar productos por precio
function buscarPorPrecio(productos, precio) {
    precio = parseFloat(precio) || 0
    return productos.filter(producto => producto.precio <= precio)
}

// Función principal del simulador
function simularECommerceComida() {
    alert('¡Bienvenido a nuestro eCommerce de comida!')
    console.log('¡Bienvenido a nuestro eCommerce de comida!')
    let continuarComprando = true
    let totalCompra = 0
    const carrito = []

    while (continuarComprando) {
        const opcionMenu = parseInt(prompt(
            'Menú:\n' +
            '1. Consultar catálogo:\n' +
            '2. Buscar por Nombre de Producto:\n' +
            '3. Buscar por precio:\n' +
            '4. Ordenar menor a mayor por precio:\n' +
            '5. Ordenar mayor a menor por precio:\n' +
            '6. Agregar al carrito:\n' +
            '7. Finalizar compra:\n' +
            '0. Salir del menú:\n' +
            'Elige una opción:'
        ))

        switch (opcionMenu) {
            case 1:
                const opcionCategoria = parseInt(prompt(
                    '¿Qué te gustaría consultar?\n' +
                    '1. Comida\n' +
                    '2. Bebida\n' +
                    'Elige una categoría:'
                ))
                if (opcionCategoria === 1) {
                    mostrarProductos('Comida', productosComida)
                } else if (opcionCategoria === 2) {
                    mostrarProductos('Bebida', productosBebida)
                } else {
                    alert('Opción inválida.')
                }
                break;

            case 2:
                const nombreProducto = prompt('Ingresa el nombre del producto a buscar:')
                const productosEncontrados = buscarPorNombre([...productosComida, ...productosBebida], nombreProducto)
                if (productosEncontrados.length > 0) {
                    mostrarProductos('Resultados de la búsqueda', productosEncontrados)
                } else {
                    alert('No se encontraron productos con ese nombre.')
                }
                break;

            case 3:
                const precioMaximo = parseFloat(prompt('Ingresa el precio máximo a buscar:'))
                const productosPorPrecio = buscarPorPrecio([...productosComida, ...productosBebida], precioMaximo)
                if (productosPorPrecio.length > 0) {
                    mostrarProductos('Resultados de la búsqueda por precio', productosPorPrecio)
                } else {
                    alert('No se encontraron productos dentro de ese rango de precio.')
                }
                break;

            case 4:
                ordenarPorPrecioMenor([...productosComida, ...productosBebida])
                break;

            case 5:
                ordenarPorPrecioMayor([...productosComida, ...productosBebida])
                break;

            case 6:
                const opcionAgregarCarrito = parseInt(prompt(
                    '¿Qué producto deseas agregar al carrito?\n' +
                    '1. Comida\n' +
                    '2. Bebida\n' +
                    'Elige una categoría:'
                ))

                if (opcionAgregarCarrito === 1) {
                    mostrarProductos('Comida', productosComida)
                } else if (opcionAgregarCarrito === 2) {
                    mostrarProductos('Bebida', productosBebida)
                } else {
                    alert('Opción inválida.')
                }

                const opcionProductoCarrito = parseInt(prompt('Ingresa el número del producto a agregar al carrito (0 para volver):'))
                if (opcionProductoCarrito >= 1 && opcionProductoCarrito <= productosComida.length) {
                    carrito.push(productosComida[opcionProductoCarrito - 1])
                    alert(`${productosComida[opcionProductoCarrito - 1].nombre} se ha agregado al carrito.`)
                    console.log(`${productosComida[opcionProductoCarrito - 1].nombre} se ha agregado al carrito.`)
                } else if (opcionProductoCarrito > productosComida.length && opcionProductoCarrito <= productosComida.length + productosBebida.length) {
                    const bebidaIndex = opcionProductoCarrito - productosComida.length - 1
                    carrito.push(productosBebida[bebidaIndex])
                    alert(`${productosBebida[bebidaIndex].nombre} se ha agregado al carrito.`)
                    console.log(`${productosBebida[bebidaIndex].nombre} se ha agregado al carrito.`)
                } else if (opcionProductoCarrito !== 0) {
                    alert('Opción inválida. Por favor, elige un producto válido o 0 para volver.')
                }
                break;

            case 7:
                let mensajeCarrito = 'Tu carrito de compras:\n'
                for (const producto of carrito) {
                    mensajeCarrito += `${producto.nombre} - $${producto.precio}\n`
                    totalCompra += producto.precio
                }

                alert(mensajeCarrito)
                console.log(mensajeCarrito)
                alert(`Total de la compra: $${totalCompra}`)
                console.log(`Total de la compra: $${totalCompra}`)

                const opcionContinuar = prompt('¿Deseas continuar comprando? (si/no):')
                continuarComprando = opcionContinuar.toLowerCase() === 'si'
                console.log(`Continuar comprando: ${continuarComprando}`)
                break;

            case 0:
                continuarComprando = false
                break;

            default:
                alert('Opción inválida. Por favor, elige una opción válida.')
                break;
        }
    }

    alert(`El total de la compra es: $${totalCompra}`)
    console.log(`El total de la compra es: $${totalCompra}`)
    alert('¡Gracias por tu compra!')
    console.log('¡Gracias por tu compra!')
}

// Inicia la simulación del eCommerce
simularECommerceComida()