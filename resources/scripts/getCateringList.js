// let's try this again

function getEvents(){
    const allEventsAPIURL = "https://localhost:5001/api/bigalapi";

    fetch(allEventsAPIURL).then(function(response){
        return response.json();
    }).then(function(json)
    {
        let html ="<ul>";
        json.reverse().forEach((CateringEvent)=>{
            html += "<li>" + CateringEvent.OrderID
            html += CateringEvent.orderPlaced,
            html += CateringEvent.orderDate,
            html += CateringEvent.fulfilledStatus,
            html += CateringEvent.orderEventMethod,
            html += CateringEvent.orderDescription + "</li>"
        })
        html += "</ul>";
        document.getElementById("cateringEvents").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

// var orderDateSelected = selectedDate; 
// var timeSelected = getElementById("timeselection"); 
// var addressSelected = document.getElementById("address"); 
 

// if(Date.Now > orderDateSelected) 
// { 
//     orderFulfilled = 'TRUE'; 
// } 

// else{ 
//     orderFulfilled= 'FALSE'; 
// } 
 
// var calendarofevents = []; 
// var events = [ 
// { 
//     'OrderID': orderID, 
//     'orderPlaced': Date.Now, 
//     'orderDate': orderDateSelected, 
//     'fulfilledStatus': orderFulfilled, 
//     'orderEventMethod': methodSelection, 
//     'orderDescription': addressSelected 
// } 
// ] 

 
// var finalEventItems = []; 

// // Events above 
// function handleOnLoad(){ 
//     populateEventList(); 
// } 

// function handleAddEvent(event){ 
//     var found = false; 
//     calendarofevents.forEach((event)=>{ 

//     if(event.id==id){ 
//         handleAddOne(id); 
//         found=true; 
//     } 

// }) 

// if(!found){ 
//     events.forEach((event)=>{ 
// if(event.id==id){ 
//     calendarofevents.push(event); 
// } 
// }) 
// } 

// populateEventList(); 

// }

 
// function populateEventList(){ 
//     let html= "<table>"; 
//     html += "<tr><th>Description</th><th style: \"text-align:center;\">Price</th><th>Quantity</th><th>Total</th></tr>"; 
//     calendarofevents.forEach((event) =>{ 
//     html+="<tbody><td>"+event.OrderID+"</td>"; 
//     html+="<td>"+event.orderPlaced+"</td>"; 
//     html+="<td>"+event.orderDate +"</td>"; 
//     html+="<td>"+event.fulfilledStatus+"</td>"; 
//     html+="<td>"+event.orderEventMethod+"</td>"; 
//     html+="<td>"+event.orderDescription+"</td></tbody>"; 
// // html +="</table>"; 
// }); 
// document.getElementById("calendarofevents").innerHTML= html; 
// } 

// // // get from the backend

// // function getEventList() 
// // { 
// //     var tbodys = document.querySelectorAll("tbody"); 
// //     tbodys = Array.from(tbodys); 
// //     tbodys.shift(); 
// //     tbodys.forEach(tbody=> 
// //     { 
// //         var trs = tbody.children[0].children; 
// //         console.log(trs); 
// //         var eventItem = { 
// //         OrderID: trs[0].innerHTML, 
// //         orderPlaced: trs[1].innerHTML, 
// //         orderDate: trs[2].innerHTML, 
// //         fulfilledStatus: trs[3].innerHTML, 
// //         orderEventMethod: trs[4].innerHTML, 
// //         orderDescription: trs[5].innerHTML, 
// //     } 
// //         finalEventItems.push(eventItem); 
// //     }
// // ); 

// // // console.log(tbodys); 

// // // console.log(finalCartItems); 

// // } 

 
 

// // function pushEventItems() 
// { 
// getEventList(); 
// const postCateringEventAPIURL = "https://localhost:5000/api/CateringEvent"; 
// console.log(finalEventItems);
// fetch(postCateringEventAPIURL, { 
// method: "PUT", 
// headers: { 
//     "Accept": 'application/json', 
//     "Content-Type": 'application/json' 
// }, 
// body: JSON.stringify(finalEventItems) 
// }).then((response)=>{ 
// console.log(response); 
// }) 
// } 

/* 

const checkout = document.getElementById("checkoutbutton"); 

checkout.addEventListener("click", (e) => { 

alert("You have successfully logged in."); 

window.location.href= "../resources/Calendar.html"; 

}); 

*/ 