    const circle = document.querySelector(".circle");

    document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = (mouseX / window.innerWidth) * 100 + "vw";
    circle.style.top = (mouseY / window.innerHeight) * 100 + "vh";
    });