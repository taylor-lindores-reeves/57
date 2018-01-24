var bcrypt = dcodeIO.bcrypt;
var map = {
    Tay: 'Xtlr',
    Rish: 'Xrk',
    Dan: 'Xdm',
    Jack: 'Xjm'
}
const username = prompt('What is your username?')
const password = prompt('What is you password?')
document.querySelector('#output').innerHTML = `I don't know you.`

for (key in map) {
    map[key] = bcrypt.hashSync(map[key], 8);
}

console.log(map[username])

bcrypt.compare(password, map[username], function(err, res) {
    if (res) {
        console.log("Hooray")
        document.querySelector('#output').innerHTML = `Logged in!`
    } else {
        console.log("Failed login")
    }
});
