const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;
var texts = [
    "I am the bone of my sword.",
    "Steel is my body and fire is my blood.",
    "I have created over a thousand blades.",
    "Unknown to death, Nor known to life.",
    "Have withstood pain to create many weapons.",
    "Yet, those hands will never hold anything.",
    "So, as I pray. Unlimited Blade Works!"
]


// Adiciona zero inicial aos números <= 9 (apenas para estética):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}


// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


// Verifica texto digitado com o fornecido na página:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.innerHTML.substring(0, textEntered.length);

    if (textEntered == originText.innerHTML) {
        clearInterval(interval);  // para o cronômetro.
        testWrapper.style.borderColor = "#66ff33"; // sucesso.
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#00BFFF"; // escrevendo.
        } else {
            testWrapper.style.borderColor = "#DC0809" // erro.
        }
    }
}


// Inicia o cronômetro:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);  // a cada 10 milissegundos executa o runTimer.
    }
}


// Função de recomeçar:
function reset() {
    clearInterval(interval); // para o cronômetro.
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "#8854d0";
    originText.innerHTML = texts[Math.floor(Math.random() * texts.length)];
}


// Listeners de eventos para entrada de teclado e o botão de recomeçar:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
