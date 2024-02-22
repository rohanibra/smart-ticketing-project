
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


    //    console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3]
    //     )
    })
}














function getConvertedValue(id){
    const price =document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}