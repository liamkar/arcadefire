//let possibleEnemyStartingRows = [101,202,303];
//let possibleEnemyStartingRows = [0,101,202];
//let possibleEnemyStartingRows = [50,151,252];
//let possibleEnemyStartingRows = [50,150,250];
let possibleEnemyStartingRows = [40,141,235];

let allEnemies = [];

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);

    //the width of the canvas is 505 pixels, so let's initially pick some from 0 to 505.
    this.x = x;
    //as enrmies float on 2nd, 3rd and 4th row of the play area, the y value can be only one of these three:
    //(expecting that drawing of the enemy image starts from the top left corner of grid position)
    //101,202,303,
    this.y = y;
    //how many pixels in second:
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x+(dt*this.speed);
    //no y is needed, as enemies are moving only on x-scale?
    //this.y = this.y*dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
for (let enemy=0; enemy<3; enemy++) {
  let startingX = getRandomIntInclusive(0,505);
  let startingY = possibleEnemyStartingRows[getRandomIntInclusive(0,2)];
  let speed = getRandomIntInclusive(50,500);
  console.log(startingX);
  console.log(startingY);
  console.log(speed);

  allEnemies.push(new Enemy(startingX, startingY, speed));
}




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
