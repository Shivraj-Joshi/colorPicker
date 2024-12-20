//creater a function that generates a random color

const randomColor = function () {
    const hex = '00123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color;

};

// console.log(randomColor()); random color has been generated sucessfully -------------------------


const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const show = document.querySelector("#display")

let intervalId;
const startChangeColor = () => {

    let changeBg = function () {
        show.style.backgroundColor = randomColor();
    }

    intervalId = setInterval(changeBg, 1000);

}

const stopChangingColor = () => {
    clearInterval(intervalId);
}

start.addEventListener("click", startChangeColor);
stop.addEventListener("click", stopChangingColor);