let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let secHand = document.querySelector('.second-hand');
function clock(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    hrs = (((hrs*60)/12)*6)+90;   
    hourHand.style.transform = `rotate(${hrs}deg)`;

    mins=(mins*6)+90;
    minHand.style.transform = `rotate(${mins}deg)`;

    let sec = time.getSeconds();
    sec = (sec*6)+90;
    secHand.style.transform = `rotate(${sec}deg)`;
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI * 2) / 12; // Start at 12 o'clock and position each number clockwise
        const number = document.createElement('div');
        const x = Math.round(clock.offsetWidth / 2 + clock.offsetWidth / 2.2 * Math.cos(angle)) + 'px';
        const y = Math.round(clock.offsetHeight / 2 + clock.offsetHeight / 2.2 * Math.sin(angle)) + 'px';
        number.className = 'number';
        number.style.left = x;
        number.style.top = y;
        number.innerText = i;
        clock.appendChild(number);
      }
}
setInterval(clock,1000)
clock();