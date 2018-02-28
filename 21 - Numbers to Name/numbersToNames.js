var container = document.getElementById('list');
var output = document.getElementById('output');
var lang = prompt('What is your language');

for(var a = 1; a <= 12; a++) {
    container.innerHTML += `<li style="cursor: pointer;">${a}</li><br><br>`
}

function matchLang(lang) {
    var arr = [
        {language: 'English'},
        {language: 'Spanish'},
        {language: 'Italian'}
    ]
    
    return arr.filter(obj => {
        const regex = new RegExp(lang, 'gi');
        return obj.language.match(regex);
    })
}


if (lang) {
    var matched = matchLang(lang);
    var language = matched.map(i => { return i.language });

    container.addEventListener('click', i => {
        let month = parseInt(i.target.innerText);
        function getMonths(obj) {
            for (key in obj) {
                if (obj[key] === month) {
                    output.innerHTML = `${key}`;
                }
            }
        }
        if (language[0] === 'English') {
            const obj = {
                "January" : 1,
                "February": 2,
                "March": 3,
                "April": 4,
                "May": 5,
                "June": 6,
                "July": 7,
                "August": 8,
                "September": 9,
                "October": 10,
                "November": 11,
                "December": 12
            }
            getMonths(obj)
        } else if (language[0] === 'Spanish') {
            const obj = {
                "Enero": 1,
                "Febrero": 2,
                "Marzo": 3,
                "Abril": 4,
                "Mayo": 5,
                "Junio": 6,
                "Julio": 7,
                "Agosto": 8,
                "Septiembre": 9,
                "Octubure": 10,
                "Noviembre": 11,
                "Deciembre": 12
            }
            getMonths(obj)
        } else if (language[0] === 'Italian') {
            const obj = {
                "Gennaio" : 1,
                "Febbraio": 2,
                "Marzp": 3,
                "Aprile": 4,
                "Maggio": 5,
                "Giugno": 6,
                "Luglio": 7,
                "Agosto": 8,
                "Settembre": 9,
                "Ottobre": 10,
                "Novembre": 11,
                "Dicembre": 12
            }
            getMonths(obj)
        }
    });
};