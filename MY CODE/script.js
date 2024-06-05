
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const x = document.querySelectorAll(".hidden");
x.forEach((el) => observer.observe(el));


// swiper slide 
const slider = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 100,
    speed: 3000,
    loop: true,
    autoplay: {
    delay:3000,
    },
})

load = () =>{
  
}