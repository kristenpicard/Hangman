// Get a random word from a list

let wordList = ["First word", "Second Word", "Third Word"];

function getRandomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

let chosenWord = getRandomWord(wordList);

// Display # of lines based on letters in word chosen

let arrayOfLetters = chosenWord.split("");

console.log(arrayOfLetters);

let letterLines = document.getElementById("letterLines");

function displayLinesBasedOnLetterNums(characters) {
  for (i = 0; i < characters.length; i++) {
    letterLines.innerHTML += " ";
    if (characters[i] == " ") {
      letterLines.innerHTML += "&nbsp;&nbsp;";
    } else {
      letterLines.innerHTML += "_";
    }
  }
}

displayLinesBasedOnLetterNums(arrayOfLetters);
