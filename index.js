$(document).ready(function() {
  var myhome = document.getElementById("myhome");
  var about = document.getElementById("about");
  var contact = document.getElementById("contact");
  
  document.getElementById("home").onclick = function () {
    about.style.display = "none";
    contact.style.display = "none";
    myhome.style.display = "block";
    }
  document.getElementById("aboutme").onclick = function() {
    myhome.style.display = "none";
    contact.style.display = "none";
    about.style.display = "block";  
    }
    
  document.getElementById("contactme").onclick = function () {
    myhome.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    }
 
  document.getElementById("footercontact").onclick = function () {
    myhome.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
  }
  
});