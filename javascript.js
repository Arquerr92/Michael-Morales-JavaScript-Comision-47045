// Captura la edad del usuario
let edad = prompt("Por favor, ingresa tu edad:")
edad = parseInt(edad)

// Verifica si el usuario es mayor de edad
if (edad >= 18) {
    alert("Bienvenido. Eres mayor de edad y puedes acceder al contenido restringido.")
    onsole.log("Eres Mayor de edad. Puedes acceder al contenido restringido.")
} else {
// Si el usuario es menor de edad, muestra un mensaje y redirige a una página restringida.
    alert("Lo siento, eres menor de edad y no puedes acceder al contenido restringido.")
    console.log("Eres menor de edad. Debes ser mayor de edad para acceder al contenido restringido")
    window.location.href = "/pages/restringido.html"
}

class BebidayComida{
    constructor(id, nombre, precio, imagen){
        //atributos
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.imagen = imagen
    }
    mostrarInfoBebidayComida(){
    console.log(`El Nombre es ${this.nombre} y su precio es ${this.precio}`)
    }
    exponerEnCatalogo(){
        console.log(this.id, this.nombre, this.precio)
    }
 }

 const bebida1 = new BebidayComida(1,"Cerveza Alien Verde Clara", 800, "alien-cerveza-1.webp")
 
 const bebida2 = new BebidayComida(2,"Cerveza Alien Verde oscura", 700, "alien-cerveza-2.webp")
 
 const bebida3 = new BebidayComida(3,"Cerveza Alien Amarilla",  900, "alien-cerveza-3.webp")

 const comida1 = new BebidayComida(4,"Lata de Pescado Alien", 1000, "comida-alien-1.webp")
 
 const comida2 = new BebidayComida(5,"Lata de Ojos de Alien", 1500, "comida-alien-2.webp")
 
 const comida3 = new BebidayComida(6,"Lata de organos de alien", 1700, "comida-alien-3.webp")

 // AGREGANDOLE  STORAGE Y JSON PARA QUE GUARDE LOS PRODUCTOS QUE SE AGREGUEN
 
 let estanteria = []
if (localStorage.getItem("estanteria")){
    console.log("Ya existe")
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
    console.log(estanteria)

}else {
    console.log ("Aviso de estanteria por primera vez")
    estanteria.push(bebida1,bebida2,bebida3,comida1,comida2,comida3)
    console.log(estanteria)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}



function mostrarCatalogo(array){
    
    console.log("Nuestro catálogo es: ")
    for(let BebidayComida of array){
        BebidayComida.exponerEnCatalogo()
        
    }
}

// DOM

let containerBebidayComida = document.getElementById("bebidayComida")

function mostrarCatalogoDOM(array){
    containerBebidayComida.innerHTML = ""
    for(let BebidayComida of array){
        
        let ProductoNuevoDiv= document.createElement("div")
        ProductoNuevoDiv.innerHTML = `
        <div id= "${BebidayComida.id}" class="product">
                <img src="/assets/img/${BebidayComida.imagen}" alt="bebida">
                <div class="product-txt">
                    <p>Nombre: ${BebidayComida.nombre}</p>
                    <p>Calidad 10/10</p>
                    <p class="precio">Precio: ${BebidayComida.precio}</p>
                    <a href="#" class="agregar-carrito btn-2" data-id="1"> Agregar al Carrito</a>
                </div>
            </div>
            `
containerBebidayComida.append(ProductoNuevoDiv)
    }
}
console.log(mostrarCatalogo)
mostrarCatalogoDOM(estanteria)


//EVENTOS 

function NoTocarAca(){
    alert(`Te dije que no Tocaras aca :c`)
    console.log(NoTocarAca)
}
function Envio(){
    alert("Te lo enviaremos a esa Direccion , Gracias.!")
    console.log (Envio)
}

// EVENTO Direccion
let botondireccion = document.getElementById("evento")
let inputdireccion = document.getElementById("direccion")

botondireccion.onclick = () => {Envio(inputdireccion.value)}

// EVENTO AGREGAR BEBIDA
let formBebidas = document.getElementById("formBebidas")
function agregarBebida(array){
    let nombre = document.getElementById("nombreInput")
    let precio = document.getElementById("precioInput")
    console.log(nombre)
    console.log(precio)

    //instanciarlo

    const nuevaBebida = new BebidayComida(array.length+1,nombre.value, parseInt(precio.value), "cerveza.jpg")
    console.log(nuevaBebida)
    array.push(nuevaBebida)      
    formBebidas.reset()  

    //STORAGE 
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}
let guardarBebidaBtn = document.getElementById("guardarBebidaBtn")

guardarBebidaBtn.addEventListener("click", () =>{
    agregarBebida(estanteria)
    mostrarCatalogoDOM(estanteria)
} )

// Storage y JSon

 const bebida1JSON = JSON.stringify(bebida1)
 const bebida2JSON = JSON.stringify(bebida2)
 const bebida3JSON = JSON.stringify(bebida3)
 const comida1JSON = JSON.stringify(comida1)
 const comida2JSON = JSON.stringify(comida2)
 const comida3JSON = JSON.stringify(comida3)

 localStorage.setItem("Cerveza Alien Verde Clara", bebida1JSON)
 localStorage.setItem("Cerveza Alien Verde oscura", bebida2JSON)
 localStorage.setItem("Cerveza Alien Amarilla", bebida3JSON)
 localStorage.setItem("Lata de Pescado Alien", comida1JSON)
 localStorage.setItem("Lata de Ojos de Alien", comida2JSON)
 localStorage.setItem("Lata de organos de alien", comida3JSON)

 bebida1.mostrarInfoBebidayComida()
 bebida2.mostrarInfoBebidayComida()
 bebida3.mostrarInfoBebidayComida()
 comida1.mostrarInfoBebidayComida()
 comida2.mostrarInfoBebidayComida()
 comida3.mostrarInfoBebidayComida()

