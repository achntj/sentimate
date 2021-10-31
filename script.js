// // function to set a given theme/color-scheme
// function setTheme(themeName) {
//   localStorage.setItem("theme", themeName);
//   document.documentElement.className = themeName;
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
//   if (localStorage.getItem("theme") === "theme-dark") {
//     setTheme("theme-light");
//   } else {
//     setTheme("theme-dark");
//   }
// }

// // Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem("theme") === "theme-dark") {
//     setTheme("theme-dark");
//     document.getElementById("slider").checked = false;
//   } else {
//     setTheme("theme-light");
//     document.getElementById("slider").checked = true;
//   }
// })();

const toggle = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};