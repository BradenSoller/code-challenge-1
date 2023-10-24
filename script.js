// 1. Start with the number 29 and set that equal to a variable named highScore;
let highScore = 29;

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
scrambletile  = [
  {
  tile: 'N',
  score: 1
},
{
  title: 'K',
  score: 5

},
{
  tile: 'Z',
  score: 10
},
{
  tile: 'X',
  score: 8
},
{
  tile: 'D',
  score: 2
},
{
  tile: 'A',
  score: 1
},
];
console.log("My Scramble Tiles:");
myScrabbleTiles.push(scrambletile);
console.log(myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.
let removedTile = scrambletile.pop()
console.log("removed scramble tile :");
console.log(removedTile);
console.log(myScrabbleTiles);
// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/

scrambletile.push({
  title: 'F',
  score: 4
})
console.log('new tile;');
console.log(scrambletile);
console.log(myScrabbleTiles);
// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop to add up and return the sum of all the scores for a given array of scrabble tiles.

function calculateScore(tiles) {
  let sum = 0;

  for (i = 0; i < tiles.length; i++){
    sum += tiles[i].score
  }
  return sum;
}
console.log('sum of tiles');
console.log(calculateScore(scrambletile));


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".

let myScore = calculateScore(scrambletile);
console.log(myScore);
// 8. Check whether or not your score is higher than the highScore. If your score is higher, change highScore to the new high score.
if (highScore < myScore){
  console.log("new high score!");
} else {
   console.log('try again!');
}

  highScore = myScore;


// DONE!




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    highScore: typeof highScore !== 'undefined' ? highScore : undefined,
    myScrabbleTiles: typeof myScrabbleTiles !== 'undefined' ? myScrabbleTiles : undefined,
    removedTile: typeof removedTile !== 'undefined' ? removedTile : undefined,
    calculateScore: typeof calculateScore !== 'undefined' ? calculateScore : undefined,
    myScore: typeof myScore !== 'undefined' ? myScore : undefined,
  }
} catch (e) {
  // Do nothing
}
