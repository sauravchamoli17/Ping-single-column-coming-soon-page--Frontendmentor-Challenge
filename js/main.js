document.addEventListener("DOMContentLoaded", function() {
  var email = document.getElementById("email");
  var field = document.getElementById("field");
  var text = document.getElementById("errortext");
  email.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      text.style.display = "block";
      field.style.border = "1px solid hsl(354, 100%, 66%)";
      email.placeholder = "email@example.com";
    }
  };
  email.oninput = function(e) {
    e.target.setCustomValidity("");
    text.style.display = "none";
    field.style.border = "1px solid hsl(0, 0%, 59%)";
    email.placeholder = "Your email address";
  };
});
