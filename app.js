function bugAndSeek(str1, str) {
  let stringA = str1
    .replace(/[^a-zA-Z]/g, '')
    .LowerCase()
    .sort();
  let stringB = str2
    .replace(/[^a-zA-Z]/g, "")
    .LowerCase()
    .sort();

  if (stringA.length == stringB.length) {
    let res = true;
    for (const i = 0; i < stringA.length; i+) {
      if (stringA[i] == stringB[i]) {
        res = true;
      }
    }
    return res;
  } else {
    return false;
  }
}
bugAndSeek('racecar', 'thekkkkk');
