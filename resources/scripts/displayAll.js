function getAllReports()
{
    const allReportsAPIURL = "https://localhost:5000/api/reports";

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
            html += "$" + CartTotal.totalprice,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.qckparm,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.qccc,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.qvegb,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.qcss,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.qturk,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.qhouse,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.pckparm,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.pccc,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.pvegb,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.pcss,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.pturk,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartTotal.phouse,
            "</li>"
        })
        html += "</ul>";
        document.getElementById("carttotals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })

    // trying to get tables lol
    fetch(allReportsAPIURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<table style=\"width:100%; border: 1px solid black\";>";
        json.forEach((CartTotal)=>{
            html+="<tr>";
            html+="<th>Order ID</th>";
            html+="<th>Total Price</th>";
            html+="<th>Chicken Parm</th>";
            html+="<th>Chocolate Chip Cookie</th>";
            html+="<th>Veggie Burger</th>";
            html+="<th>Chicken Salad Sandwich</th>";
            html+="<th>Turkey Melt</th>";
            html+="<th>House Salad</th>";
            html+="</tr>";
            html+="<tr>";
            html += "<td><li>" +CartTotal.orderID+"</td>", 
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += "$" + CartTotal.totalprice+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.qckparm+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.qccc+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.qvegb+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.qcss+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.qturk+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.qhouse+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.pckparm+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.pccc+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.pvegb+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.pcss+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.pturk+"</td>",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<td>",
            html += CartTotal.phouse+"</td>",
            "</li></tr>"
        })
        html += "</table>";
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
            // insert the method here
        }
        else if(e.target.value = "Mostprofitableitems")
        {
            // insert the method here
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
            // insert the method here
        }
    }
})