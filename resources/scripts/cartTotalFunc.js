function postCart(OrderID)
{
    const allCartTotalAPIURL = "https://localhost:5000/api/cartTotal";

    fetch(allCartTotalAPIURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        // body: JSON.stringify()
    }).then((response)=>{
        console.log(response);
    })
}