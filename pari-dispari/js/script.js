// costanti dom 
let res = document.querySelector(".form > p");
// Funzioni 
function isOdd(num) {
    return Boolean(num%2);
    // Dava problemi === se ritornava un numero
}
function btnPlay() {
    const playerNumber = parseInt(document.getElementById("number").value);
    const radiOdd = document.getElementById("odd").checked;
    const cpuNumber = Math.floor (Math.random() * 5 + 1);

    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 5) {
        res.innerHTML = "Dammi un numero da uno a cinque ";
        return 0;
    }
    const sum = playerNumber + cpuNumber;
    const odd = isOdd(sum);
    res.innerHTML = `La somma di ${playerNumber} e ${cpuNumber} (numero della cpu) è ${sum} ed è ${odd ? `dispari` : `pari`} ed hai ${radiOdd === odd ? `vinto :-)` : `perso :-(`} `;
    // console.log(odd , " odd");
    // console.log(radiOdd , " Radio odd");

}