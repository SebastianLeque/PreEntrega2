let carrito = []
validar = true

function Producto(nombre, costo, cantidad){
    this.nombre = nombre
    this.costo = costo
    this.cantidad = cantidad
    this.subtotal = this.cantidad * this.costo
}

function crearProducto(){
    let nombre = prompt("Ingrese el nombre del producto")
    let costo = parseInt(prompt("ingrese el costo del producto"))
    let cantidad = parseInt(prompt("ingrese la cantidad de productos que desea"))

    let productoNuevo = new Producto(nombre, costo, cantidad)
    return productoNuevo 
}

do{
function TOTAL(){ 
let total = 0
for (i = 0; i < carrito.length; i++){
    total = total + carrito[i].subtotal
}
return total
}


carrito.push(crearProducto())

let pregunta = prompt("agregar otro producto? si/no")
if (pregunta == "si"){
    validar =true
} else { validar =false}

} while (validar == true)


console.log(carrito)

console.log("total carrito: " + TOTAL())
alert("El total de todo el carrito es de " + TOTAL())


