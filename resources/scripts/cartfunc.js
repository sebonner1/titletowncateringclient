console.log("javascript loaded");
function getCart(){
    const allCartAPIURL = "https://localhost:5000/api/cartAPI";

    fetch(allCartAPIURL).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((CartItem)=>{
            html += "<li id = item" +CartItem.cartid+" pricea = " + CartItem.price + "",
            html += "id = item" + CartItem.cartid+ " quantitya = "+ CartItem.quantity+ ">" +CartItem.quantity,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += CartItem.itemName,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "$" + CartItem.price,
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "&nbsp",
            html += "<button onclick=\"addCart("+CartItem.cartid+")\">+</button>",
            html += "<button onclick=\"delCart("+CartItem.cartid+")\">-</button>" + "</li>"
        })
        html += "</ul>";
        document.getElementById("cartitems").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}
function addCart(cartid){
    const addCartAPIURL = "https://localhost:5000/api/cartAPI/" + cartid;
    console.log(cartid);
    var item = {
        quantity : parseInt(document.getElementById("item"+cartid).getAttribute("quantitya")),
        price: parseFloat(document.getElementById("item"+cartid).getAttribute("pricea")),
    }
    fetch(addCartAPIURL, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        myCart = item;
        console.log(response);
        getCart();
    })
}
function delCart(cartid){
    const delCartAPIURL = "https://localhost:5000/api/cartAPI/" + cartid;
    console.log(cartid);
    
    fetch(delCartAPIURL, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}
function chickenparmfunction(){
    const postCartAPIURL = "https://localhost:5000/api/cartAPI";
    var itemPost = "chicken parmesan";
    itemPost = itemPost.toString();
    var item = {
        cartid: 2,
        itemName: "Chicken Parmesan",
        price: 11.50,
        quantity: 1
    }
    console.log(itemPost);
    fetch(postCartAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}
function chocchipfunction(){
    const postCartAPIURL = "https://localhost:5000/api/cartAPI";
    var itemPost = "chocolate chip cookie";
    itemPost = itemPost.toString();
    var item = {
        cartid: 2,
        itemName: "Chocolate Chip Cookie(s)",
        price: 2.50,
        quantity: 1
    }
    console.log(itemPost);
    fetch(postCartAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}
function vegburgfunction(){
    const postCartAPIURL = "https://localhost:5000/api/cartAPI";
    var itemPost = "veggie burger";
    itemPost = itemPost.toString();
    var item = {
        cartid: 2,
        itemName: "Veggie Burger",
        price: 10.00,
        quantity: 1
    }
    console.log(itemPost);
    fetch(postCartAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}
function chicksaladfunction(){
    const postCartAPIURL = "https://localhost:5000/api/cartAPI";
    var itemPost = "chicken salad sandwich";
    itemPost = itemPost.toString();
    var item = {
        cartid: 2,
        itemName: "Chicken Salad Sandwich",
        price: 6.75,
        quantity: 1
    }
    console.log(itemPost);
    fetch(postCartAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}
function turkfunction(){
    const postCartAPIURL = "https://localhost:5000/api/cartAPI";
    var itemPost = "turkey melt";
    itemPost = itemPost.toString();
    var item = {
        cartid: 2,
        itemName: "Turkey Melt",
        price: 5.25,
        quantity: 1
    }
    console.log(itemPost);
    fetch(postCartAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}
function housesaladfunction(){
    const postCartAPIURL = "https://localhost:5000/api/cartAPI";
    var itemPost = "house salad";
    itemPost = itemPost.toString();
    var item = {
        cartid: 2,
        itemName: "House Salad",
        price: 7.5,
        quantity: 1
    }
    console.log(itemPost);
    fetch(postCartAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(item)
    }).then((response)=>{
        console.log(response);
        getCart();
    })
}