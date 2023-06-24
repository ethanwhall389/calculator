let root = document.documentElement;

let colorSwitch = document.querySelector('input');


colorSwitch.addEventListener('click', () => {
    switchColors();
})


function switchColors() {
    if (colorSwitch.checked == true) {
        //run dark mode
        root.style.setProperty('--main-bg-color', 'black');
        root.style.setProperty('--main-header-footer-color', 'rgb(34, 34, 47)');
        root.style.setProperty('--main-text-color', 'white');
        root.style.setProperty('--main-display-color', 'black');
        root.style.setProperty('--main-calc-color', 'rgb(34, 34, 47)');
        root.style.setProperty('--main-bttn-color', 'black');
        root.style.setProperty('--main-bttns-text-color', 'white');
        root.style.setProperty('--main-bttn-hover', 'rgb(28, 28, 28)');
        root.style.setProperty('--operator-bttns-color', 'black');
        root.style.setProperty('--operator-bttns-text-color', 'white');
        root.style.setProperty('--equals-bttn-color', 'black');
        root.style.setProperty('--clear-bttn-color', 'black');
        root.style.setProperty('--main-link-color', 'rgba(253, 189, 57)');


    } else if (colorSwitch.checked == false){
        //run light mode
        root.style.setProperty('--main-bg-color', 'rgb(253, 253, 250)');
        root.style.setProperty('--main-header-footer-color', 'rgba(253, 189, 57)');
        root.style.setProperty('--main-text-color', 'black');
        root.style.setProperty('--main-display-color', 'rgb(253, 253, 250)');
        root.style.setProperty('--main-calc-color', 'rgb(253, 189, 57)');
        root.style.setProperty('--main-bttn-color', 'rgb(247, 247, 247)');
        root.style.setProperty('--main-bttns-text-color', 'black');
        root.style.setProperty('--main-bttn-hover', 'rgb(226, 226, 226)');
        root.style.setProperty('--operator-bttns-color', 'black');
        root.style.setProperty('--operator-bttns-text-color', 'white');
        root.style.setProperty('--equals-bttn-color', 'rgb(135, 229, 119)');
        root.style.setProperty('--clear-bttn-color', 'rgb(230, 65, 36)');
        root.style.setProperty('--main-link-color', 'white');

    }
}