function postCart()
{
    console.log("made it to the post cart");
    const allCartTotalAPIURL = "https://localhost:5000/api/cartTotal";
    
    fetch(allCartTotalAPIURL, {

        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify() // use this here
        // console.log("made oit past the fetch"),
    }).then((response)=>{
        console.log(response);
    })
}