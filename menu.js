 window.addEventListener('scroll', function(){
        var nav = document.querySelector("nav-main");
        nav.classList.toggle('active', window.scrollY >0)
})