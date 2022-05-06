const hourElem = document.querySelector(".hour");
const minuteElem = document.querySelector(".minute");
const secondElem = document.querySelector(".second");
const timeElem = document.querySelector(".time");
const dateElem = document.querySelector(".date");
const toggleElem = document.querySelector(".toggle");
const htmlElem = document.querySelector("html");

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
  minuteElem.style.transform = `translate(-50%, -100%) rotate(${minute * 6}deg)`;
  secondElem.style.transform = `translate(-50%, -100%) rotate(${second * 6}deg)`;

  timeElem.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
  dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
