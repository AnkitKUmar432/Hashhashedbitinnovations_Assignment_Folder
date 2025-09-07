function swapTheme() {
  const app = document.getElementById("app");
  const button = document.getElementById("swap");
  if (app.classList.contains("night")) {
    app.classList.remove("night");
    app.classList.add("day");
  } else {
    app.classList.remove("day");
    app.classList.add("night");
  }
  if (button.classList.contains("button_day")) {
    button.classList.remove("button_day");
    button.classList.add("button_night");
  } else {
    button.classList.remove("button_night");
    button.classList.add("button_day");
  }
}
