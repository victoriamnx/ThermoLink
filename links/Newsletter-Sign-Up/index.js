function validateEmail() {
  var emailInput = document.getElementById("email-input");
  var emailErrorMessage = document.getElementById("email-error-message");
  var notifyButton = document.getElementById("notify-button");
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    emailInput.style.background = "hsl(5, 100%, 95%)";
    emailErrorMessage.style.display = "block";
    notifyButton.disabled = true;
  } else {
    emailInput.style.borderColor = "";
    emailErrorMessage.style.display = "none";
    notifyButton.disabled = false;
  }
}

function limparInput() {
  document.getElementById("email-input").value = "";
}

function exibirModal() {
  var emailInput = document.getElementById("email-input");
  var notifyButton = document.getElementById("notify-button");
  var modal = document.getElementById("modal");

  if (emailInput.value !== "") {
    limparInput();
    modal.style.display = "block";
    notifyButton.disabled = true;

    setTimeout(function () {
      modal.style.display = "none";
      notifyButton.disabled = false;
    }, 3000);
  }
}
