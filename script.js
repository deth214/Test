funciton validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

if(username.length < 6) {
  message.innerText = "Username too short";
  return;
}
if(password.length < 6) {
  message.innerText = "Password too short";
  return;
}

let hasDigit = false;

for (let x of password) {
  if (!isNaN(x)) {
    hasDigit = true;
    break;
  }
}

if (!hasDigit) {
  message.innerText = "Password must contain a number";
  return;
}

message.innerText = "Account created";
}
