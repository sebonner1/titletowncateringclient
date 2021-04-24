var cart = [];
var items = [
    {
        'id': 1,
        'description': 'Chicken Parm',
        'price': 11.50,
        'count': 1
    },
    {
        'id':2,
        'description': 'Chocolate Chip Cookie(s)',
        'price': 2.50,
        'count': 1
    },
    {
        'id': 3,
        'description': 'Veggie Burger',
        'price': 10.00,
        'count': 1
    },
    {
        'id':4,
        'description': 'Chicken Salad',
        'price': 6.75,
        'count': 1
    },
    {
        'id': 5,
        'description': 'Turkey Melt',
        'price': 5.25,
        'count': 1
    },
    {
        'id': 6,
        'description': 'House Salad',
        'price': 7.50,
        'count': 1
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
            item.count++;
        }
    })
    populateCart();
}

function handleSubOne(id){
    cart.forEach((item)=>{
        if(item.id==id){
            item.count--;
        }
    });
    populateCart();
}

function populateCart(){
    let html= "<table>";
    html += "<tr><th>Description</th><th style: \"text-align:center;\">Price</th><th>Count</th><th>Total</th></tr>";
    cart.forEach((item) =>{
      html+="<tbody><td>"+item.description+"</td>";
      html+="<td>$"+item.price+"</td>";
      html+="<td>"+item.count +"</td>";
      html+="<td>"+(item.count * item.price) +"</td>";
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
    })
}

/*
const checkout = document.getElementById("checkoutbutton");
checkout.addEventListener("click", (e) => {
alert("You have successfully logged in.");
window.location.href= "../resources/Calendar.html";
});
*/