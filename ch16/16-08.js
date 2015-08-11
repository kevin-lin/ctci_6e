// 234: two hundred thirty four
// 3523: three thousand five hundred twenty three
// 0: zero
// 350: three hundred fifty

// number by comma, append comma word to that number englishfied

function englishNumber(n){
  if(n === 0)
    return "zero";
  var postfix = ['', 'thousand', 'million', 'billion', 'trillion'];
  var postfixI = 0;
  var ans = "";
  while(n !== 0){
    var x = n % 1000;
    n = (n - x) / 1000;
    var newPart = englishHundred(x);
    if(newPart !== "")
      newPart += " " + postfix[postfixI];
    ans = newPart + " " + ans;
    postfixI += 1;
  }
  return ans.split(/\s+/).join(' ');
}

// takes in a 1 to 3 digit number
function englishHundred(n){
  var ans = "";
  var onesPlace = n % 10;
  var tensPlace = (n % 100 - onesPlace) / 10;
  var hundredsPlace = (n % 1000 - tensPlace*10 - onesPlace) / 100;
  if(hundredsPlace !== 0)
    ans += onesWord(hundredsPlace) + " hundred ";
  if(tensPlace == 1)
    return ans + teensWord(tensPlace*10 + onesPlace);
  if(tensPlace !== 0)
    ans += tensWord(tensPlace) + " ";
  if(onesPlace !== 0)
    ans += onesWord(onesPlace);
  return ans;
}

function onesWord(n){
  switch(n){
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    case 6: return "six";
    case 7: return "seven";
    case 8: return "eight";
    case 9: return "nine";
  }
  return "";
}

function tensWord(n){
  switch(n){
    case 1: return "ten";
    case 2: return "twenty";
    case 3: return "thirty";
    case 4: return "fourty";
    case 5: return "fifty";
    case 6: return "sixty";
    case 7: return "seventy";
    case 8: return "eighty";
    case 9: return "ninety";
  }
  return "";
}

function teensWord(n){
  switch(n){
    case 10: return "ten";
    case 11: return "eleven";
    case 12: return "twelve";
    case 13: return "thirteen";
    case 14: return "fourteen";
    case 15: return "fifteen";
    case 16: return "sixteen";
    case 17: return "seventeen";
    case 18: return "eighteen";
    case 19: return "nineteen";
  }
  return "";
}
