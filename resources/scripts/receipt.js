// var owner = $('#owner'),
//     cardNumber = $('#cardNumber'),
//     cardNumberField = $('#card-number-field'),
//     CVV = $("#cvv"),
//     mastercard = $("#mastercard"),
//     confirmButton = $('#confirm-purchase'),
//     visa = $("#visa"),
//     amex = $("#amex");

// cardNumber.payform('formatCardNumber');
// CVV.payform('formatCardCVC');

// cardNumber.keyup(function() {
//     amex.removeClass('transparent');
//     visa.removeClass('transparent');
//     mastercard.removeClass('transparent');

//     if ($.payform.validateCardNumber(cardNumber.val()) == false) {
//         cardNumberField.removeClass('has-success');
//         cardNumberField.addClass('has-error');
//     } else {
//         cardNumberField.removeClass('has-error');
//         cardNumberField.addClass('has-success');
//     }

//     if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
//         mastercard.addClass('transparent');
//         amex.addClass('transparent');
//     } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
//         mastercard.addClass('transparent');
//         visa.addClass('transparent');
//     } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
//         amex.addClass('transparent');
//         visa.addClass('transparent');
//     }
// });

// confirmButton.click(function(e) {
//     e.preventDefault();

//     var isCardValid = $.payform.validateCardNumber(cardNumber.val());
//     var isCvvValid = $.payform.validateCardCVC(CVV.val());

//     if(owner.val().length < 5){
//         alert("Wrong owner name");
//     } else if (!isCardValid) {
//         alert("Wrong card number");
//     } else if (!isCvvValid) {
//         alert("Wrong CVV");
//     } else {
//         // Everything is correct. Add your form submission code here.
//         alert("Everything is correct");
//     }
// });
var totalPrice = 0.0;
var tip = 0.0;
console.log("javascript loaded");
function getCartItemsReceipt(){
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    console.log("inside the getCartItems method");
    // front end or storage here

    const allCartAPIURL = "https://ttcapi.herokuapp.com/api/cartAPI";
    //const allCartAPIURL = "https://localhost:5000/api/cartAPI";

    var priceBeforeTax = 0.0;
    var tax = 0.0;
    var suggestedTip = 0.0;
    var totalPricemid = 0.0;
    var tipmid = "text";
    // fetch(allCartAPIURL).then(function(response){
    //     return response.json();
    // }).then(function(json){
    //     let html = "<ul>";
    //     json.forEach((item)=>{
    //         html += "<tbody><tr>",
    //         html += "<td>"+item.itemName+"</td>",
    //         html += '<td class="alignright">'+'$'+item.price+"</td>",
    //         totalPrice += (item.quantity * item.price),
    //         html += "</tr>",
    //         html += "</tbody></table>";
    //     })
        
    //     html += '<tbody><tr><td style="text-align:right; font-weight: bold;">',
    //     html += 'Total Price: $'+totalPrice+"</td></tr></tbody>",
    //     html += "</ul>";
    //     document.getElementById("cart").innerHTML = html;
    // }).catch(function(error){
    //     console.log(error);
    // })
    
    console.log("the cart", cart.toString());
    let html = "<ul>";
    cart.forEach((item)=>{
                html += "<tbody><tr>",
                html += "<td>"+item.quantity + " " + item.itemName+"</td>",
                html += '<td class="alignright">'+'$'+(item.quantity * item.price)+"</td>",
                priceBeforeTax += (item.quantity * item.price),
                tax += Math.round((priceBeforeTax*.1),2),
                suggestedTip += Math.round(((priceBeforeTax + tax) * .15),2),
                totalPricemid = (tax+priceBeforeTax),
                html += "</tr>",
                html += "</tbody></table>";
            })
            
            html += '<tbody><tr><td style="text-align:right; font-weight: bold;">',
            html += 'Tax: $' +tax+ "</td></tr></tbody>",
            html += '<tbody><tr><td style="text-align:right; font-weight: bold;">',
            html += 'Suggested Tip (15%): $' +suggestedTip+ "",
            html += '<form id="tipform" onsubmit = \"return false;\" method = \"post\">'; 
            html += '<label for = "Tip">Please enter your Tip</label><input type = "text" id = \"tipy\">';
            html += '<button onclick = "updateTotal()">Update Tip</button>';
            //<input type ="submit" onsubmit = \"updateTotal()\" value = "Update Total"></form>',
            //tip += parseFloat(document.getElementById("tipy").value),
            totalPrice = (totalPricemid + tip);
            html += '<div id = \"priceRow\"> Total Price: $'+totalPrice+"</td></tr></tbody></div>",
            html += "</ul>";
            document.getElementById("cart").innerHTML = html;
}

// var purchaseButton = document.getElementById("confirm-purchase");
// function backToHomePage(){
//     // purchaseButton.addEventListener('click', swapper, false);
//     alert("You have completed your transaction.");
//     window.location.href= "HomePage.html";
// }
function updateTotal(){
    console.log("made it");
    tip = parseFloat(document.getElementById("tipy").value);
    totalPrice += (tip);
    console.log(tip, totalPrice);
    document.getElementById("priceRow").innerHTML = "Total Price: $"+totalPrice+"</td></tr></tbody>";
}
