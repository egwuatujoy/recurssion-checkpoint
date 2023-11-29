function palinDrome(word) {
  if (word.length <= 1) {
    return true;
  }
  if (word[0] === word[word.length - 1]) {
    return palinDrome(word.slice(1, -1));
  } else {
    return false;
  }
}
console.log(palinDrome("joy egwuatu"));
// console.log(palinDrome("joy e"));