const mainCtn = document.querySelector("#main")
const color = document.querySelectorAll(".color")

color.forEach((color) => {
    color.addEventListener("click", (e) => {
        if (e.target.id == "red") {
            mainCtn.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "blue") {
            mainCtn.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "green") {
            mainCtn.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "yellow") {
            mainCtn.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "violet") {
            mainCtn.style.backgroundColor = e.target.id;
        }

    })
})

// const color1 = document.querySelector("#color1")
// const color2 = document.querySelector("#color2")
// const color3 = document.querySelector("#color3")
// const color4 = document.querySelector("#color4")
// const color5 = document.querySelector("#color5")


// flag = 0;


// color1.addEventListener("click", () => {
//     if (flag == 0) {
//         mainCtn.style.backgroundColor = "red"
//         console.log("the color has changed")
//         flag = 1;
//     }
//     else {
//         mainCtn.style.backgroundColor = "white"
//         flag = 0;
//     }
// })


// color2.addEventListener("click", () => {
//     if (flag == 0) {
//         mainCtn.style.backgroundColor = "royalblue"
//         console.log("the color has changed")
//         flag = 1;
//     } else {
//         mainCtn.style.backgroundColor = "white"
//         flag = 0;
//     }

// })


// color3.addEventListener("click", () => {
//     if (flag == 0) {
//         mainCtn.style.backgroundColor = "green"
//         console.log("the color has changed")
//         flag = 1;
//     } else {
//         mainCtn.style.backgroundColor = "white"
//         flag = 0;
//     }

// })


// color4.addEventListener("click", () => {
//     if (flag == 0) {
//         mainCtn.style.backgroundColor = "yellow"
//         console.log("the color has changed")
//         flag = 1;
//     } else {
//         mainCtn.style.backgroundColor = "white"
//         flag = 0;
//     }

// })

// color5.addEventListener("click", () => {
//     if (flag == 0) {
//         mainCtn.style.backgroundColor = "violet"
//         console.log("the color has changed")
//         flag = 1;
//     } else {
//         mainCtn.style.backgroundColor = "white"
//         flag = 0;
//     }

// })