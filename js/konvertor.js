const tempPoljeElement = document.getElementById("tempPolje");
const dugmeUFarenhajtElement = document.getElementById("uFarenhajt");
const dugmeUCelzijusElement = document.getElementById("uCelzijus");
const rezultatPoljeElement = document.getElementById("rezultatPolje");

function konvertujUFarenhajte() {
  if (tempPoljeElement.value == "") {
    alert("Unesite temperaturu!");
    return;
  }
  const temp = Number(tempPoljeElement.value)
  const rezultat = (temp * 9 / 5) + 32;
  rezultatPoljeElement.value = rezultat;
  tempPoljeElement.value = "";
}

function konvertujUCelzijus() {
  if (tempPoljeElement.value == "") {
    alert("Unesite temperaturu!");
    return;
  }
  const temp = Number(tempPoljeElement.value);
  const rezultat = (temp - 32) * 5 / 9;
  rezultatPoljeElement.value = rezultat;

  tempPoljeElement.value = "";
}

dugmeUFarenhajtElement.addEventListener("click", () => {
  konvertujUFarenhajte();
});
dugmeUCelzijusElement.addEventListener("click", () => {
  konvertujUCelzijus();
});

