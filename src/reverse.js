// Write a recursive function called reverse which accepts
// a string and returns a new string in reverse.

//TODO explain

const reverse = (str) => {
  if (str.length === 1) return str;

  return reverse(str.slice(1)) + str[0];
};

reverse("awesome");
