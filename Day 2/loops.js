function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of s) {
    if (vowels.includes(char)) {
      console.log(char);
    }
  }
  for (let letter of s) {
    if (!vowels.includes(letter)) {
      console.log(letter);
    }
  }
}
