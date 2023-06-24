let root = document.documentElement;

let colorSwitch = document.querySelector('.switch-color-mode');

let lightMode = true;
let darkMode = false;

colorSwitch.addEventListener('click', () => {
    switchColors();
})


function switchColors() {
    if (lightMode) {
        //run dark mode
        root.style.setProperty('--main-bg-color', 'black');
        root.style.setProperty('--main-text-color', 'white');
        root.style.setProperty('--main-display-color', 'black');
        root.style.setProperty('--main-calc-color', 'black');
        root.style.setProperty('--main-bttn-color', 'black');
        root.style.setProperty('--main-bttn-hover', 'black');
        root.style.setProperty('--operator-bttns-color', 'black');
        root.style.setProperty('--operator-bttns-text-color', 'black');
        root.style.setProperty('--equals-bttn-color', 'black');
        root.style.setProperty('--clear-bttn-color', 'black');
        darkMode = true;
        lightMode = false

    } else if (darkMode){
        //run light mode
        root.style.setProperty('--main-bg-color', 'rgb(253, 253, 250)');
        root.style.setProperty('--main-text-color', 'black');
        root.style.setProperty('--main-display-color', 'rgb(253, 253, 250)');
        root.style.setProperty('--main-calc-color', 'rgb(253, 189, 57)');
        root.style.setProperty('--main-bttn-color', 'rgb(247, 247, 247)');
        root.style.setProperty('--main-bttn-hover', 'rgb(226, 226, 226)');
        root.style.setProperty('--operator-bttns-color', 'black');
        root.style.setProperty('--operator-bttns-text-color', 'white');
        root.style.setProperty('--equals-bttn-color', 'rgb(135, 229, 119)');
        root.style.setProperty('--clear-bttn-color', 'rgb(230, 65, 36)');
        lightMode = true;
        darkMode = false;
    }
}