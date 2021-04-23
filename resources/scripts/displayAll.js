function getAllReports()
{
    const allReportsAPIURL = "https://localhost:5000/api/reports";

    fetch(allReportsAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" +CartTotal.OrderID, 
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.price,
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
    const popItemReportAPIURL = "https://localhost:5000/api/mostPopItemsReport";

    fetch(popItemReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" +CartTotal.OrderID, 
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.price,
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

function getLeastPopularItem()
{
    const leastPopItemReportAPIURL = "https://localhost:5000/api/leastPopItemsReport";

    fetch(leastPopItemReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" +CartTotal.OrderID, 
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.price,
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

function getMostProfitItem()
{
    const mostProfitItemReportAPIURL = "https://localhost:5000/api/MostProfitItemsReport";

    fetch(mostProfitItemReportAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartTotal)=>{
            html += "<li>" +CartTotal.OrderID, 
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$" + CartTotal.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.price,
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

// add to the if statement here

// TTC TEAM - make sure my syntax is right here with the if and else if, thank you!!! 
const selectmenu = document.querySelector("select");
selectmenu.addEventListener("input", (e) => {
    //getAllReports();
    console.log(e.target.value);
    if(e.target.value = "viewall")
    {
        getAllReports();
    }
    else{
        if(e.target.value = "Orderspermonth")
        {
            // insert the method here
        }
        else if(e.target.value = "Mostpopularitems")
        {
            getMostPopularItem();
        }
        else if(e.target.value = "Mostprofitableitems")
        {
            getMostProfitItem();
        }
        else if(e.target.value = "Percentpickupvsdelivered")
        {
            // insert the method here
        }
        else if(e.target.value = "Mostpopularhours")
        {
            // insert the method here
        }
        else if(e.target.value = "Leastpopularitem")
        {
            getLeastPopularItem();
        }
    }
})