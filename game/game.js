let game = new Phaser.Game(720,1280,Phaser.AUTO);

game.state.add("Load",Game.Load)
game.state.add("Play",Game.Play)

game.state.start("Load")

