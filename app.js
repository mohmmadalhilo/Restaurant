'use strict';
let foodId=1;
const allFood = [];
function Food(foodName,type,price){
    this.foodId= foodId++;
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    allFood.push(this);
}


let getForm = document.getElementById("form");
let getTable = document.getElementById("table");
let tbody = document.getElementById("tbody");

Food.prototype.render=function(){
    let row = document.createElement("tr");
    getTable.appendChild(row);
  
    let tdE = document.createElement("td");
    row.appendChild(tdE);
    tdE.textContent = this.foodId;
  
    let tdE2 = document.createElement("td");
    row.appendChild(tdE2);
    tdE2.textContent = this.foodName;
  
    let tdE3 = document.createElement("td");
    row.appendChild(tdE3);
    tdE3.textContent = this.type;
  
    let tdE4 = document.createElement("td");
    row.appendChild(tdE4);
    tdE4.textContent = this.price;
}
getForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let foodname = event.target.foodName.value;
  let foodtype = event.target.selectfood.value;
  let foodprice = event.target.price.value;
  let newFood = new Food(foodname, foodtype, foodprice);
  newFood.render();
}