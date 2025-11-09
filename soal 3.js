function celciusToFahrenheit(celcius){
    return (celcius * 9/5) + 32
}

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32)  * 5/9
}

let suhuCelcius = 25
let suhuFahrenheit = celciusToFahrenheit(suhuCelcius)
let suhuFah =  72
let suhuCel = fahrenheitToCelcius(suhuFah)

console.log("Suhu Celcius To Fahrenheit")
console.log(`Suhu ${suhuCelcius} Celcius sama dengan suhu ${suhuFahrenheit} Fahrenheit`)
console.log("=======================================")
console.log("Suhu Fahrenheit To Celcius")
console.log(`Suhu ${suhuFah} Fahrenheit sama dengan suhu ${suhuCel} Celcius`)