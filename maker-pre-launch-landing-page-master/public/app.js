const emailId = document.getElementById("email");
const btnclick = document.querySelector(".down-btn");
const emailVal = btnclick.addEventListener("click", checkEmail);
function checkEmail(emailVal) {
  emailVal.preventDefault();
  let emailInput = emailId.value;
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(regex.test(emailInput) === false);
  if (regex.test(emailInput) === false && emailInput.length > 0) {
    document.getElementById("lbltxt-email").style.visibility = "visible";
    emailId.style.border = "1px solid hsl(0, 100%, 74%)";
  } else if (emailInput.length === 0) {
    document.getElementById("lbltxt-email").style.visibility = "visible";
    document.getElementById("lbltxt-email").innerHTML = "Email cannot be blank";
    emailId.style.border = "1px solid hsl(0, 100%, 74%)";
  } else {
    document.getElementById("lbltxt-email").style.visibility = "hidden";
    emailId.style.border = "none";
  }
}
