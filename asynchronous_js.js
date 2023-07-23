// ASYNCHRONOUS JS -used to prevent blocking the main thread since JS is single threaded (can only execute one operation ata  time)
//CALLBACKS- passed as an argument to another function and executed later once the operation is completed

let fetchData = (callback) =>{
    setTimeout(
        () => {
            let data = "some data from the server";
            callback(data)

        }, 2000
    )
}

fetchData( (result) => {
    console.log(result)
})