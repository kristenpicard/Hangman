let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let ii = document.getElementById("i");
let j = document.getElementById("j");
let k = document.getElementById("k");
let l = document.getElementById("l");
let m = document.getElementById("m");
let n = document.getElementById("n");
let o = document.getElementById("o");
let p = document.getElementById("p");
let q = document.getElementById("q");
let r = document.getElementById("r");
let s = document.getElementById("s");
let t = document.getElementById("t");
let u = document.getElementById("u");
let v = document.getElementById("v");
let w = document.getElementById("w");
let x = document.getElementById("x");
let y = document.getElementById("y");
let z = document.getElementById("z");
let letterLines = document.getElementById("letterLines");
let winLoseDiv = document.getElementById("winOrLose");
let wrongGuessesDiv = document.getElementById("wrongGuesses");

// Get a random word from a list

let wordList = ["First word", "Second Word", "Third Word"];

function getRandomWordFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}

let chosenWord = getRandomWordFromList(wordList);
let word = chosenWord.toLowerCase();
let arrayOfLetters = word.split("");
let arrayOfLines = [];

function displayLinesArray(arrayOfLines) {
  // Must do this so that can put updated array of lines into div at each guess
  letterLines.innerHTML = "";
  for (i = 0; i < arrayOfLines.length; i++) {
    letterLines.innerHTML += arrayOfLines[i];
  }
}

function createLinesArrayFromLettersArray(arrayOfCharacters) {
  for (i = 0; i < arrayOfCharacters.length; i++) {
    arrayOfLines.push(" ");
    if (arrayOfCharacters[i] == " ") {
      arrayOfLines.push("&nbsp;&nbsp;");
    } else {
      arrayOfLines.push("_");
    }
  }
  // Once created, show
  displayLinesArray(arrayOfLines);
}
// Creates upon page load
createLinesArrayFromLettersArray(arrayOfLetters);

function removeSpacesFromArrayOfLines(arrayOfLines) {
  for (i = 0; i < arrayOfLines.length; i++) {
    if (arrayOfLines[i] == " ") {
      arrayOfLines.splice(i, 1);
    }
  }
}

function addSpacesBackIn(array) {
  let updatedArray = [];
  for (i = 0; i < array.length; i++) {
    updatedArray.push(array[i]);
    updatedArray.push(" ");
  }
  arrayOfLines = updatedArray;
  console.log(arrayOfLines);
}

function showLetter(arrayOfCharacters, letterGuessed) {
  let count = 0;
  removeSpacesFromArrayOfLines(arrayOfLines);
  for (i = 0; i < arrayOfCharacters.length; i++) {
    count++;
    if (arrayOfCharacters[i] != letterGuessed) {
      // do nothing to array of lines
    } else if (arrayOfCharacters[i] == letterGuessed) {
      // find index of where in array of characters and overwrite array of lines at that index
      let index = count - 1;
      arrayOfLines[index] = letterGuessed;
    }
  }
  addSpacesBackIn(arrayOfLines);
}

let wrongCount = 0;
function showYouLoseMessage() {
  winLoseDiv.innerHTML = "Too many wrong guesses, you lose!!";
}

function showYouWinMessage() {
  winLoseDiv.innerHTML = "You won!!";
}

function showWrongGuessCount() {
  wrongGuessesDiv.innerHTML = "Incorrect Guesses: " + wrongCount + "/3";
}
showWrongGuessCount();

function onClick() {
  let currentClick = event.target;
  let userGuess = currentClick.innerHTML;

  if (arrayOfLetters.includes(userGuess)) {
    showLetter(arrayOfLetters, userGuess);
    displayLinesArray(arrayOfLines);
  } else if (!arrayOfLetters.includes(userGuess)) {
    wrongCount = wrongCount + 1;
    if (wrongCount == 3) {
      showYouLoseMessage();
    }
    showWrongGuessCount();
  }

  if (!arrayOfLines.includes("_")) {
    showYouWinMessage();
  }
}

a.addEventListener("click", onClick);
b.addEventListener("click", onClick);
c.addEventListener("click", onClick);
d.addEventListener("click", onClick);
e.addEventListener("click", onClick);
f.addEventListener("click", onClick);
g.addEventListener("click", onClick);
h.addEventListener("click", onClick);
ii.addEventListener("click", onClick);
j.addEventListener("click", onClick);
k.addEventListener("click", onClick);
l.addEventListener("click", onClick);
m.addEventListener("click", onClick);
n.addEventListener("click", onClick);
o.addEventListener("click", onClick);
p.addEventListener("click", onClick);
q.addEventListener("click", onClick);
r.addEventListener("click", onClick);
s.addEventListener("click", onClick);
t.addEventListener("click", onClick);
u.addEventListener("click", onClick);
v.addEventListener("click", onClick);
w.addEventListener("click", onClick);
x.addEventListener("click", onClick);
y.addEventListener("click", onClick);
z.addEventListener("click", onClick);

// Display list of alphabet in buttons

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
