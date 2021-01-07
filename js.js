let countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();

let countDownFunction = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;
     let days = Math.floor(distance / (1000*60*60*24));
     let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
     let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
     let seconds = Math.floor((distance % (1000*60)) / 1000);

     const timer = document.getElementById('timer');
     timer.innerHTML = days + 'д ' + hours + 'ч ' + minutes + 'м ' + seconds + 'с';

     if (distance < 0){
         clearInterval(countDownFunction);
         timer.innerHTML = 'Время истекло.'
     }
}, 1000);