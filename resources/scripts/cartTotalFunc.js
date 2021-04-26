function postCart(cart)
{
    console.log("made it to the post cart");
    const allCartTotalAPIURL = "https://ttcapi.herokuapp.com/api/cartTotal";
    
    fetch(allCartTotalAPIURL, {

        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(cart) // use this here
        // console.log("made oit past the fetch"),
    }).then((response)=>{
        console.log(response);
    })
}