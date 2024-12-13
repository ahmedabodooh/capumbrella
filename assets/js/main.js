// سجل ScrollTrigger و GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const elementsRight = document.querySelectorAll('.animate-from-right');
    const elementsLeft = document.querySelectorAll('.animate-from-left');
    const elementsBottom = document.querySelectorAll('.animate-from-bottom');
    const elementsTop = document.querySelectorAll('.animate-from-top');
    const elementsInside = document.querySelectorAll('.animate-from-inside');
    const elementsOutside = document.querySelectorAll('.animate-from-outside');

    gsap.set(elementsRight, { opacity: 1, visibility: "visible" });
    gsap.set(elementsLeft, { opacity: 1, visibility: "visible" });
    gsap.set(elementsBottom, { opacity: 1, visibility: "visible" });
    gsap.set(elementsTop, { opacity: 1, visibility: "visible" });
    gsap.set(elementsInside, { opacity: 1, visibility: "visible" });
    gsap.set(elementsOutside, { opacity: 1, visibility: "visible" });

    elementsRight.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            x: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onStart: () => {
                element.classList.add("visible");
            },
        });
    });

    elementsLeft.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            x: -100,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onStart: () => {
                element.classList.add("visible");
            },
        });
    });

    elementsBottom.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onStart: () => {
                element.classList.add("visible");
            },
        });
    });

    elementsTop.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: -150,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onStart: () => {
                element.classList.add("visible");
            },
        });
    });

    // Animation for elements coming from inside
    elementsInside.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            scale: 0,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onStart: () => {
                element.classList.add("visible");
            },
        });
    });

    // Animation for elements coming from outside
    elementsOutside.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            x: 500,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onStart: () => {
                element.classList.add("visible");
            },
        });
    });
});
// ------------------section one on home page-------------------
const col1 = document.getElementById('col1');
const col2 = document.getElementById('col2');
const col3 = document.getElementById('col3');

function changeLayout() {
    const toggleTextVisibility = (col, isVisible) => {
        const text = col.querySelector('.image-text');
        if (text) {
            if (isVisible) {
                text.classList.add('show'); 
            } else {
                text.classList.remove('show'); 
            }
        }
    };

    if (col1.classList.contains('col-md-6')) {
        // تعديل الأحجام
        col1.classList.remove('col-md-6');
        col1.classList.add('col-md-3');
        col2.classList.remove('col-md-3');
        col2.classList.add('col-md-6');
        col3.classList.remove('col-md-3');
        col3.classList.add('col-md-3');

        // تحديث النصوص
        toggleTextVisibility(col1, false);
        toggleTextVisibility(col2, true);
        toggleTextVisibility(col3, false);
    } else if (col2.classList.contains('col-md-6')) {
        col1.classList.remove('col-md-3');
        col1.classList.add('col-md-3');
        col2.classList.remove('col-md-6');
        col2.classList.add('col-md-3');
        col3.classList.remove('col-md-3');
        col3.classList.add('col-md-6');

        toggleTextVisibility(col1, false);
        toggleTextVisibility(col2, false);
        toggleTextVisibility(col3, true);
    } else {
        col1.classList.remove('col-md-3');
        col1.classList.add('col-md-6');
        col2.classList.remove('col-md-3');
        col2.classList.add('col-md-3');
        col3.classList.remove('col-md-6');
        col3.classList.add('col-md-3');

        toggleTextVisibility(col1, true);
        toggleTextVisibility(col2, false);
        toggleTextVisibility(col3, false);
    }
}

// تشغيل التبديل كل 3 ثوانٍ
setInterval(changeLayout, 3000);
// -------------------------------------------------------slider product 
const sliderContainer = document.getElementById('sliderContainer');
const productsWrapper = document.querySelector('.products-wrapper');
const arrowNext = document.getElementById('arrowNext');
const arrowBack = document.getElementById('arrowBack');

let currentIndex = 0; // أول منتج
const productWidth = productsWrapper.querySelector('.product').offsetWidth; // عرض المنتج

// وظائف الأسهم
arrowNext.addEventListener('click', () => {
    const maxIndex = productsWrapper.children.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        productsWrapper.style.transform = `translateX(-${productWidth * currentIndex}px)`;
    }
});

arrowBack.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        productsWrapper.style.transform = `translateX(-${productWidth * currentIndex}px)`;
    }
});

// إضافة دعم اللمس
let startX = 0;
let endX = 0;

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        arrowNext.click(); // تحريك للأمام
    } else if (startX < endX - 50) {
        arrowBack.click(); // تحريك للخلف
    }
});
// -------------------------founder pool page -------------------------------
// ------------------circular-chart start-------------------------------


// ------------------circular-chart End-------------------------------