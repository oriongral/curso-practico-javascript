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

    let couponDiscount;
    let precioConDescuento;

    switch (couponValue){
        case "10%":
            couponDiscount = 10;
            precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
            resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
            break;
        case "15%":
            couponDiscount = 15;
            precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
            resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
            break;
         case "20%":
            couponDiscount = 20;
            precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
            resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
            break;
        case "25%":
            couponDiscount = 25;
            precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
            resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
            break;
        case "40%":
            couponDiscount = 40;
            precioConDescuento = calcularPrecioConDescuento(priceValue,couponDiscount);
            resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
            break;
        default:
            alert("El cupón ingresado no es valido");
    }

 
}