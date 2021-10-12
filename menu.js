const nav = document.querySelector('.nav-main')

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY >0)
    })