/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// source https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function myFunction() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }