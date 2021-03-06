console.log("javascript loaded"); 
function getEvents(){
    const allEventsAPIURL = "https://ttcapi.herokuapp.com/api/CateringEvent";

    fetch(allEventsAPIURL).then(function(response){
        return response.json();
    }).then(function(json)
    {
        let html ="<ul>";
        json.forEach((CateringEvent)=>{
            html += "<li>" + CateringEvent.orderID,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            // html += CateringEvent.orderPlaced,
            // html += "&nbsp",
            // html += "&nbsp",
            // html += "&nbsp",
            // html += "&nbsp",
            // html += "&nbsp",
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
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<button onclick=\"delEvent("+CateringEvent.orderID+")\" id=\"deletebutton\" style=\" background-color: black; color: white; padding: 14px 20px; border: black; cursor: pointer; width: 10%; text-align: center; right: 15px;\">Delete</button>" + "</li>" 
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
    const putPostsAPIURL = "https://ttcapi.herokuapp.com/api/CateringEvent/" + orderID;
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
const delEventAPIURL = "https://ttcapi.herokuapp.com/api/CateringEvent/" + orderID; 
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
    const addPostsAPIURL = "https://ttcapi.herokuapp.com/api/CateringEvent";
    //const addPostsAPIURL = "https://localhost:5000/api/CateringEvent";
    const timesel = document.getElementById("time").value;
    const addresssel = document.getElementById("address").value;
    const eventstat = document.getElementById("method").value;

    console.log(timesel);
    console.log(addresssel);
    console.log(eventstat);
    
    var selecteddate;
    var stringselectedDate;
    var datenow = Date.now().toString();
    
    // document.querySelector('jsuites-calendar').addEventListener('onchange', function(e) { 
    //     selecteddate = e.target.value;
    //     stringselectedDate = selecteddate.toString();
    //     });
    stringselectedDate = document.getElementById("selectedDate").value.toString();
    console.log("just got the date from the page : ", stringselectedDate);
    fetch(addPostsAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            orderPlaced: datenow,
            orderDate: stringselectedDate + timesel,
            orderDescription: addresssel,
            orderEventMethod: eventstat
          })
    }).then((response)=>{ //error on the reponse like here as well?
        console.log(response);
        console.log("she's a runner, she's a trackstar");
        window.location.href= "Receipt.html";
        //getEvents(); //error when calling getEvents
    })
} 