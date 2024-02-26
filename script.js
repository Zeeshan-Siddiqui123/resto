let popup = document.getElementById("popup");
let card= document.getElementById("card");
let order= document.getElementById("order");
let popuporder = document.getElementById("popuporder")
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let totalamount = document.getElementById("total-amount")
let quantity = document.getElementById("quantity-red")
let i = 0
let a = 0
let b =0
let c = 0
let d = 0
let e = 0
let rs1 = 400
let rs2 = 300
let rs3 = 600
let rs4 = 500  
let rs5 = 500
let rs6 = 550

   

function increase() {
    let x = document.getElementById("increase");
    let y = document.getElementById("counter")
    let productprice = document.getElementById("product-price")
    y.innerHTML = i+=1
    quantity.innerHTML = i+=0
    productprice.innerHTML =  i*rs1
    totalamount.innerHTML = i*rs1
}

function decrease() {
    let x = document.getElementById("decrease");
    let y = document.getElementById("counter")
    let productprice = document.getElementById("product-price")
    y.innerHTML = i-=1
    quantity.innerHTML = i-=0
    productprice.innerHTML = i*rs1
    totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1 + c*rs4 + d*rs5 + e*rs6
    if (i==0) {
      item1.style.display="none"
      quantity.innerHTML = 0
    }
    if (i<=0) {
      y.innerHTML = i-=i
      totalamount.innerHTML=0
      item1.style.display="none"
      quantity.innerHTML = 0
    }
}
function increase2() {
   let x = document.getElementById("increase2");
   let y = document.getElementById("counter2")
   let productprice2 = document.getElementById("product-price2")
   y.innerHTML = a+=1
   quantity.innerHTML = a+0 + i+0
   productprice2.innerHTML =  a*rs2
   totalamount.innerHTML = a*rs2 + i*rs1
}

function decrease2() {
   let x = document.getElementById("decrease2");
   let y = document.getElementById("counter2")
   let productprice2 = document.getElementById("product-price2")
   y.innerHTML = a-=1
   quantity.innerHTML = a-0 + i-0 + b-0 + c-0 + d-0 + e-0
   productprice2.innerHTML =  a*rs2
   totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1 + c*rs4 + d*rs5 + e*rs6
   if (a==0) {
     item2.style.display="none"
     quantity.innerHTML = 0
   }
   if (a<=0) {
      y.innerHTML = a-=a
      totalamount.innerHTML= 0
      quantity.innerHTML = 0
      productprice2.innerHTML =  a*rs2
      item2.style.display="none"
    }
}
function increase3() {
   let x = document.getElementById("increase3");
   let y = document.getElementById("counter3")
   let productprice3 = document.getElementById("product-price3")
   y.innerHTML = b+=1
   quantity.innerHTML = a+0 + i+0 + b+0
   productprice3.innerHTML =  b*rs3
   totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1
}

function decrease3() {
   let x = document.getElementById("decrease3");
   let y = document.getElementById("counter3")
   let productprice3 = document.getElementById("product-price3")
   y.innerHTML = b-=1
   quantity.innerHTML = a-0 + i-0 + b-0 + c-0 + d-0 + e-0
   productprice3.innerHTML =  b*rs3
   totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1 + c*rs4 + d*rs5 + e*rs6
   if (b==0) {
     item3.style.display="none"
     quantity.innerHTML = 0
   }
   if (b<=0) {
      y.innerHTML = b-=b
      totalamount.innerHTML= 0
      quantity.innerHTML= 0
      productprice3.innerHTML =  b*rs3
      item3.style.display="none"
    }
}
function increase4() {
   let x = document.getElementById("increase4");
   let y = document.getElementById("counter4")
   let productprice4 = document.getElementById("product-price4")
   y.innerHTML = c+=1
   quantity.innerHTML = a+0 + i+0 + b+0  + c+0
   productprice4.innerHTML =  c*rs4
   totalamount.innerHTML = i*rs1 + a*rs2 + b*rs3 + c*rs4 
}

