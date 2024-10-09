function switchImage(){
    const image = document.querySelector("img");
    const images = [
        "./images/isaac1.jpg",
    ]
    if (image.src == images[0]){
        image.src = images[1];
    } else {
        image.src = images[0];
    }
    image.setAttribute("alt", "image")
}
switchImage();
 
const quotes = [
    {
        text: "Let me rizz you up. AHHHHH YOU'RE A MAN",
        person: "Isaac Trost",
        image: "./images/isaac1.jpg"
    },
    {
        text: "Stop being a US citizen",
        person: "Ryan Vrobel",
        image: "./images/ryan.png"
    },
    {
        text: "BOO!",
        person: "Hacker Man",
        image: "./images/isaac.jpg"
    },
    {
        text: "Alright he might've known we were here",
        person: "Mazecow (Isaac)",
        image: "./images/channels4_profile.jpg"
    },
    {
        text: "it's jokin' time",
        person: "persona 5",
        image: "./images/Phantom_render.png"
    }
];
 
const imgElement = document.getElementById("quote-image");
const textElement = document.getElementById("quote-text");
const authorElement = document.getElementById("quote-author");
const button = document.getElementById("button");
 
button.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    textElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.person}`;
    imgElement.src = randomQuote.image;
});