const pitanja = [
  {
    tekst: "Koji je glavni grad Francuske?",
    odgovori: ["Berlin", "Madrid", "Pariz", "Rim"],
    tacan: "Pariz"
  },
  {
    tekst: "Koliko iznosi 5 + 3?",
    odgovori: ["6", "7", "8", "9"],
    tacan: "8"
  },
  {
    tekst: "Koja boja nastaje mešanjem plave i žute?",
    odgovori: ["Zelena", "Ljubičasta", "Narandžasta", "Braom"],
    tacan: "Zelena"
  }
];

let indeksPitanja = 0;
let poeni = 0;

const pitanjeElement = document.getElementById("pitanje");
const odgovoriElement = document.getElementById("odgovori");
const dugmeDaljeElement = document.getElementById("dalje");
const rezutatElement = document.getElementById("rezultat");

function proveriOdgovor(odgovor, dugme) {
  if (odgovor == pitanja[indeksPitanja].tacan) {
    poeni++;
    dugme.style.backgroundColor = "green";
    dugmeDaljeElement.style.display = "block";
    alert("Tačan odgovor!");
  } else {
    dugme.style.backgroundColor = "red";
    dugmeDaljeElement.style.display = "block";
    alert("Netačan odgovor! Tačan odogovor je: " + pitanja[indeksPitanja].tacan);
  }
}

function prikaziPitanje() {
  dugmeDaljeElement.style.display = "none";
  pitanjeElement.innerHTML = pitanja[indeksPitanja].tekst;
  odgovoriElement.innerHTML = "";

  pitanja[indeksPitanja].odgovori.forEach((odgovor) => {
    const dugme = document.createElement("button");
    dugme.innerHTML = odgovor;
    dugme.addEventListener("click", () => {
      proveriOdgovor(odgovor, dugme);
    });
    odgovoriElement.appendChild(dugme);
  });
}

function prikazRezultata() {
  pitanjeElement.style.display = "none";
  odgovoriElement.style.display = "none";
  dugmeDaljeElement.style.display = "none";
  rezutatElement.style.display = "block";
  rezutatElement.innerHTML = `Osvojili ste ${poeni} poena!`;
}

dugmeDaljeElement.addEventListener("click", () => {
  indeksPitanja++;
  if (indeksPitanja == pitanja.length) {
    prikazRezultata();
  } else {
    prikaziPitanje();
  }
});

prikaziPitanje();
