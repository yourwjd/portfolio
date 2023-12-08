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
const mainLeft = document.querySelector(".flex .left");
const mainRight = document.querySelector(".flex .right");

const mainMiddle = document.querySelector(".flex .middle h3"); //span

let initialZoom = 1.0;
let distanceLeft = 0;
let distanceRight = 0;
let targetDistanceLeft = 0;
let targetDistanceRight = 0;
let moveSpeedLeft = 6;  // 왼쪽 이동 속도 설정
let moveSpeedRight = 7;  // 오른쪽 이동 속도 설정

let targetZoomLeft = initialZoom;
let targetZoomRight = initialZoom;
let currentZoomLeft = initialZoom;
let currentZoomRight = initialZoom;
const zoomSpeed = 0.1;

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        targetZoomLeft += zoomSpeed;
        targetZoomRight += zoomSpeed;
        targetDistanceLeft -= moveSpeedLeft; 
        targetDistanceRight += moveSpeedRight; 
    } else if (e.deltaY < 0 && targetZoomLeft > initialZoom) {
        targetZoomLeft -= zoomSpeed;
        targetZoomRight -= zoomSpeed;
        targetDistanceLeft += moveSpeedLeft; 
        targetDistanceRight -= moveSpeedRight; 
    }

    targetZoomLeft = Math.max(targetZoomLeft, initialZoom);
    targetZoomRight = Math.max(targetZoomRight, initialZoom);
});

function update() {
    currentZoomLeft += (targetZoomLeft - currentZoomLeft) * 0.1;
    currentZoomRight += (targetZoomRight - currentZoomRight) * 0.1;
    distanceLeft += (targetDistanceLeft - distanceLeft) * 0.1;
    distanceRight += (targetDistanceRight - distanceRight) * 0.1;

    mainLeft.style.transform = `scale(${currentZoomLeft}) translateX(${distanceLeft}vw)`;
    mainRight.style.transform = `scale(${currentZoomRight}) translateX(${distanceRight}vw)`;

    mainMiddle.style.width = `${distanceRight - distanceLeft}vw`;
    
    requestAnimationFrame(update);
}

update();