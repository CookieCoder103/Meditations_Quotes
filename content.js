document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateQuote);
});

function generateQuote() {
  const quotes = [

    "Be tolerant with others and strict with yourself.",

    "You don't have to turn this into something. It doesn't have to upset you.",

    "To live a good life: We have the potential for it. If we learn to be indifferent to what makes no difference.",

    "It's silly to try to escape other people's faults. They are inescapable. Just try to escape your own.",

    "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",

    "Because most of what we say and do is not essential. Ask yourself at every moment, 'Is this necessary?'",

    "The impediment to action advances action. What stands in the way becomes the way.",

    "It's unfortunate that this has happened. No. It's fortunate that this has happened and I've remained unharmed.",

    "You're better off not giving the small things more time than they deserve.",

    "If it is not right, do not do it, if it is not true, do not say it.",

    "Waste no more time arguing what a good man should be. Be one.",

    "It's all in how you perceive it. You're in control. You can dispense with misperception at will, like rounding the point.",

    "It's a disgrace in this life when the soul surrenders first while the body refuses to.",

    "The best revenge is not to be like your enemy.",

    "Just that you do the right thing. The rest doesn't matter.",

    "Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions.",

    "You shouldn't give circumstances the power to rouse anger, for they don't care at all.",

    "Take a good hard look at people's ruling principle, especially of the wise, what they run away from & what they seek out.",

    "Accept the things to which fate binds you and love the people with whom fate brings you together but do so with all your heart.",

    "Dig deep within yourself, for there is a fountain of goodness ever ready to flow if you will keep digging."
    
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quoteDisplay").textContent = randomQuote;
}
