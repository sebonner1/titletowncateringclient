  window.onload = function() {
    var day = document.getElementById("weekdays_short");
    var timeSel = document.getElementById("time");
    var addressSel = document.getElementById("address");
    loadTimes();
  
    // The manager login is below, working on taking it to the next page, the dashboard
    if (day === "S") {
        alert("This day is unavailable because it is a Sunday.");
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
const daySelection = document.getElementById("weekdays_short");
const addressInput = document.getElementById("address"); // question in office hours: if the value changes but the id is the same, what do I call here?
console.log(timeSelection);

function pushCartData()
{
    const postCateringEventAPIURL = "https://localhost:5000/api/CateringEvent";
        
      fetch(postCateringEventAPIURL, {
          method: "POST",
          headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json',
          }
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