
let startDate = new Date()
console.log(startDate);

let endDate = new Date(2024, 0, 1);
console.log(endDate);

console.log(endDate - startDate);

let res = parseInt((endDate - startDate) / 1000);
let days = parseInt(res / (24 * 3600));
res = res % (24 * 3600);
let hours = parseInt(res / 3600);
res = res % 3600;
let minutes = parseInt(res / 60);
let seconds = res % 60;

let timeString = days + " " + hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
console.log(timeString);

document.write("<div>")
document.write(`<span class='one'> ${days} </span>  <span> ${hours.toString().padStart(2, '0')} </span>  <span> ${minutes.toString().padStart(2, '0')} </span> <span> ${seconds.toString().padStart(2, '0')} </span> <br>`)
document.write(`<span class='two'> days </span>  <span class='two'> hours </span>  <span class='two'> minutes </span> <span class='two'> seconds </span>`)
document.write("</div>")




// function updateTime() {
//     let startDate = new Date();
//     let endDate = new Date(2024, 0, 1);
//     let res = parseInt((endDate - startDate) / 1000);
//     let days = parseInt(res / (24 * 3600));
//     res = res % (24 * 3600);
//     let hours = parseInt(res / 3600);
//     res = res % 3600;
//     let minutes = parseInt(res / 60);
//     let seconds = res % 60;
  
//     document.querySelector('.one').textContent = days;
//     document.querySelector('.two').textContent = hours.toString().padStart(2, '0');
//     document.querySelector('.three').textContent = minutes.toString().padStart(2, '0');
//     document.querySelector('.four').textContent = seconds.toString().padStart(2, '0');
//   }
  
//   updateTime();
//   setInterval(updateTime, 1000);
  