// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];
//Calcular el promedio, la media aritmética de esta variable constante lista 1.

//Lo primero que necesitamos es sumar todos los elementos de esa lista, para esto vamos a utilizar un ciclo for.
// Utilizaremos una varible con let, para que podamos cambiaral en el futuro, especificamente en nuestro ciclo for.
// En esta variable let, guardaremos la suma de los elementos de la variable lista1.
// Luego comenzamos creando nuestro ciclo for.

// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// }

//La segunda parte que es dividirlo entre la cantidad de elementos que hay en nuestra lista

// const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }