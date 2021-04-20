const startorder = document.getElementById("startorder");

// the below syntax from research and is an API
startorder.addEventListener("click", (e) => {
        alert("You have begun your order.");
        window.location.href= "../resources/index.html";
})
function pushCartData(){
        const postCartAPIURL = "https://localhost:5000/api/reports";
        // var itemPost = "chicken parmesan";
        // itemPost = itemPost.toString();
        // var item = {
        //     cartid: 2,
        //     itemName: "Chicken Parmesan",
        //     price: 11.50,
        //     quantity: 1
        // }
        // console.log(itemPost);
        fetch(postCartAPIURL, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            }//,
        //     body: JSON.stringify(item)
        }).then((response)=>{
            console.log(response);
        //     getCart();
        })
}

// function cartTotal()
// {
    
// }