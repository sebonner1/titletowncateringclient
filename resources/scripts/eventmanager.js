console.log("javascript loaded"); 
function getEvents(){
    const allEventsAPIURL = "https://localhost:5000/api/CateringEvent";

    fetch(allEventsAPIURL).then(function(response){
        return response.json();
    }).then(function(json)
    {
        let html ="<ul>";
        json.forEach((CateringEvent)=>{
            html += "<li>" + CateringEvent.OrderID,
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
            html += CateringEvent.orderDescription,
            html += "<button onclick=\"delEvent("+CateringEvent.orderID+")\">delete</button>" + "</li>" 
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
    const putPostsAPIURL = "https://localhost:5001/api/CateringEvent/" + orderID;
    console.log(putPostsAPIURL);
    const putEvent = document.getElementById("updatePost").value;
    console.log(putEvent);
       
    fetch(putPostsAPIURL, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            OrderID: orderID,
            posttext: putEvent
        })
    }).then(function(response){
        console.log(response);  
        getPosts();
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
function pushEventItemss() 
{ 
    console.log("made it to pusheventitems.js");
    const addPostsAPIURL = "https://localhost:5001/api/CateringEvent";
    const timesel = document.getElementById("time").value;
    const addresssel = document.getElementById("address").value;
    const eventstat = document.getElementById("method").value;
    const selecteddate;
    document.querySelector('jsuites-calendar').addEventListener('onchange', function(e) { 
        selecteddate = e.target.value;
        });
    fetch(addPostsAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            orderDate: selecteddate + timesel,
            orderDescription: addresssel,
            orderEventMethod: eventstat
          })
    }).then((response)=>{
        console.log(response);
        console.log("she's a runner, she's a trackstar");
        getEvents();
    })
} 