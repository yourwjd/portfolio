//#main 섹션

//커서를 따라오는 마우스
const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
const mouseX = e.clientX;
const mouseY = e.clientY;
circle.style.left = (mouseX / window.innerWidth) * 100 + "vw";
circle.style.top = (mouseY / window.innerHeight) * 100 + "vh";
});

//스크롤 시 텍스트 확대
const mainZooms = document.querySelectorAll(".flex div");
const mainLeft = document.querySelector(".flex .left");
const mainRight = document.querySelector(".flex .right");

const mainMiddle = document.querySelector(".flex .middle span"); //span

let initialZoom = 1.0;
let targetZoom = initialZoom;
let currentZoom = initialZoom;
let distance = 0;
let targetDistance = 0;
const zoomSpeed = 0.1;
const moveSpeed = 3;

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        targetZoom += zoomSpeed;
        targetDistance += moveSpeed;
    } else if (e.deltaY < 0 && targetZoom > initialZoom) {
        targetZoom -= zoomSpeed;
        targetDistance -= moveSpeed;
    }

    targetZoom = Math.max(targetZoom, initialZoom); //기존 스케일 유지
});

//휠 이벤트 부드럽게
function update() {
    currentZoom += (targetZoom - currentZoom) * 0.1;
    distance += (targetDistance - distance) * 0.1;

    mainZooms.forEach(mainZoom => {
        mainZoom.style.transform = `scale(${currentZoom})`;
    });

    mainLeft.style.transform = `scale(${currentZoom}) translateX(-${distance}vw)`;
    mainRight.style.transform = `scale(${currentZoom}) translateX(${distance}vw)`;

    mainMiddle.style.width = `${distance}vw`; //span width 조정

    requestAnimationFrame(update); //화면 업데이트마다 함수 호출
}

update();

//스크롤 막기
// const servey = document.querySelector('servey');
// const serveygraph = document.querySelector('serveygraph');

// serveygraph.addEventListener('wheel', function (e) {
//     var speed = 650;  // 이동 속도
//     var currentLeft = parseInt(window.getComputedStyle(serveygraph).left, 10);

//     // serveygraph 이동 가능 범위 내에서만 serveygraph를 이동시키고 기본 스크롤 동작 방지
//     if (e.deltaY > 0 && currentLeft > -1000) {
//         serveygraph.style.left = Math.max(-1000, currentLeft - speed) + 'px';
//         e.preventDefault();
//     } else if (e.deltaY < 0 && currentLeft < 200) {
//         serveygraph.style.left = Math.min(200, currentLeft + speed) + 'px';
//         e.preventDefault();
//     }
//     // serveygraph 이동 가능 범위를 벗어나면 기본 스크롤 동작
// }, false);