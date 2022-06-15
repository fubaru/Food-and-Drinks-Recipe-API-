

/*------toggle navbar-------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
    console.log(toggleNav)
}

/* close nav when clicking on a nav item*/
document.addEventListener("click", function(e){
    if(e.target.closet(".nav-item")){
        toggleNav();
    }
}


)


