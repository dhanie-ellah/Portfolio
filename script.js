let navbar = document.getElementById("navbar")

function responsive(){
    if (navbar.className === "links"){
        navbar.className = "responsive";
    } else{
        navbar.className = "links";
    }
}