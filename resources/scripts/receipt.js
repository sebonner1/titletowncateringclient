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

console.log("javascript loaded");
function getCartItemsReceipt(){
    console.log("inside the getCartItems method");
    // front end or storage here

    const allCartAPIURL = "https://ttcapi.herokuapp.com/api/cartAPI";

    var totalPrice = 0.0;
    fetch(allCartAPIURL).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((item)=>{
            html += "<tbody><tr>",
            html += "<td>"+item.itemName+"</td>",
            html += '<td class="alignright">'+'$'+item.price+"</td>",
            totalPrice += (item.quantity * item.price),
            html += "</tr>",
            html += "</tbody></table>";
        })
        
        html += '<tbody><tr><td style="text-align:right; font-weight: bold;">',
        html += 'Total Price: $'+totalPrice+"</td></tr></tbody>",
        html += "</ul>";
        document.getElementById("cartitems").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

const purchaseButton = document.getElementById("confirm-purchase");
purchaseButton.addEventListener("click", (e) => {
    alert("You have completed your transaction.");
    window.location.href= "index.html";
})