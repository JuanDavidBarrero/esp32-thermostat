const showtemp = document.getElementById("showtemp");
const fecha = document.getElementById("fecha");

const min = document.getElementById("min");
const max = document.getElementById("max");

const basico = document.getElementById("basico");
const reboot = document.getElementById("reboot");

function changeShow() {

    showtemp.innerText = Math.floor(Math.random() * 100);
    valor = showtemp.innerText;

    valorMin = parseInt(min.value);
    valorMax = parseInt(max.value);


    if (valor < valorMin) {
        showtemp.innerHTML = `<p>${valor}<span>°C</span></p>`
        showtemp.className = 'show-temp min';
    }
    if (valor > valorMax) {
        showtemp.innerHTML = `<p>${valor}<span>°C</span></p>`
        showtemp.className = 'show-temp max';
    }
    else {
        showtemp.innerHTML = `<p>${valor}<span>°C</span></p>`

    }
}

setInterval(() => {
    let hoy = new Date()
    let hora = hoy.getHours();
    let minutes = hoy.getMinutes();
    let seconds = hoy.getSeconds();

    fecha.value = `${hora}:${minutes}:${seconds}`
}, 1000);



changeShow();

