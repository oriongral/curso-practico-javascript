console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;    
}

console.groupEnd();


console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;    
} 

function altura(base, lado2){
    baseDividida = base/2;
    hipotenusa = Math.pow(lado2, 2);
    basePitagoras = Math.pow(baseDividida, 2);
    primerProcesoPitagoras = hipotenusa - basePitagoras;
    return Math.sqrt(primerProcesoPitagoras);    
}

function areaTriangulo(base, lado2){
    return (base * altura(base, lado2))/2;
}

console.groupEnd();

console.group("Círculos")

function diametroCirculo(radio){
    return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio){
    diametro = diametroCirculo(radio);   
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}

console.groupEnd();

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
    alert(area);
}