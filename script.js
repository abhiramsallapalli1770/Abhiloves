
const loveQuotes = [
    "DEAR AMMULU BANGAARAM YOU ARE THE MOST PRECIOUS POSSESSION I'VE EVER HAD IN MY ENTIRE LIFE. ❤️",
    "nee eng irandal una naa tedi varuvey.💑",
    "nuvvantey naaku praanam ye ammulu. ",
    "love you soo much ammulu bangaaram."
];


function showLoveQuote() {
   
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    const quote = loveQuotes[randomIndex];

    const quoteElement = document.getElementById("love-quote");
    quoteElement.textContent = quote;

    
    const quoteSection = document.getElementById("quote-section");
    quoteSection.classList.remove("hidden");
}
