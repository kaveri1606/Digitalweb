
document.getElementById('contactBtn').onclick = function() {
    document.getElementById('contactForm').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('contactForm').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contactForm')) {
        document.getElementById('contactForm').style.display = 'none';
    }
}

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function currentSlide(n) {
    slideIndex = n;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides();

function changeImage(imageUrl) {
    document.getElementById('main-image1').src = imageUrl;
    
    // Remove active class from all text boxes
    const textBoxes = document.querySelectorAll('.text-box1');
    textBoxes.forEach(box => {
        box.classList.remove('active');
    });
    
    // Add active class to the clicked text box
    event.currentTarget.classList.add('active');
}

/*-------------------Last Section-----------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.card-title');
    const speed = 100; // The lower the slower

    const animateCounter = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower increment to slow down the count
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

