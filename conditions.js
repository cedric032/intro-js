/*
    ____ ___  _   _ ____ ___ _____ ___ ___  _   _ ____
   / ___/ _ \| \ | |  _ \_ _|_   _|_ _/ _ \| \ | / ___|
  | |  | | | |  \| | | | | |  | |  | | | | |  \| \___ \
  | |__| |_| | |\  | |_| | |  | |  | | |_| | |\  |___) |
   \____\___/|_| \_|____/___| |_| |___\___/|_| \_|____/
*/

/**
 *
 * opérateurs de comparaison
 *
 * égalité non stricte == -> comparer l'égalité de valeur
 * égalité stricte === -> comparer l'égalité de valeur ET de type
 *
 * non-égalité non stricte != -> comparer la différence de valeur
 * non-égalité stricte !== -> comparer la différence de valeur ET de type
 *
 * supériorité stricte > -> comparer la supérioté stricte
 * supériorité ou égalitée >= -> comparer la supériorité ou égalitée
 *
 * inferiorité stricte < -> comparer l'inferiorité
 * inferiorité ou égalitée <= -> comparer l'inferiorité ou egalitée
 *
 */

// // typeof permet de vérifier le type de donnée contenue dans une variable
// if (typeof numString === 'number') {
//   // si le type de numString est number on effectue ce qui se trouve dans ce bloc
//   console.log('numString est bien un nombre');
//   console.log(num3 + numString);
// } else {
//   // sinon on effectue ce qui se trouve dans ce bloc
//   console.log('numString est une chaine de caractères');
//   console.log('Je converti la chaine de caractère en nombre');
//   const numStringConverted = +numString;
//   console.log(num3 + numStringConverted);
// }

// if (isOpen) {
//   console.log('Bienvenue !');
// } else {
//   console.log("C'est fermé !");
// }

const firstName = "Henry";

// if (firstName === 'John') {
//   // si le contenu de la variable firstName est égal à John
//   console.log("Tu t'appelles John");
// } else if (firstName === 'Jack') {
//   // sinon si le contenu de la variable firstName est égal à Jack
//   console.log("Tu t'appelles Jack");
// } else if (firstName === 'David') {
//   // sinon si le contenu de la variable firstName est égal à David
//   console.log("Tu t'appelles David");
// } else if (firstName === 'Robert') {
//   // sinon si le contenu de la variable firstName est égal à Robert
//   console.log("Tu t'appelles Robert");
// } else {
//   // sinon dans tous les autres cas
//   console.log('Je ne connais pas ton nom');
// }

/*
   _______  _______ ____   ____ ___ ____ _____ ____
  | ____\ \/ / ____|  _ \ / ___|_ _/ ___| ____/ ___|
  |  _|  \  /|  _| | |_) | |    | | |   |  _| \___ \
  | |___ /  \| |___|  _ <| |___ | | |___| |___ ___) |
  |_____/_/\_\_____|_| \_\\____|___\____|_____|____/
*/

/**
 *
 * Ecrire une structure conditionnelle qui permet de dire si une personne
 * peut rentrer au cinéma en fonction de l'argent détenu par celle ci
 *
 * en cas de fonds suffisants on affichera en console "Merci, bon film."
 * dans le cas contraire on affichera "Désolé, vous n'avez pas assez d'argent"
 *
 */
const TICKET_PRICE = 9.99;
const personMoney = 5;

if (personMoney >= TICKET_PRICE) {
  console.log("Merci, bon film.");
} else {
  console.log("Désolé, vous n'avez pas assez d'argent");
}

/**
 *
 * Ecrire une structure conditionnelle qui permet de dire si le produit
 * de deux nombres est positif ou négatif
 *
 * dans le cas ou le produit est positif on affichera "Le produit de <variable_1> et <variable_2> est positif"
 * dans le cas contrairte on affichera "Le produit de <variable_1> et <variable_2> est négatif"
 */
const variable_1 = 2;
const variable_2 = -2;

if (variable_1 + variable_2 >= 0) {
  console.log("Le produit de variable_1 et variable_2 est positif");
} else {
  console.log("Le produit de variable_1 et variable_2 est négatif");
}

/**
 *
 * Ecrire une structure conditionnelle de feu tricolore
 *
 * si le feu est red (rouge) afficher "Je m'arrête"
 * sinon si le feu est orange (orange) afficher "Je ralentis pour m'arrêter"
 * sinon si le feu est green (vert) afficher "J'accélère"
 *
 */

const trafficLightColor = "red";

if (trafficLightColor === "red") {
  console.log("Je m'arrête");
} else if (trafficLightColor === "orange") {
  console.log("Je ralentis pour m'arrêter");
} else if (trafficLightColor === "green") {
  console.log("J'accélère");
} else {
  console.log(
    "Si le feux est en panne feux de signalisation sont en panne, la priorité revient aux véhicules qui arrivent par la droite."
  );
}

switch (trafficLightColor) {
  case "red":
    console.log("Je m'arrête");
    break;
  case "orange":
    console.log("Je ralentis pour m'arrêter");
    break;
  case "green":
    console.log("J'accélère");
    break;

  default:
    console.log(
      "Si le feux est en panne feux de signalisation sont en panne, la priorité revient aux véhicules qui arrivent par la droite."
    );
    break;
}
