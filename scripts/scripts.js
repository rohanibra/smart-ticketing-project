
const allBtn =document.getElementsByClassName("add-btn");
for(const btn of allBtn){
    btn.addEventListener("click", function(event){
       const seatNumber =event.target.innerText;
       const ticketPrice=event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerText;
      const selectedContainer= document.getElementById("selected-seats");
      

      const div = document.createElement("div");
      div.classList.add("flex")
      div.classList.add("justify-around")


      const p1= document.createElement("p");
      const p2= document.createElement("p");
      const p3= document.createElement("p");

      p1.innerText =seatNumber;
      p2.innerText = "Economoy";
      p3.innerText =ticketPrice;

      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      selectedContainer.appendChild(div);
      updateTotalPrice(ticketPrice);
      updateGrandTotal()


    //    console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3]
    //     )
    })
}





function updateGrandTotal(status)
{   const totalPrice =getConvertedValue("total-price"); 
    if(status == undefined){
         
    document.getElementById("grand-total").innerText=totalPrice;


    }
    else{
        const couponCode = document.getElementById("coupon-code").value;
        if( couponCode =="NEW15"){
            const discountedPrice= totalPrice * 0.15;
            document.getElementById("grand-total").innerText=totalPrice - discountedPrice;
            
        }
        else if( couponCode =="Couple 20"){
            const discountedPrice= totalPrice * 0.20;
            document.getElementById("grand-total").innerText=totalPrice - discountedPrice;
        }else{
            alert("please enter a valid coupon code")
        }
    }






   
}



function updateTotalPrice(value){
    
    const totalPrice =getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}



function getConvertedValue(id){
    const price =document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}
