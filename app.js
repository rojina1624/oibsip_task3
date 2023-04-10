let celciusInput = document.querySelector('#celcius > input')
let fahreniteInput = document.querySelector('#farenhite > input')
let kelvinInput = document.querySelector('#kelvin > input')
let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100
}
/* celcius tofahrenite and kelvin*/
celciusInput.addEventListener('input', function() {

        let cTemp = parseFloat(celciusInput.value)
        let fTemp = (cTemp * (9 / 5)) + 32
        let kTemp = cTemp + 273.15

        fahreniteInput.value = roundNumber(fTemp)
        kelvinInput.value = roundNumber(kTemp)
    })
    /*farenhite to celcius and kelvin*/
fahreniteInput.addEventListener('input', function() {


        let fTemp = parseFloat(fahreniteInput.value)
        let cTemp = (fTemp - 32) * (5 / 9)
        let kTemp = (fTemp - 32) * (5 / 9) + 273.15

        celciusInput.value = roundNumber(cTemp)
        kelvinInput.value = roundNumber(kTemp)
    })
    /*kelvin to celcius and farenhite*/
kelvinInput.addEventListener('input', function() {


    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15

    let fTemp = (kTemp - 273.15) * (9 / 5) + 32

    celciusInput.value = roundNumber(cTemp)
    fahreniteInput.value = roundNumber(fTemp)
})
btn.addEventListener('click', () => {
    celciusInput.value = ""
    fahreniteInput.value = ""
    kelvinInput.value = ""

})