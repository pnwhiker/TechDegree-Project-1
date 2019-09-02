
// Array of objects containing a seties of carefully selected quotes, each assigned a source, citation & year

var quotes = [
    {
        quote: "I solemnly swear that I am up to no good.",
        source: "J.K. Rowling",
        citation: "Harry Potter & The Prisoner of Azkaban",
        year: "1999"
    },

    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        source: "Winston S. Churchill",
        citation: "The Last Lion",
        year: "1944"
    },

    {
        quote: "Reality continues to ruin my life.",
        source: "Bill Watterson",
        citation: "The Complete Calvin & Hobbes",
        year: "2005"
    },

    {
        quote: "Strange women lying in ponds, distributing swords, is no basis for a system of government!",
        source: "Monty Python & The Holy Grail",
        citation: "",
        year: "1975"
    },

    {
        quote: "If you don't know what you want,\" the doorman said, \"you end up with a lot you don't.",
        source: "Chuck Palahniuk",
        citation: "Fight Club",
        year: "1996"
    },

    {
        quote: "A man on foot, on horseback or on a bicycle will see more, feel more, enjoy more in one mile than the motorized tourists can in a hundred miles.",
        source: "Edward Abbey",
        citation: "Desert Solitaire",
        year: "1968"
    },

    {
        quote: "Good design is as little design as possible.",
        source: "Yvon Chouinard",
        citation: "Let My People Go Surfing: The Education of a Reluctant Businessman",
        year: "2005"
    },

    {
        quote: "Now, is the dramatic moment of fate, Watson, when you hear a step upon the stair which is walking into your life, and you know not whether for good or ill.",
        source: "Sir Arthur Conan Doyle",
        citation: "A Study in Scarlet",
        year: "1887"
    },

    {
        quote: "Humans don’t mind hardship, in fact they thrive on it; what they mind is not feeling necessary. Modern society has perfected the art of making people not feel necessary. It's time for that to end.",
        source: "Sebastian Junger",
        citation: "Tribe: On Homecoming & Belonging",
        year: "2016"
    }
]

// Logging value of quotes array to the JS Console for testing

console.log(quotes);


// Function getRandomQuote which selects a rounded (down) random number based on the number of objects in the array of quotes
// and then selects a quote from the quotes array based on that random number generated, that value is then logged as the variable 'result'


function getRandomQuote() {

    var quoteIndex = (Math.floor(Math.random() * quotes.length ) +1);

    for (var i = 0; i < quotes.length; i++) { 
                
            var randomQuote = quotes[quoteIndex]; 
           
          } 

    return randomQuote;
    
}


// Function to output a random quote from the array of objects and assign it and it's properties to an HTML string using conditional statements for citation and year

function printQuote() {

    var displayRandomQuote = getRandomQuote();

    var htmlString = '';

    htmlString = '<p class="quote">' + displayRandomQuote.quote + '</p>' ; 

    htmlString += '<p class="source">' + displayRandomQuote.source ;



    if ("citation" in displayRandomQuote) {

        htmlString += '<span class="citation">' + displayRandomQuote.citation ;

    }

    if ("year" in displayRandomQuote) {

        htmlString += '<span class="year">' + displayRandomQuote.year ;

    }

document.getElementById('quote-box').innerHTML = htmlString ;

}

// call the printquote function

printQuote();

// Uncertain what this line of code is doing quite honestly

document.getElementById('loadQuote').addEventListener("click", printQuote, false);