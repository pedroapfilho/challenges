const a = 182;

const b = 281;

const c = 144;

const d = 12;

// Write a function that given two positive integers, find out if the two numbers have the same frequency of digits.

const sameFrequency = (num1, num2) => {
  // Transform the numbers in strings, so they can be iterable
  const str1 = `${num1}`;

  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  // Generate the frequence dictionaries
  const freq1 = {};

  const freq2 = {};

  for (const letter of str1) {
    freq1[letter] = freq1[letter] ? freq1[letter] + 1 : 1;
  }

  for (const letter of str2) {
    freq2[letter] = freq2[letter] ? freq2[letter] + 1 : 1;
  }

  // Checks each value on the dictionary to see if they are equal
  for (const key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
};

sameFrequency(a, b);

sameFrequency(a, c);

sameFrequency(c, d);
