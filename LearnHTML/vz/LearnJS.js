const navmenu = document.querySelector('.nav-menu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);

function show() {
    navmenu.style.display = 'flex';
    navmenu.style.top = '78';
}

const text = document.querySelector('.first-typing');

const textLoad =  () => {
    setTimeout (() => {
        text.textContent = "UI/UX DESIGNER";
    }, 0);
    setTimeout (() => {
        text.textContent = "FRONT END DEVELOPER";
    }, 4000);
    setTimeout (() => {
        text.textContent = "MACHINE LEARNING";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);