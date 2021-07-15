//Defino los productos con sus valores y descuentos
function producto (tipo, valor, descuento) {
    console.log(tipo + valor + descuento);
}

producto("Camiseta ", "$7500 ", "Beneficio Socios 10%");
producto("Short ", "$4000 ", "Beneficio Socios 10%");
producto("Medias ", "$1500 ", "Beneficio Socios 10%");

//Calculo el descuento total (10%) para cada producto por ser socios del club

//Defino la variable global 0
let resultado = 0;

//Descuento total Camiseta
function beneficioCamiseta(valor, porcentaje) {
    resultado = valor * porcentaje;
}

function mostrar(beneficio) {
    console.log(beneficio);
}

beneficioCamiseta(7500, 0.1);
mostrar("Descuento Socios Camiseta " + "$" + resultado);

//Descuento total Short
function beneficioShort(valor, porcentaje) {
    resultado = valor * porcentaje;
}

beneficioShort(4000, 0.1);
mostrar("Descuento Socios Short " + "$" + resultado);

//Descuento total Medias
function beneficioMedias(valor, porcentaje) {
    resultado = valor * porcentaje;
}

beneficioMedias(1500, 0.1)
mostrar("Descuento Socios Medias " + "$" + resultado);

//Ahora saco por prompt el logueo con número de socio y contraseña y paso a calcular el valor total aplicando el descuento para socios y lo muestro en alertas

//Camiseta personalizada

function personalizarCamiseta (numero, contraseña) {
    alert(numero + contraseña);
}

producto(prompt("Número de socio: "), prompt("Contraseña: "));

//Valor total socios Camiseta
function totalCamiseta (valor, descuento) {
    resultado = valor - descuento;
}

function mostrarPrecio (precioSocios) {
    alert(precioSocios);
}

totalCamiseta(7500, 750);
mostrarPrecio("Promo socios Camiseta titular: $" + resultado );

//Valor total socios Short
function totalShort (valor, descuento){
    resultado = valor - descuento;
}

totalShort(4000, 400);
mostrarPrecio("Promo socios Short titular: $" + resultado);

//Valor total socios Medias
function totalMedias (valor, descuento) {
    resultado = valor - descuento;
}

totalMedias(1500, 150);
mostrarPrecio("Promo socios Medias: $" + resultado);