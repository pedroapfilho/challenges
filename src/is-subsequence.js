const a = "sing";

const b = "sting";

const c = "isgn";

//TODO explain this one

const isSubsequence = (str1, str2) => {
  let i = 0;

  if (!str1) return true;

  for (let j = 0; j < str2.length; j += 1) {
    if (str2[j] === str1[i]) i += 1;

    if (i === str1.length) return true;
  }

  return false;
};
