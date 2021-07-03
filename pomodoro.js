var comecar = document.getElementById('comecar');
var pausar = document.getElementById('pausar');
var reiniciar = document.getElementById('reiniciar');

var fm = document.getElementById('f_min');
var fs = document.getElementById('f_sec');

var pm = document.getElementById('p_min');
var ps = document.getElementById('p_sec');

var comecarTimer;

comecar.addEventListener('click', function(){
    if(comecarTimer === undefined) {
        comecarTimer = setInterval(timer, 1000)
    } else {
        alert("o timer já tá rodando >:( calma aí");
    }
})

reiniciar.addEventListener('click', function(){
    fm.innerText = 25;
    fs.innerText = 00;
    pm.innerText = 5;
    ps.innerText = 00;
})

function timer() {
    //countdown foco
    if(fs.innerText != 0) {
        fs.innerText--;
    } else if(fm.innerText != 0 && fs.innerText == 0) {
        fs.innerText = 59;
        fm.innerText--;
    }

    //countdown pausa
    if(fm.innerText == 0 && fs.innerText == 0) {
        ps.innerText--;
    } else if(pm.innerText != 0 && ps.innerText == 0){
        ps.innerText = 59;
        pm.innerText--;
    }

    // cont sessões
    if(fm.innerText == 0 && fs.innerText == 0 && pm.innerText == 0 && ps.innerText == 0){
        fm.innerText = 25;
        fs.innerText = 00;
        pm.innerText = 5;
        ps.innerText = 00;

        document.getElementById('cont').innerText++;
    }
}
