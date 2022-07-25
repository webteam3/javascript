const colors = ["red", "blue", "yellow", "lightgreen", "white", "green", "pink", "purple", "orange"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color_span");

btn.addEventListener("click",
    function() {
        //get random number between 0 - 8 
        const randomNumber = getRandomNumber();

        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

//-----------------------------------------------------