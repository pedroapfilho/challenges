const a = "anagram";

const b = "nagaram";

const c = "onogrom";

const d = "aaz";

const e = "zza";

// Given 2 strings, write a function to determine if the second strinc is an anagram of the first

const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  // So I'll use the frequency strategy here, where I create a "dictionary" of words for both
  const dictionary1 = {};

  const dictionary2 = {};

  for (const letter of word1)
    dictionary1[letter] = dictionary1[letter] ? (dictionary1[letter] += 1) : 1;

  for (const letter of word2)
    dictionary2[letter] = dictionary2[letter] ? (dictionary2[letter] += 1) : 1;

  // Then I check if both values with the same key are equals. If they are't, then this is not an anagram
  for (const letter of word1) {
    if (dictionary1[letter] !== dictionary2[letter]) {
      return false;
    }
  }

  //If it passes, then it's good to go
  return true;
};

validAnagram(a, b);

validAnagram(b, c);

validAnagram(d, e);
