//light and dark mode
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }

}

toggleSwitch.addEventListener("change", switchTheme, false);

// one rep max calculator
function percentage_1() {

  // Method returns the element of percent id
  var percent = document.getElementById("percent").value;

  // Method returns the element of num id
  var num = document.getElementById("num").value;
  document.getElementById("value1")
    .value = (num / 100) * percent;
}