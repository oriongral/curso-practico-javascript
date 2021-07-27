const ladoCuadrado = 5;

console.group("Cuadrados");
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();


console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("los lados del triángulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm " );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm")

const baseTrianguloDividida = baseTriangulo/2;

let hipotenusaTriangulo = Math.pow(ladoTriangulo2, 2);
let basePitagoras = Math.pow(baseTrianguloDividida, 2);

const PrimerProcesoPitagoras = hipotenusaTriangulo - basePitagoras;

const ResultadoFinalPitagoras = Math.sqrt(PrimerProcesoPitagoras);

console.log("El altura del triángulo es de: " + ResultadoFinalPitagoras + "cm");

const areaTriangulo = (baseTriangulo * ResultadoFinalPitagoras)/2;
console.log("El área final del triángulo es de: " + areaTriangulo + "cm²");
console.groupEnd();


console.group("Círculos")
const pi = Math.PI;
const radioCirculo = 4;
console.log("Pi es equivalente a: " + pi);

console.log("El radio del círculo es de: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = diametroCirculo * pi;
console.log("El díametro del círculo es de: " + diametroCirculo + "cm");
console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm ");


const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo es de: " + areaCirculo + "cm²");
console.groupEnd();
