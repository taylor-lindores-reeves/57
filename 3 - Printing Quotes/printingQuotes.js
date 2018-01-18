var printingQuote = function () {};

var arrayOfQuotes = [
    "we all are bundles of contradictions, and we manage to hang together by bringing out one side of ourselves at a given time.",
    "Douglas Hofstader",
    "First will what is necessary. Then love what you will.",
    "Irivin Yalom",
    "Experience is what you get when you didn't get what you wanted",
    "Howard Marks",
    "To avoid that Failure of Nerve for which history exact so merciless a penalty - we must have the courage to follow all technical extrapolations to their logical conlusion.",
    "Arthur C. Clarke",
    "We ought not to do to our future selves what it would be wrong to do to other people.",
    "Derek Parfit",
    "We demand rigidly defined areas of doubt and uncertainty!",
    "Douglas Adams",
    "If you have to worry about it you can't afford it.",
    "Warren Buffett",
    "Do not seek to follow in the footsteps of the wise; seek what they sought",
    "Matsuo Bashō",
    "Everything is vague to a degree you do not realize till you have tried to make it precise.",
    "Bertrand Russel",
    "Things are never as good, or as bad, as they may at first seem",
    "La Rochefoucauld",
    "The trouble with our system of upbringing is that it teaches us what to think not how to think.",
    "Krishnamurti",
    "There will come a time when you believe everything is finished. That will be the beginning.",
    "Louis L’Amour",
    "Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you’re probably being slow. Plus, either way, you need to be good at quickly recognizing and correcting bad decisions If you’re good at course correcting, being wrong may be less costly than you think, whereas being slow is going to be expensive for sure.",
    "Jeff Bezos",
    "You are never dedicated to something you have complete confidence in.",
    "Robert Pirsig",
    "If only it were all so simple! If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being and who is willing to destroy a piece of his own heart?",
    "Aleksandr Solzhenitsyn",
    "We are deterministic creatures living in a probabilistic universe",
    "Amos Tversky",
    "The secret to doing good research is always to be a little underemployed. You waste years by not being able to waste hours.",
    "Amos Tversky",
    "To acquire the habit of reading is to construct for yourself a refuge from almost all the miseries of life.",
    "Somerset Maugham",
    "Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over and through me. And when it has gone past I will turn to see its path. Where the fear has gone there will be nothing. Only I will remain.",
    "Unknown"
]

printingQuote.prototype.quote = function() {
     for(var a = 0; a < arrayOfQuotes.length; a++) {         
        quote = arrayOfQuotes[a]
        a++
        author = arrayOfQuotes[a]
        alert(author + " says, '" + quote + "'")
     }
}

var print = new printingQuote()
print.quote()

