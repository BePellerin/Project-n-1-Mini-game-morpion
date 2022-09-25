// On charge les informations utiles
const statut = document.querySelector("h2");
const conditionDeVictoire = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let jeuActif = true;
let joueurActif = "x";
let etatJeu = ["", "", "", "", "", "", "", "", ""];

//Messages
const gagne = () => `Le joueur ${joueurActif} a gagné`;
const egalite = () => `Egalité`;
const tourJoueur = () => `C'est au tour de ${joueurActif}`;

statut.innerHTML = tourJoueur();

document
  .querySelectorAll(".case")
  .forEach((cell) => cell.addEventListener("click", gestionClickCase));

document.querySelector("#Repeat").addEventListener("click", repeat);

function gestionClickCase() {
  // On récupère l'index de la case cliquée
  const indexCase = parseInt(this.dataset.index);
  if (etatJeu[indexCase] != "" || !jeuActif) {
    return;
  }
  etatJeu[indexCase] = joueurActif;
  console.log(etatJeu);
}

function repeat() {
  console.log(this);
}
