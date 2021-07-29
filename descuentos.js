function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText="El precio con descuento son: $" + precioConDescuento;
}