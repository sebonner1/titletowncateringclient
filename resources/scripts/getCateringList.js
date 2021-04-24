var orderDateSelected = selectedDate; 
var timeSelected = getElementById("timeselection"); 
var addressSelected = document.getElementById("address"); 
 

if(Date.Now > orderDateSelected) 
{ 
    orderFulfilled = 'TRUE'; 
} 

else{ 
    orderFulfilled= 'FALSE'; 
} 
 
var calendarofevents = []; 
var events = [ 
{ 
    'OrderID': orderID, 
    'orderPlaced': Date.Now, 
    'orderDate': orderDateSelected, 
    'fulfilledStatus': orderFulfilled, 
    'orderEventMethod': methodSelection, 
    'orderDescription': addressSelected 
} 
] 

 
var finalEventItems = []; 

// Events above 
function handleOnLoad(){ 
    populateEventList(); 
} 

function handleAddEvent(id){ 
    var found = false; 
    calendarofevents.forEach((item)=>{ 

    if(item.id==id){ 
        handleAddOne(id); 
        found=true; 
    } 

}) 

if(!found){ 
    items.forEach((item)=>{ 
if(item.id==id){ 
    calendarofevents.push(item); 
} 
}) 
} 

populateEventList(); 

} 

 
 

function handleAddOne(id){ 
    calendarofevents.forEach((item)=>{ 
    if(item.id==id){ 
        item.quantity++; 
    } 
}) 
    populateEventList(); 
} 

function handleSubOne(id){ 
    calendarofevents.forEach((item)=>{ 

if(item.id==id){ 

item.quantity--; 

} 

}); 
populateEventList(); 
} 

 
function populateEventList(){ 
    let html= "<table>"; 
    html += "<tr><th>Description</th><th style: \"text-align:center;\">Price</th><th>Quantity</th><th>Total</th></tr>"; 
    calendarofevents.forEach((item) =>{ 
    html+="<tbody><td>"+item.OrderID+"</td>"; 
    html+="<td>"+item.orderPlaced+"</td>"; 
    html+="<td>"+item.orderDate +"</td>"; 
    html+="<td>"+item.fulfilledStatus+"</td>"; 
    html+="<td>"+item.orderEventMethod+"</td>"; 
    html+="<td>"+item.orderDescription+"</td></tbody>"; 
// html +="</table>"; 
}); 
document.getElementById("calendarofevents").innerHTML= html; 
} 

// get from the backend

function getEventList() 
{ 
    var tbodys = document.querySelectorAll("tbody"); 
    tbodys = Array.from(tbodys); 
    tbodys.shift(); 
    tbodys.forEach(tbody=> 
    { 
        var trs = tbody.children[0].children; 
        console.log(trs); 
        var eventItem = { 
        OrderID: trs[0].innerHTML, 
        orderPlaced: trs[1].innerHTML, 
        orderDate: trs[2].innerHTML, 
        fulfilledStatus: trs[3].innerHTML, 
        orderEventMethod: trs[4].innerHTML, 
        orderDescription: trs[5].innerHTML, 
    } 
        finalEventItems.push(eventItem); 
    }
); 

// console.log(tbodys); 

// console.log(finalCartItems); 

} 

 
 

function pushEventItems() 
{ 
getEventList(); 
const postCateringEventAPIURL = "https://localhost:5000/api/CateringEvent"; 
console.log(finalEventItems);
fetch(postCateringEventAPIURL, { 
method: "PUT", 
headers: { 
    "Accept": 'application/json', 
    "Content-Type": 'application/json' 
}, 
body: JSON.stringify(finalEventItems) 
}).then((response)=>{ 
console.log(response); 
}) 
} 

/* 

const checkout = document.getElementById("checkoutbutton"); 

checkout.addEventListener("click", (e) => { 

alert("You have successfully logged in."); 

window.location.href= "../resources/Calendar.html"; 

}); 

*/ 