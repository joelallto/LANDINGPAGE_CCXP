const day = document.getElementById('dia')
const hour = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')

const endDate = "06 jun 2023"

function countdown(){

    const newEndDate = new Date(endDate);
    const currentDate = new Date;

    const totalSeconds = (newEndDate - currentDate)/1000;

    const finaldia = Math.floor(totalSeconds / 60 / 60 / 24);
    const finalhora = Math.floor(totalSeconds / 60 / 60 )%24;
    const finalminu = Math.floor(totalSeconds /60 ) %60;
    const finalsegu = Math.floor(totalSeconds) %60;

    day.innerHTML = finaldia;
    hour.innerHTML = formatTime(finalhora);
    min.innerHTML = formatTime(finalminu);
    seg.innerHTML = formatTime(finalsegu);

    day.innerText += 'D'
    hour.innerText += 'H'
    min.innerText += 'M'
    seg.innerText += 'S'
}
function formatTime(time){
    return time < 10 ? `0${time}`: time;
}
countdown()
setInterval(countdown, 1000);