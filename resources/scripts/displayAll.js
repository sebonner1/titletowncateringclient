function getAllReports()
{
    const allReportsAPIURL = "https://ttcapi.herokuapp.com/api/reports";
    
    fetch(allReportsAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" +CartTotal.orderID, 
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$"+CartTotal.price,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.quantity,
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

function getMostPopularItem()
{
    const popItemReportAPIURL = "https://ttcapi.herokuapp.com/api/mostPopItemsReport";

    fetch(popItemReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "Quantity = "+CartTotal.quantity,
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

function getLeastPopularItem()
{
    const leastPopItemReportAPIURL = "https://ttcapi.herokuapp.com/api/leastPopItemsReport";

    fetch(leastPopItemReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "Quantity = "+CartTotal.quantity,
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

function getMostProfitItem()
{
    const mostProfitItemReportAPIURL = "https://ttcapi.herokuapp.com/api/MostProfitItemsReport";

    fetch(mostProfitItemReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$"+CartTotal.price,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

function getPickupMethodItem()
{
    const pickupMethodReportAPIURL = "https://ttcapi.herokuapp.com/api/pickupMethodReport";

    fetch(pickupMethodReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" + CartTotal,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

function getDeliveryMethodItem()
{
    const deliveryMethodReportAPIURL = "https://ttcapi.herokuapp.com/api/deliveryReport";

    fetch(deliveryMethodReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" + CartTotal,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

// function getMonthlyOrder()
// {
//     const monthlyReportAPIURL = "https://localhost:5000/api/ordersbymonth";

//     fetch(monthlyReportAPIURL).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(json){
//         let html = "<ul>";
//         json.forEach((CartTotal)=>{
//             html += "<li>" +CartTotal, 
//             html += "&nbsp",
//             html += "&nbsp",
//             html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += CartTotal,
//             // html += "&nbsp",
//             // html += "&nbsp",
//             // html += "&nbsp",
//             "</li>"
//         })
//         html += "</ul>";
//         document.getElementById("carttotals").innerHTML = html;
//     }).catch(function(error){
//         console.log(error);
//     })
// }

// add to the if statement here

// TTC TEAM - make sure my syntax is right here with the if and else if, thank you!!! 
// const selectmenu = document.querySelector("select");
// selectmenu.addEventListener("input", (e) => {
//     //getAllReports();
//     console.log(e.target.value);
//     if(e.target.value = "viewall")
//     {
//         getAllReports();
//     }
//     else if(e.target.value = "Orderspermonth")
//     {
//         console.log("hi");
//     }
//     else if(e.target.value = "Mostpopularitems")
//     {
//         console.log("most pop items displayall");
//         getMostPopularItem();
//     }
//     else if(e.target.value = "Mostprofitableitems")
//     {
//         console.log("most profitable in displayall");
//         getMostProfitItem();
//     }
//     if(e.target.value = "Percentpickupvsdelivered")
//     {
//         console.log("percentpickup");
//         getPickupMethodItem();
//     }
//     if(e.target.value = "Mostpopularhours")
//     {
//         console.log("mostpopularhours");
//     }
//     else(e.target.value = "Leastpopularitem")
//     {
//         console.log("least pop item displayall");
//         getLeastPopularItem();
//     }
//     }
// )