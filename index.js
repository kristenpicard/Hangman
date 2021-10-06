let wordList = ["First word", "Second Word", "Third Word"];

function getRandomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}
console.log(getRandomWord(wordList));
