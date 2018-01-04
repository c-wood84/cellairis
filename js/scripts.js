function openNav() {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("hnav").style.display = "none";
    document.getElementById("x-nav").style.display = "block";

}

function closeNav() {
    document.getElementById("nav").style.height = "0";
    document.getElementById("x-nav").style.display = "none";
    document.getElementById("hnav").style.display = "block";
}