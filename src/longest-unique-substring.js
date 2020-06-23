// Given a string, find the biggest continuous substring of unique values

const longestUniqueSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  // Here we will use the sliding window in conjunction of a dictionary

  for (let i = 0; i < str.length; i++) {
    // Add the character to the dictionary
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // Index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);

    // Store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

longestUniqueSubstring("abcda");
