var password = document.getElementById("passworddisplay");
var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;
rangeslider.oninput = function () {
  output.innerHTML = this.value;
}

function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = rangeslider.value - 1;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("passworddisplay").value = password;
}

function copyPassword() {
  var copyText = document.getElementById("passworddisplay");
  copyText.select();
  document.execCommand("copy");
}


