// const precioOriginal = 120;
// const descuento = 18;
// //  luego creamos otras dos constantes el 
// //  porcentaje del precio que debemos Pagar
// //  restandole el porcentaje del descuento. 

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });


//Ahora convertimos nuestras variables a una funcion.

// const precioOriginal = 120;
// const descuento = 18;

//el precio que se coloca en el parametro de la funcionva a reemplazar a la const precioOriginal y al const descuento. 
// Como cualquier funcion tenemos que retornar algun valor.
// en este caso sería precioConDescuento.

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}
