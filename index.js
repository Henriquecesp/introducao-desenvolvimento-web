function getValue() {
  const value = document.getElementById("name").value;
  document.getElementById("result").innerHTML = "Bem vindo, " + value + "!";
}

function removeValue() {
  document.getElementById("name").value = "";
  document.getElementById("result").innerHTML = "";
}