function decrease4() {
   let x = document.getElementById("decrease4");
   let y = document.getElementById("counter4")
   let productprice4 = document.getElementById("product-price4")
   y.innerHTML = c-=1
   quantity.innerHTML = a-0 + i-0 + b-0 + c-0 + d-0 + e-0
   productprice4.innerHTML =  c*rs4
   totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1 + c*rs4 + d*rs5 + e*rs6
   if (c==0) {
     item4.style.display="none"
     quantity.innerHTML = 0
   }
   if (c<=0) {
      y.innerHTML = c-=c
      quantity.innerHTML= 0
      totalamount.innerHTML = 0
      productprice4.innerHTML =  c*rs4
      item4.style.display="none"
    }
}
function increase5() {
   let x = document.getElementById("increase5");
   let y = document.getElementById("counter5")
   let productprice5 = document.getElementById("product-price5")
   y.innerHTML = d+=1
   quantity.innerHTML = a+0 + i+0 + b+0 + d+0 + c+0
   productprice5.innerHTML =  d*rs5
   totalamount.innerHTML = i*rs1 + a*rs2 + b*rs3 + c*rs4 + d*rs5
}

function decrease5() {
   let x = document.getElementById("decrease5");
   let y = document.getElementById("counter5")
   let productprice5 = document.getElementById("product-price5")
   y.innerHTML = d-=1
   quantity.innerHTML = a-0 + i-0 + b-0 + c-0 + d-0 + e-0
   productprice5.innerHTML =  d*rs5
   totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1 + c*rs4 + d*rs5 + e*rs6
   if (d==0) {
     item5.style.display="none"
     quantity.innerHTML = 0
   }   if (d<=0) {
      y.innerHTML = d-=d
      quantity.innerHTML= 0
      productprice5.innerHTML =  d*rs5
      item5.style.display="none"
      totalamount.innerHTML = 0
    }

}
function increase6() {
   let x = document.getElementById("increase6");
   let y = document.getElementById("counter6")
   let productprice6 = document.getElementById("product-price6")
   y.innerHTML = e+=1
   quantity.innerHTML = a+0 + i+0 + b+0 + d+0 + c+0 + e+0
   productprice6.innerHTML =  e*rs6
   totalamount.innerHTML = i*rs1 + a*rs2 + b*rs3 + c*rs4 + d*rs5 + e*rs6
}

function decrease6() {
   let x = document.getElementById("decrease6");
   let y = document.getElementById("counter6")
   let productprice6 = document.getElementById("product-price6")
   y.innerHTML = e-=1
   quantity.innerHTML = a-0 + i-0 + b-0 + c-0 + d-0 + e-0
   productprice6.innerHTML =  e*rs6
   totalamount.innerHTML = b*rs3 + a*rs2 + i*rs1 + c*rs4 + d*rs5 + e*rs6
   if (e==0) {
     item6.style.display="none"
     quantity.innerHTML = 0
   }
   if (e<=0) {
      y.innerHTML = e-=e
      quantity.innerHTML = 0
      totalamount.innerHTML = 0
      productprice6.innerHTML =  e*rs6
      item6.style.display="none"
    }
}

function openPopup() {
   popup.classList.add("open-popup")
   
}
function closePopup() {
   popup.classList.remove("open-popup")
}
function openShopping() {
   card.classList.add("open-card")
}

function closeShopping() {
   card.classList.remove("open-card")
}
function openOrder() {
   order.classList.add("order-open")
}
function closeOrder() {
   order.classList.remove("order-open")
}
function orderpopupopen() {
   popuporder.classList.add("open-popup")
}
function orderpopupclose() {
   popuporder.classList.remove("open-popup")
}
// function openItem() {
//    item1.classList.add("item-1")
// }
// function closeItem() {
//    item1.classList.remove("item-1")
// }