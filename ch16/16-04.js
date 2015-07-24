// board is a 2d array
// O(n^2) where n is length of side
function checkForWinner(board){
  checkVertical(board);
  checkHorizontal(board);
  checkTopLeftToBottomRight(board);
  checkBottomLeftToTopRight(board);
}

function checkVertical(board){
  for(var i = 0; i < 3; i++){
    var xCount = 0;
    var oCount = 0;
    for(var j = 0; j < 3; j++){
      if(board[i][j] == 'x')
        xCount++;
      else if(board[i][j] == 'o')
        oCount++;
      else
        break;
    }
    if(xCount == 3)
      return "x wins";
    else if(oCount == 3)
      return "o wins";
  }
}

function checkHorizontal(board){
  for(var i = 0; i < 3; i++){
    var xCount = 0;
    var oCount = 0;
    for(var j = 0; j < 3; j++){
      if(board[j][i] == 'x')
        xCount++;
      else if(board[j][i] == 'o')
        oCount++;
      else
        break;
    }
    if(xCount == 3)
      return "x wins";
    else if(oCount == 3)
      return "o wins";
  }
}

function checkTopLeftToBottomRight(board){
  for(var i = 0; i < 3; i++){
    var xCount = 0;
    var oCount = 0;
    if(board[i][i] == 'x')
      xCount++;
    else if(board[i][i] == 'o')
      oCount++;
    else
      break;

    if(xCount == 3)
      return "x wins";
    else if(oCount == 3)
      return "o wins";
  }
}

function checkBottomLeftToTopRight(board){
  for(var i = 0; i < 3; i++){
    var xCount = 0;
    var oCount = 0;
    if(board[2-i][i] == 'x')
      xCount++;
    else if(board[2-i][i] == 'o')
      oCount++;
    else
      break;
    if(xCount == 3)
      return "x wins";
    else if(oCount == 3)
      return "o wins";
  }
}

// implementation using a hash table. time/space tradeoff
// idealy we would update this hash table for every turn that is played
// lets have x's increment and o's decrement. if any index reaches 3 or -3, then we have a winner
function checkWinnerByHash(board){
  // vertical lines will be indexed left to right 0 - 2
  // horizontal lines will be indexed top to bottom 3 - 5
  // top left to bottom right will be index 6
  // bottom left to top right will be index 7
  var counter = new Array(8);
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      if(board[i][j] == 'x'){
        counter[i]++;
        counter[j+3]++;
        if(i == j)
          counter[6]++;
        if(i == 2-j)
          counter[7]++;
      }
      if(board[i][j] == 'o'){
        counter[i]--;
        counter[j+3]--;
        if(i == j)
          counter[6]--;
        if(i == 2-j)
          counter[7]--;
      }
    }
  }

  for(i = 0; i < 8; i++){
    if(counter[i] == 3)
      return "x wins";
    if(counter[i] == -3)
      return "o wins";
    return "nobody wins";
  }
}