//arrow functions
const productOfNum = (a,b) => {
    return (
        console.log(a*b)
    );
}
productOfNum(6,8);

// default parameters on functions
const Greet = (guest = "guest") => {
    return(
      console.log("hello " +  guest)
    )
}
Greet("Kevoh")
