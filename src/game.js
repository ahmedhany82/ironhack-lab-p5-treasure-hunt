class Game {

  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(500, 500);
    this.score = 0;
  }

  preload() {
    this.player.playerPreload();
    this.treasure.treasurePreload();
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    clear();
    stroke(0);
    for(let i= 0; i<=1000; i+=100)
    {
      line(0, i, WIDTH, i); 
      line(i, 0, i, HEIGHT);     
    }
    this.player.draw();
  }

  drawGame() {
    game.player.draw();
    game.treasure.draw();

    if(game.player.col === game.treasure.col && game.player.row === game.treasure.row)
    {
      game.treasure.setRandomPosition();
      this.score += 1;
    }
    document.querySelector('h2').querySelector('span').innerText = this.score;  
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }

  moveUp() {
    this.row -= 100;
  }

  moveDown() {
    this.row += 100; 
  }

  moveLeft() {
    this.col -= 100;
  }

  moveRight() {
    this.col += 100;
  }

  playerPreload() {
    this.image = loadImage('assets/character-down.png');
  }

  draw() {
    this.row = constrain(this.row, 0, (HEIGHT - 100))
    this.col = constrain(this.col, 0, (WIDTH - 100))
    image(this.image, this.col, this.row, 100, 100)
  }
}

class Treasure {
  constructor(col, row) {
    this.row = row;
    this.col = col;
    this.image;
  }

  treasurePreload() {
    console.log('treasuePreload called');
    this.image = loadImage('assets/treasure.png');
  }

  setRandomPosition() {
    console.log("setRandomPosition is called");
    this.row = (Math.floor(Math.random() * 10)) * 100;
    this.col = (Math.floor(Math.random() * 10)) * 100;
    console.log(this.row);
    console.log(this.col);
  }

  draw() {
    image(this.image, this.col, this.row, 100, 100)
  }
}

