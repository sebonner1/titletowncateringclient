var cart = [];
var items = [
    {
        'id': 1,
        'itemName': 'Chicken Parm',
        'price': 11.50,
        'quantity': 1
    },
    {
        'id':2,
        'itemName': 'Chocolate Chip Cookie(s)',
        'price': 2.50,
        'quantity': 1
    },
    {
        'id': 3,
        'itemName': 'Veggie Burger',
        'price': 10.00,
        'quantity': 1
    },
    {
        'id':4,
        'itemName': 'Chicken Salad',
        'price': 6.75,
        'quantity': 1
    },
    {
        'id': 5,
        'itemName': 'Turkey Melt',
        'price': 5.25,
        'quantity': 1
    },
    {
        'id': 6,
        'itemName': 'House Salad',
        'price': 7.50,
        'quantity': 1
    }
]

var finalCartItems = [];


// Items above

function handleOnLoad(){
    populateCart();
}

function handleAddItem(id){
    var found = false;
    cart.forEach((item)=>{
        if(item.id==id){
            handleAddOne(id);
            found=true;
        }
    })
    if(!found){
        items.forEach((item)=>{
            if(item.id==id){
                cart.push(item);
            }
        })
    }
    populateCart();
}

function handleAddOne(id){
    cart.forEach((item)=>{
        if(item.id==id){
            item.quantity++;
        }
    })
    populateCart();
}

function handleSubOne(id){
    cart.forEach((item)=>{
        if(item.id==id){
            item.quantity--;
        }
    });
    populateCart();
}

function populateCart(){
    let html= "<table>";
    html += "<tr><th>Description</th><th style: \"text-align:center;\">Price</th><th>Quantity</th><th>Total</th></tr>";
    cart.forEach((item) =>{
      html+="<tbody><td>"+item.itemName+"</td>";
      html+="<td>$"+item.price+"</td>";
      html+="<td>"+item.quantity +"</td>";
      html+="<td>"+(item.quantity * item.price) +"</td>";
      html+="<td><button onclick=\"handleAddOne("+item.id+")\">+</button></td>";
      html+="<td><button onclick=\"handleSubOne("+item.id+")\">-</button></td></tbody>";
    //   html +="</table>";
    });
    document.getElementById("cart").innerHTML= html;
}

function getCartItems()
{
    var tbodys = document.querySelectorAll("tbody");

    tbodys = Array.from(tbodys);
    tbodys.shift();
    tbodys.forEach(tbody=>
        {
            var trs = tbody.children[0].children;
            console.log(trs);
            var cartItem = {
                itemName: trs[0].innerHTML,
                price: parseFloat(trs[1].innerHTML.substring(1)),
                quantity: parseInt(trs[2].innerHTML)
            }
            finalCartItems.push(cartItem);
        }
    );
    
    // console.log(tbodys);
    // console.log(finalCartItems);

}

function pushCartItems()
{
    getCartItems();

    const addCartItemsAPIURL = "https://localhost:5000/api/cartTotals";
    
    fetch(addCartItemsAPIURL, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(finalCartItems)
    }).then((response)=>{
        console.log(response);
        window.location.href = "./Calendar.html";
    })
}

/*
const checkout = document.getElementById("checkoutbutton");
checkout.addEventListener("click", (e) => {
alert("You have successfully logged in.");
window.location.href= "../resources/Calendar.html";
});
*/