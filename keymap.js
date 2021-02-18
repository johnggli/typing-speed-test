var keys = document.querySelectorAll('.key');

function setKeyPresset(event) {
    event.preventDefault();
    var code = event.keyCode;
    console.log(code);
    for (var key of keys) {
        var keycode = key.getAttribute('keycode');
        if (keycode == code) {
            key.classList.add('presset');
        }
    }
}

function setKeyOut(event) {
    var code = event.keyCode;
    for (var key of keys) {
        var keycode = key.getAttribute('keycode');
        if (keycode == code) {
            key.classList.remove('presset');
        }
    }
}

addEventListener("keydown", setKeyPresset);
addEventListener("keyup", setKeyOut);
