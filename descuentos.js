const coupons = [{promotion: "10%", discount: 10,},
                 {promotion: "15%", discount: 15,},
                 {promotion: "20%", discount: 20,},
                 {promotion: "25%", discount: 25,},
                 {promotion: "40%", discount: 40,}];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;    
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value; 

    const isCouponValid = function(coupon){
        return coupon.promotion === couponValue;
    };

    const userCoupon = coupons.find(isCouponValid);

    if(!userCoupon){
        alert("El cupón " + couponValue + "no es válido");
    }else{
        const discount = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;    
    }

}
