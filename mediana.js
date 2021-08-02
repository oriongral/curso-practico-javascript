function calcularMediana(lista) {
  const listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularMediaAritmetica(listaOrdenada) {
    const sumaLista = listaOrdenada.reduce(function (
      valorAcumulado = 0,
      nuevoElemento
    ) {
      return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / listaOrdenada.length;
    return promedioLista;
  }

  let mediana;

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];
    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElementos;
  } else {
    mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}
