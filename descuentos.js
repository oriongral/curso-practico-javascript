const coupons = ["10%","15%","20%","25%","40%"];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 

    const resultPrice = document.getElementById("resultPrice");

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value; 

if(!coupons.includes(couponValue)){
    alert("El cupón " + couponValue + " no es válido");
}else if (couponValue === "10%"){
    couponDiscount = 10;
    precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}else if(couponValue === "15%"){
    couponDiscount = 15;
    precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}else if(couponValue === "20%"){
    couponDiscount = 20;
    precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}else if(couponValue === "25%"){
    couponDiscount = 25;
    precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}else if(couponValue === "40%"){
    couponDiscount = 40;
    precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

}
