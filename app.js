const hourElem = document.querySelector(".hour");
const minuteElem = document.querySelector(".minute");
const secondElem = document.querySelector(".second");
const timeElem = document.querySelector(".time");
const dateElem = document.querySelector(".date");
const toggleElem = document.querySelector(".toggle");
const htmlElem = document.querySelector("html");


// rotation related variables
let secondDeg = (new Date().getSeconds()) * 6;
let minuteDeg = (new Date().getMinutes()) * 6;


window.onload = function () {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "Light Mode") {
      htmlElem.classList.remove("dark");
      toggleElem.innerHTML = "Dark Mode";
    } else {
      htmlElem.classList.add("dark");
      toggleElem.innerHTML = "Light Mode";
    }
  }
};

toggleElem.addEventListener("click", function (ev) {
  if (htmlElem.classList.contains("dark")) {
    htmlElem.classList.remove("dark");
    ev.target.innerHTML = "Dark Mode";
    localStorage.setItem("theme", "Light Mode");
  } else {
    htmlElem.classList.add("dark");
    ev.target.innerHTML = "Light Mode";
    localStorage.setItem("theme", "Dark Mode");
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours() % 12;
  const ampm = time.getHours() >= 12 ? "PM" : "AM";
  const minute = time.getMinutes();
  const second = time.getSeconds();

  hourElem.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`;
  minuteElem.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  secondElem.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

  timeElem.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
  dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  
  second == 0 ? minuteDeg += 6: minuteDeg;
  secondDeg += 6;
}

setTime();

setTimeout(()=>{
  minuteElem.style.transition = `transform 0.25s ease-in`;
  secondElem.style.transition = `transform 0.5s ease-in`;
})

setInterval(setTime, 1000);

