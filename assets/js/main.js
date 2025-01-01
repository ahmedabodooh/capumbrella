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

// دالة لإضافة الأنيميشن للنصوص
const applyAnimation = (textElement) => {
    textElement.classList.add('show'); // إضافة الكلاس الذي يتحكم في الأنيميشن
};

// دالة لتبديل النصوص بين الأعمدة وتطبيق الأنيميشن
function changeLayout() {
    const toggleTextVisibility = (col, isVisible) => {
        const text = col.querySelector('.image-text');
        if (text) {
            if (isVisible) {
                setTimeout(() => applyAnimation(text), 500); // تأخير 500ms قبل أن يظهر النص
            } else {
                text.classList.remove('show'); // إزالة الأنيميشن عند إخفاء النص
            }
        }
    };

    if (col1.classList.contains('col-md-6')) {
        col1.classList.remove('col-md-6');
        col1.classList.add('col-md-3');
        col2.classList.remove('col-md-3');
        col2.classList.add('col-md-6');
        col3.classList.remove('col-md-3');
        col3.classList.add('col-md-3');

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

// إخفاء النصوص عند تحميل الصفحة
window.onload = function() {
    const textElements = document.querySelectorAll('.image-text');
    textElements.forEach(text => {
        text.classList.remove('show'); // إزالة الكلاس لإخفاء النصوص
    });

    // إضافة الأنيميشن لأول نص يظهر بعد 500ms
    const firstVisibleText = col1.querySelector('.image-text');
    if (firstVisibleText) {
        setTimeout(() => applyAnimation(firstVisibleText), 500); // تأخير 500ms قبل أن يظهر النص الأول
    }
};



// -------------------------------------------------------slider product 

const sliderContainer = document.getElementById('sliderContainer');
const productsWrapper = document.querySelector('.products-wrapper');
const arrowNext = document.getElementById('arrowNext');
const arrowBack = document.getElementById('arrowBack');

let cureentIndex20 = 0; // أول منتج
const moveDistance = 425; // المسافة التي يتحرك بها السلايدر عند الضغط على الأسهم

// وظائف الأسهم
arrowNext.addEventListener('click', () => {
    const maxIndex = productsWrapper.children.length - 1;
    if (cureentIndex20 < maxIndex) {
        cureentIndex20++;
        productsWrapper.style.transform = `translateX(-${moveDistance * cureentIndex20}px)`; // تحريك السلايدر بمقدار 350px
    }
});

arrowBack.addEventListener('click', () => {
    if (cureentIndex20 > 0) {
        cureentIndex20--;
        productsWrapper.style.transform = `translateX(-${moveDistance * cureentIndex20}px)`; // تحريك السلايدر بمقدار 350px
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
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('scroll-container');
    const shadow = container.attachShadow({mode: 'open'});

    shadow.innerHTML = `
        <style>
            .carousel-2 {
                position: relative;
                overflow: hidden;
                width: 100%;
                height: 72px;
            }
            .carousel-track-2 {
                display: flex;
                animation: scroll 10s linear infinite;
            }
            .carousel-item-2 {
                flex: 0 0 auto;
            }
            .carousel-item-2 img {
                width: 100px;
                height: 50px;
                object-fit: contain;
                margin-right: 30px;
            }
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-70%);
                }
            }
        </style>
        <div class="carousel-2">
            <div class="carousel-track-2">
                <!-- تكرار الصور لتظهر مع بعضها في شريط -->
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
                <div class="carousel-item-2"><img src="./assets/img/logo.png" alt="Logo 1"></div>
              
            </div>
        </div>
    `;
});


// ------------------circular-chart End-------------------------------
// جلب العناصر
const raisedFundBtn = document.getElementById("raised-fund-btn");
const getStartedBtn = document.getElementById("get-started-btn");
const marketsSection = document.getElementById("markets-section");
const exploreSection = document.getElementById("explore-section");

// دالة لتحريك الأزرار بناءً على حجم الشاشة
function adjustButtonsPosition() {
  if (window.innerWidth < 768) {
    // عند الشاشات الصغيرة، الأزرار تنتقل إلى "Markets"
    if (!marketsSection.contains(raisedFundBtn)) {
      marketsSection.appendChild(raisedFundBtn);
      marketsSection.appendChild(getStartedBtn);
    }
  } else {
    // عند الشاشات الكبيرة، الأزرار تبقى في قسمها الأصلي
    if (!exploreSection.contains(getStartedBtn)) {
      exploreSection.appendChild(getStartedBtn);
    }
    if (!marketsSection.contains(raisedFundBtn)) {
      marketsSection.appendChild(raisedFundBtn);
    }
  }
}

// تشغيل الدالة عند تحميل الصفحة أو تغيير حجم الشاشة
window.addEventListener("resize", adjustButtonsPosition);
window.addEventListener("DOMContentLoaded", adjustButtonsPosition);
// ---------------------------------------------
