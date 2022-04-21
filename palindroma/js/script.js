// costanti dom 
let res = document.querySelector(".form > p");
// FUNZIONI 
// riceve per argomento una stringa restutuisce true se è palindroma e false se non è palindroma
function isPalindromeWord(word) {
    word=word.toLowerCase();
    // devo controllare se la metà (arrotondata in difetto) della parola ricevuta per input sia uguale o diversa da l'alrta metà(sempre in difetto) in una parola di dispari caratteri non controlla la lettera centrale dato che è sempre palindorma
    for (let i = 0; i < Math.floor(word.length/2); i++) {
        if (word[i] !== word [word.length - 1 - i]) {
            return false;
        }
        
    }
    return true;  
}
function buttonPalindrome() {
    const inputWord = document.getElementById("word").value;
    res.innerHTML = `La parola ${inputWord}${isPalindromeWord(inputWord) ? `` : ` non`} è palindroma`;
    
    // if (!inputWord){
    //     alert ("Dammi una parola da controllare");
    //     return false;
    // }


}
const userWord = prompt ("Dammi la parola da controllare");
alert (`La parola ${userWord}${isPalindromeWord(userWord) ? `` : ` non`} è palindroma`);