let game = new Phaser.Game(Game.WIDTH,Game.HEIGHT,Phaser.AUTO);

game.state.add("Load",Game.Load)
game.state.add("Menu",Game.Menu)
game.state.add("Play",Game.Play)

game.state.start("Load")

