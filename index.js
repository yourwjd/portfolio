//header

//#main 섹션
//커서를 따라오는 마우스
const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
const mouseX = e.clientX;
const mouseY = e.clientY;
circle.style.left = (mouseX / window.innerWidth) * 100 + "vw";
circle.style.top = (mouseY / window.innerHeight) * 100 + "vh";
});

//원 커지게
window.addEventListener('scroll', function() {
    const zoomCircle = document.querySelector('#main .zoom');
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const scrollY = (window.scrollY / viewportWidth) * 100; //scrollY vw 단위로 계산
    let scale = 0;

    console.log(scrollY);
    if (scrollY > 0 && scrollY <= 26) {
        const progress = (scrollY) / 26;
        scale = 0 + (6- 0) * progress;
    } else if (scrollY > 26) {
        scale = 10;
    }

    zoomCircle.style.transform = `translate(-50%, -50%) scale(${scale})`;

    if (scale >= 10) {
        event.preventDefault();
      }
    }, { passive: false });


//스크롤 숨기기
const scroll = document.querySelector("#scroll");

window.addEventListener("scroll", function () { 
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition === 0) { 
        scroll.style.opacity = 1;
        scroll.style.top = 95 + "%";
    }
    else if (currentScrollPosition > 0) { 
        scroll.style.opacity = 0;
        scroll.style.top = 100 + "%";
    }
});

