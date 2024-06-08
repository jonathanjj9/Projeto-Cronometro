var second= 0
var minute = 0
var horas = 0
var intervalo


function doisDigitos(digito) {
    if (digito < 10) {
        return("0" + digito)
    }else{
        return(digito)
    }
}
function start() {
    intervalo = setInterval(contar, 1000)
}

function stop() {
    console.log("parou")
    clearInterval(intervalo)

}

function zerar() {
    minute= 0
    second = 0
    horas = 0
    clearInterval(intervalo)
    tempo.innerHTML = "00:00:00"
}


function contar() {
    tempo.innerHTML = second++

    if (second === 60) {
        minute++
        second = 0
         
         if (minute === 60) {
            horas++
            minute=0
            
         }


    }
    tempo.innerHTML = doisDigitos(horas) + ":" + doisDigitos(minute) + ":" + doisDigitos(second)
}