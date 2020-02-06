//time complexity: 0(n) - linear
let isAnagram1 = (s, t) => {
    let hist = {};
    for (let i = 0; i < s.length; i++) {
        let char =  s[i];
        if (char in hist) {
            hist[char]++;
        } else {
            hist[char] = 1;
        }
    }
    for (let i = 0; i< t.length; i++){
        let char = t[i];
        if (char in hist) {
            hist[char]--;
        } else {
            return false;
        }
    }
    for (let key in hist) {
        if (hist[key]) {
            return false;
        }
    }
    return true;
}
//////////////////////////////////////////
////////////////////////////////////
const stringCleaner = str => {
    const strWithoutCharacters = str.replace(/[^A-Z0-9]/gi, "");
    return strWithoutCharacters.toLowerCase();
  };
  
  const buildCharacterMap = str => {
    const chars = str.split("");
  
    const charMap = chars.reduce((obj, char) => {
      obj[char] ? obj[char]++ : (obj[char] = 1);
      return obj;
    }, {});
  
    return charMap;
  };
  
  const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
  
    return true;
  };
  
  const str1 = buildCharacterMap(stringCleaner("Jim Morrison"));
  const str2 = buildCharacterMap(stringCleaner("Mr. Mojo Risin'"));
  
  isEqual(str1, str2); //?
  
  const isAnagram = (str, comparisonStr) => {
    const strObj = buildCharacterMap(stringCleaner(str));
    const comparisonStrObj = buildCharacterMap(stringCleaner(comparisonStr));
  
    return strObj === comparisonStrObj;
  };
  
  isAnagram("Jim Morrison", "Mr. Mojo Risin'");
  isAnagram("Damon Albarn", "Dan Abnormal");
  isAnagram("George Bush", "He bugs Gore");
  isAnagram("Clint Eastwood", "Old West action");
  isAnagram("Ronald Reagan", "A darn long era");
  isAnagram("Elvis", "Lives");
  isAnagram("Madonna Louise Ciccone", "One cool dance musician");
  isAnagram("Bart", "Brat");
  