var mobileMenu = document.querySelector('.mobile-menu');
var mobileNavbar = document.querySelector('#responsive-navbar')
var clickMe = document.getElementsByClassName("skill-items__item");

mobileMenu.addEventListener("click", function() {
    if (mobileNavbar.style.display === "none") {
        mobileNavbar.style.display = "flex";
    } else {
        mobileNavbar.style.display = "none";
    }

})


for (i = 0; i < clickMe.length; i++) {
    clickMe[i].addEventListener("click", function() {


        var ShowMe = this.firstElementChild;



        if (ShowMe.style.display === "block") {
            ShowMe.style.display = "none";
        } else {
            ShowMe.style.display = "block";
        }

    });
}
console.log(mobileMenu);