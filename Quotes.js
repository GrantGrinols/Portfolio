var ArrayofQuotes = new Array();

 ArrayofQuotes=["All our dreams can come true if we have the courage to pursue them - Walt Disney",
"Failure is the opportunity to begin again more intelligently - Henry Ford",
"Every experience I have is perfect for my own growth - Louise Hay",
"Nothing is more beautiful than honesty - Steven Aitchison",
"Don't cry because it's over; smile because it happened - unknown",
"The people who are crazy enough to think they can change the world are the ones who do - Steve Jobs",
"Be yourself; everyone else is already taken - Oscar Wilde",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe - Albert Einstein",
"If you tell the truth, you don't have to remember anything - Mark Twain",
"Darkness cannot drive out darkness: only light can do that - Martin Luther King Jr.",
"A day without sunshine is like, you know, night - Steve Martin",
"If you are successful, you will win false friends and true enemies. Succeed anyway - Kent M. Keith",
"Being deeply loved by someone gives you strength - Lao Tzu",
"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends - J.K. Rowling",
"If you judge people, you have no time to love them - Mother Teresa",
"There is no greater agony than bearing an untold story inside you - Maya Angelou",
"Everything you can imagine is real - Pablo Picasso",
"We don't see things as they are, we see them as we are - Anaïs Nin",
"Sometimes the questions are complicated and the answers are simple - Dr. Seuss",
"We read to know we're not alone - William Nicholson",
"All you need is love. But a little chocolate now then doesn't hurt - Charles M. Schulz",
"Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind - William Shakespeare",
"Folks are usually about as happy as they make their minds up to be - Abraham Lincoln",
"Do what you can, with what you have, where you are - Theodore Roosevelt",
"One good thing about music, when it hits you, you feel no pain - Bob Marley",
"Success is not final, failure is not fatal: it is the courage to continue that counts - Winston S. Churchill",
"Love is like the wind, you can't see it but you can feel it - Nicholas Sparks",
"you don't love someone because they're perfect, you love them in spite of the fact that they're not - Jodi Picoult",
"Some people never go crazy. What truly horrible lives they must lead - Charles Bukowski",
"If you can make a woman laugh, you can make her do anything - Marilyn Monroe",
"Do one thing every day that scares you - Eleanor"

];
const date = new Date();
const Day = date.getDate()-1;
let DayInt = 0;
 DayInt = parseInt(Day);
function FetchQuote(){
    document.getElementById('QuoteoftheDay').innerText = ArrayofQuotes[DayInt];
}
console.log(ArrayofQuotes[DayInt]);

console.log("Today is "+DayInt);
FetchQuote();