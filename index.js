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
    const main = document.querySelector('#main');
    const zoomCircle = document.querySelector('#main .zoom');
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const scrollY = (window.scrollY / viewportWidth) * 100; //scrollY vw 단위로 계산
    let scale = 0;

    console.log(scrollY);
    if (scrollY > 0 && scrollY <= 45) {
        const progress = (scrollY) / 45;
        scale = 0 + (10- 0) * progress;
        zoomCircle.style.opacity = 1;
        main.style.position = 'fixed';
    } else if (scrollY > 45) {
        scale = 10;
        main.style.position = 'relative';
    }

    zoomCircle.style.transform = `translate(-50%, -50%) scale(${scale})`;

});


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
        scroll.style.top = 105 + "%";
    }
});

const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.1 
  };
  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { 
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)'; 
      } else { 
        entry.target.style.opacity = 0; 
        entry.target.style.transform = 'translateY(50px)'; 
      }
    });
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  const targets = document.querySelectorAll('.comment, #skill');
  targets.forEach(target => {
    target.style.transition = 'opacity 1s, transform 1s'; // 서서히 나타나고 사라지게 함
    target.style.opacity = 0;
    target.style.transform = 'translateY(50px)'; // 초기에는 아래로 조금 이동된 상태
    observer.observe(target); // 각 타겟에 대해 Intersection Observer를 적용함
  });