// step 1 - create onloader handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {
        bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

// step 2 - generate RGB color 
function generateRGBColor () {
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);

    return `rgb(${red},${green},${blue})`
}

// step 3 - collect all necessary references

// handle click events