var comecar = document.getElementById('comecar');
var pausar = document.getElementById('pausar');
var reiniciar = document.getElementById('reiniciar');

var fm = document.getElementById('f_min');
var fs = document.getElementById('f_sec');

var pm = document.getElementById('p_min');
var ps = document.getElementById('p_sec');

var comecarTimerFoco;
var comecarTimerPausa

comecar.addEventListener('click', function(){
    if(comecarTimerFoco === undefined && comecarTimerPausa === undefined) {
        comecarTimerFoco = setInterval(timer_foco, 1000)
        comecarTimerPausa = setInterval(timer_pausa, 1000)
    } else {
        alert("o timer já tá rodando >:( calma aí");
    }
})

pausar.addEventListener('click', function(){
    pararIntervalo()
    comecarTimerFoco = undefined;
    comecarTimerPausa = undefined
})

reiniciar.addEventListener('click', function(){
    fm.innerText = 25;
    fs.innerText = 00;
    pm.innerText = 5;
    ps.innerText = 00;

    pararIntervalo()
    comecarTimerFoco = undefined;
    comecarTimerPausa = undefined
})

// começa o timer de foco
function timer_foco() {
    if(fs.innerText != 0) {
        fs.innerText--;
    } else if(fm.innerText != 0 && fs.innerText == 0) {
        fs.innerText = 59;
        fm.innerText--;
    }

    if(fm.innerText == 0 && fs.innerText == 1) {
        document.getElementById('audio').play();
    }
}

// timer de pausa
function timer_pausa() {
    if(fm.innerText == 0 && fs.innerText == 0){
        if(ps.innerText != 0) {
            ps.innerText--;
        } else if(pm.innerText != 0 && ps.innerText == 0) {
            ps.innerText = 59;
            pm.innerText--;
        }
    }

    // cont sessões
    if(fm.innerText == 0 && fs.innerText == 0 && pm.innerText == 0 && ps.innerText == 0){
        fm.innerText = 25;
        fs.innerText = 00;
        pm.innerText = 5;
        ps.innerText = 00;

        document.getElementById('cont').innerText++;
    }

    if(pm.innerText == 0 && ps.innerText == 1) {
        document.getElementById('audio').play();
    }
}

// para o timer
function pararIntervalo() {
    clearInterval(comecarTimerFoco)
    clearInterval(comecarTimerPausa)
}

