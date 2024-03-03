const displayInput = document.getElementById("displayInput");

function appendToDisplay(input) {
  displayInput.value += input;
}

function clearDisplay() {
  displayInput.value = "";
}

function calculate() {
  try {
    displayInput.value = eval(displayInput.value);
  } catch {
    displayInput.value = "error";
  }
}
