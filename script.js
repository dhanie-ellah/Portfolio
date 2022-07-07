let navbar = document.getElementById("navbar")

function responsive(){
    if (navbar.className == "navbar"){
        navbar.className = "responsive";
    } else{
        navbar.className = "navbar";
    }
}