//ALGORITMO CON UN CONDICIONAL

let edad = prompt ("Por favor, ingresa tu edad:")
edad = parseInt(edad)
if (edad >= 18) {
    alert("Bienvenido. Eres mayor de edad y puedes acceder al contenido restringido.")
    console.log("Eres Mayor de edad. Puedes acceder al contenido restringido.")
} else {
    alert("Lo siento, eres menor de edad y no puedes acceder al contenido restringido.")
    console.log("Eres menor de edad. Debes ser mayor de edad para acceder al contenido restringido")
    window.location.href = "/pages/restringido.html"
}

//SIMULADOR INTERACTIVO DE PEDIDOS DE COMIDA (FUNCTION + CICLO WHILE, FOR + IF , ELSE)
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

function mostrarProductos(categoria, productos) {
    let mensaje = `Catálogo de ${categoria}:\n`
    for (let i = 0; i < productos.length; i++) {
    mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`
    }
    alert(mensaje)
    console.log(mensaje)
}

function simularECommerceComida() {
    alert('¡Bienvenido a nuestro eCommerce de comida!')
    console.log('¡Bienvenido a nuestro eCommerce de comida!')
    let continuarComprando = true
    let totalCompra = 0

    while (continuarComprando) {
    const carrito = []

    while (true) {
        const opcionCategoria = parseInt(prompt('¿Qué te gustaría ordenar?\n1. Comida\n2. Bebida\n3. Finalizar compra\nElige una opción:'))
        console.log(`Opción elegida: ${opcionCategoria}`)

        if (opcionCategoria === 1) {
        mostrarProductos('Comida', productosComida)
        const opcionComida = parseInt(prompt('Elige un plato para agregar al carrito (ingresa 0 para volver):'))
        console.log(`Opción de comida elegida: ${opcionComida}`)

        if (opcionComida >= 1 && opcionComida <= productosComida.length) {
            carrito.push(productosComida[opcionComida - 1])
            alert(`${productosComida[opcionComida - 1].nombre} se ha agregado al carrito.`)
            console.log(`${productosComida[opcionComida - 1].nombre} se ha agregado al carrito.`)
        }
        } else if (opcionCategoria === 2) {
        mostrarProductos('Bebida', productosBebida)
        const opcionBebida = parseInt(prompt('Elige una bebida para agregar al carrito (ingresa 0 para volver):'))
        console.log(`Opción de bebida elegida: ${opcionBebida}`)

        if (opcionBebida >= 1 && opcionBebida <= productosBebida.length) {
            carrito.push(productosBebida[opcionBebida - 1])
            alert(`${productosBebida[opcionBebida - 1].nombre} se ha agregado al carrito.`)
            console.log(`${productosBebida[opcionBebida - 1].nombre} se ha agregado al carrito.`)
        }
        } else if (opcionCategoria === 3) {
            break;
        } else {
            alert('Opción inválida. Por favor, elige una opción válida.')
            console.log('Opción inválida. Por favor, elige una opción válida.')
        }
        }

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
        }

    alert(`El total de la compra es: $${totalCompra}`)
    console.log(`El total de la compra es: $${totalCompra}`)
    alert('¡Gracias por tu compra!')
    console.log('¡Gracias por tu compra!')
}

    simularECommerceComida()