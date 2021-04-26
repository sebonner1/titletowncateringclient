console.log("javascript loaded"); 
function getEvents(){
    const allEventsAPIURL = "https://localhost:5000/api/CateringEvent";

    fetch(allEventsAPIURL).then(function(response){
        return response.json();
    }).then(function(json)
    {
        let html ="<ul>";
        json.reverse().forEach((CateringEvent)=>{
            html += "<li>" + CateringEvent.OrderID
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CateringEvent.orderPlaced,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CateringEvent.orderDate,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CateringEvent.fulfilledStatus,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CateringEvent.orderEventMethod,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CateringEvent.orderDescription + "</li>"
        })
        html += "</ul>";
        document.getElementById("cateringevents").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

// function getEvents(){ 

// const allEventsAPIURL = "https://localhost:5000/api/CateringEvent"; 
// console.log("made it to the js"); 
// fetch(allEventsAPIURL).then(function(response){ 
// return response.json(); 
// }).then(function(json){ 
// let html = "<ul>"; 
// json.forEach((CateringEvent)=>{ 
// html += "<li id = event" + CateringEvent.orderID+ " description = "+ CateringEvent.orderDescription+ ">" +CateringEvent.quantity, 
// html += "&nbsp", 
// html += "&nbsp", 
// html += "&nbsp", 
// html += CateringEvent.orderEventMethod, 
// html += "&nbsp", 
// html += "&nbsp", 
// html += "&nbsp", 
// html += CateringEvent.orderDate, 
// html += "&nbsp", 
// html += "&nbsp", 
// html += "&nbsp", 
// html += "<button onclick=\"addEvent("+CateringEvent.orderID+")\">+</button>", 
// html += "<button onclick=\"delEvent("+CateringEvent.orderID+")\">-</button>" + "</li>" 
// }) 

// html += "</ul>"; 
// document.getElementById("cateringevents").innerHTML = html; 
// }).catch(function(error){ 
// console.log(error); 
// }) 

// } 

function addEvent(orderID){ 
const addCartAPIURL = "https://localhost:5000/api/CateringEvent/" + orderID; 
console.log(orderID); 
var event = { 
description: document.getElementById("event"+orderID).getAttribute("description"), 

} 

fetch(addCartAPIURL, { 
method: "PUT", 
headers: { 
"Accept": 'application/json', 
"Content-Type": 'application/json' 
}, 

body: JSON.stringify(event) 
}).then((response)=>{ 
console.log(response); 
getCart(); 
}) 

} 

function delEvent(orderID){ 
const delEventAPIURL = "https://localhost:5000/api/CateringEvent/" + orderID; 
console.log(orderID); 
fetch(delEventAPIURL, { 
method: "DELETE", 
headers: { 
"Accept": 'application/json', 
"Content-Type": 'application/json' 
} 

}).then((response)=>{ 
    console.log(response); 
    getEvents(); 
}) 

} 