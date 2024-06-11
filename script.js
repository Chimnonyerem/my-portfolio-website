
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
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

document.getElementById('CV').addEventListener('click', function() {
    // URL of the PDF file
    
    var pdfUrl = '/images/resume.pdf';
    
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
});


// document.getElementById('CV').onclick = function() {
//     document.getElementById('popup').style.display = 'block';
// };

// document.getElementById('closePopup').onclick = function() {
//     document.getElementById('popup').style.display = 'none';
// };

// window.onclick = function(event) {
//     if (event.target == document.getElementById('popup')) {
//         document.getElementById('popup').style.display = 'none';
//     }
// };

// document.getElementById('CV').addEventListener('click', function() {
//     var pdfContainer = document.getElementById('pdfContainer');
//     var pdfViewer = document.getElementById('pdfViewer');
//     pdfViewer.src = '/images/resume.pdf';
//     // pdfContainer.style.display = 'block';
//     window.open(pdfContainer, '_blank');
// });