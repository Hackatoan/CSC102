function checkPalindrome(oldWord) {
  // this section gives the user some feedback that the last word they submitted was not a palindrome
  let untrimmedword;
  //if it was the first time running then it just ask for a word
  if (oldWord) {
    untrimmedword = prompt('"' + oldWord + '"' + " was not a Palindrome");
  } else {
    untrimmedword = prompt("Enter a word.");
  }
  let word = untrimmedword.trim().toLowerCase(); //trim word and lowercase so that racecar and Racecar and " racecar " should both be palindromes

  //check that the word has some content or has more then 0 characters
  if (word.length > 0) {
    let x = 0;
    let y = word.length - 1;
    while (x < y) {
      //as long as x < y there is more letters to go through that are not duplicates. this should meet at the middle of the word
      if (word.charAt(x) != word.charAt(y)) {
        updatePage(false, untrimmedword);
        checkPalindrome(word); // recurssively prompt for a new word if the last word was not a palindrome
        return; // end function to avoid infinite loop
      }
      x++;
      y--;
    }
    updatePage(true, untrimmedword);
  }
}

//buttton press function
function palindromeButton() {
  console.log(checkPalindrome());
}

//function that adds each word to the list so that the user can see what words they typed in previously.
function updatePage(isPalindrome, word) {
  let node = document.createElement("li");
  let textnode;
  if (isPalindrome) {
    textnode = document.createTextNode(word + " is a palindrome");
  } else {
    textnode = document.createTextNode(word + " is not a palindrome");
  }
  node.appendChild(textnode);

  //add to top of list
  let pastWords = document.getElementById("pastWords");
  if (pastWords.firstChild) {
    pastWords.insertBefore(node, pastWords.firstChild);
  } else {
    pastWords.appendChild(node);
  }
}
