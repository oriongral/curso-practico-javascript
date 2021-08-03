const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const lista1Conteo = {};

lista1.map(
    function(elemento){
        if(lista1Conteo[elemento]){
            lista1Conteo[elemento] += 1;
        }else{
            lista1Conteo[elemento] = 1;
        }
    }
);

const list1Array = Object.entries(lista1Conteo).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

const moda = list1Array[list1Array.length -1];





