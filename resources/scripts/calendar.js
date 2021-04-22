  window.onload = function() {
    // var selectedDate = calendar.getValue();
    // console.log(selectedDate);
    var day = document.getElementById("weekdays_short");
    var timeSel = document.getElementById("time");
    var addressSel = document.getElementById("address");
    document.querySelector('jsuites-calendar').addEventListener('onchange', function(e) {
        console.log('New value: ' + e.target.value);
        var selectedDate = e.target.value;
    });
    document.querySelector('jsuites-calendar').addEventListener('onclose', function(e) {
        console.log('Calendar is closed');
    });
    loadTimes();
  
    // The manager login is below, working on taking it to the next page, the dashboard
    if (day === "S") {
        alert("This day is unavailable because it is a weekend.");
    } 
}

function loadTimes()
{
  var timeSel = document.getElementById("time");
  timeSel.innerHTML = `
  <option value="" selected="selected">Please select a day first</option>
  <option value="7:00 AM" id= "timeselection">7:00 AM</option>
  <option value="8:00 AM" id= "timeselection">8:00 AM</option>
  <option value="9:00 AM" id= "timeselection">9:00 AM</option>
  <option value="10:00 AM" id= "timeselection">10:00 AM</option>
  <option value="11:00 AM" id= "timeselection">11:00 AM</option>
  <option value="12:00 PM" id= "timeselection">12:00 PM</option>
  <option value="1:00 PM" id= "timeselection">1:00 PM</option>
  <option value="2:00 PM" id= "timeselection">2:00 PM</option>
  <option value="3:00 PM" id= "timeselection">3:00 PM</option>
  <option value="4:00 PM" id= "timeselection">4:00 PM</option>
  <option value="5:00 PM" id= "timeselection">5:00 PM</option>
  <option value="6:00 PM" id= "timeselection">6:00 PM</option>
  <option value="7:00 PM" id= "timeselection">7:00 PM</option>
  `;
}

const timeSelection = document.getElementById("timeselection");
// const daySelection = document.getElementById("weekdays_short");
var addressInput = document.getElementById("address"); // question in office hours: if the value changes but the id is the same, what do I call here?
console.log(timeSelection);
var methodSelection = document.getElementById("method");

// if anything goes wrong, check the names here
function pushCartData()
{
    const postCateringEventAPIURL = "https://localhost:5000/api/CateringEvent";
    cateringEvent = cateringEvent.toString();
    var temp;
    if(methodSelection = "Pickup")
    {
        temp= 1;
    }
    else{
            temp= 2;
    }
    var cateringEvent = {
        orderPlaced: Date.Now(),
        orderDate: selectedDate + timeSelection,
        fulfilledStatus: "FALSE",
        orderEventMethod: temp,
        orderEventDescription: addressInput +","+ getDescription() // is this how I would do this?
    }
        
      fetch(postCateringEventAPIURL, {
          method: "POST",
          headers: {
              
              "Accept": 'application/json',
              "Content-Type": 'application/json',
          },
          body: JSON.stringify(value)
      }).then((response)=>{
          console.log(response);
    })
}
// submit button
const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", (e) => {
    alert("You are being taken to the receipt for your transaction.");
    window.location.href= "../resources/Receipt.html";
})