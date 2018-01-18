if (a = prompt("What is your name?")) {

    b = [
        `Hello ${a}`, 
        `Fuck you ${a}`, 
        `You're a noob, ${a}`, 
        `I love you ${a}`, 
        `Hello ${a}, nice to meet you...`]
    
    c = Math.floor(5*Math.random());

    alert(b[c])

} else {
    alert("Bye then! :|")
}

