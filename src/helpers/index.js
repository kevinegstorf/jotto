export function getLetterMatchCount(guessedWord, secretWord) {
  console.log(secretWord);
  console.log(guessedWord);
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  console.log("--------");
  console.log(secretLetterSet);
  console.log(guessedLetterSet);
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
