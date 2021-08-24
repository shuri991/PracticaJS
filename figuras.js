// Este es el código del cuadrado.
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
     return lado * 4;
} 
perimetroCuadrado()

function areaCuadrado(lado) {
 return lado * lado;
}
areaCuadrado()

console.groupEnd();




// Este es el código del triángulo. 
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
// "Los lados del triángulo miden: "
// + ladoTriangulo1
// + "cm, "
// + ladoTriangulo2
// + "cm, " 
// + baseTriangulo 
// + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
      return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
} 



// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();




// Este es el código del círculo. 
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio){
 const diametro = diametroCirculo(radio);
 return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
  return (radio * radio) * PI;  
}
// // const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;


   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
 
 
    const area = areaCuadrado(value);
    alert(`${area} cm^2`);
}

function calcularPerimetroTriangulo(){
    const lado1 =Number(document.getElementById("InputLado1").value),
          lado2 =Number(document.getElementById("InputLado2").value),
          base =Number(document.getElementById("InputBase").value),
          perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
 }

function calcularAreaTriangulo(){
    const base = Number(document.getElementById("InputBase").value),
          altura = Number(document.getElementById("InputAltura").value),
          area = areaTriangulo(base, altura);
          
    alert(`${area} cm^2`);      
}



function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
 
 
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
 }
 
 function calcularAreaCirculo(){
     const input = document.getElementById("InputCirculo");
     const value = input.value;
  
  
     const area = areaCirculo(value);
     alert(area);
 }