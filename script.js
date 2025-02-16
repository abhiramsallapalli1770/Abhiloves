const loveQuotes = [
    "DEAR RAJESHWARI YOU ARE THE MOST PRECIOUS POSSESSION I'VE EVER HAD IN MY ENTIRE LIFE. ❤️",
    "From the moment i met you i knew you are something special to me",
    "Will you be my valantine... and my forever love"
];


function showLoveQuote() {
   
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    const quote = loveQuotes[randomIndex];

    const quoteElement = document.getElementById("love-quote");
    quoteElement.textContent = quote;

    
    const quoteSection = document.getElementById("quote-section");
    quoteSection.classList.remove("hidden");
}