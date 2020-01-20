Game.Lose = function(game){}
Game.Lose.prototype = {
	create: function() {
		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)
		
		this.retryButton = this.addTextButton(Game.WIDTH /2 , Game.HEIGHT / 2 - 200, "RETRY", "#fff", this.retryButtonClick,this)
		this.menuButton = this.addTextButton(Game.WIDTH / 2, Game.HEIGHT / 2 + 200, "MENU", "#fff",this.menuButtonClick,this)
		this.loseMessage = game.add.text(Game.WIDTH / 2, Game.HEIGHT / 2, "You Lose",{font: "bold 50px Verdana",fill:"#f00"})
		this.loseMessage.anchor.setTo(0.5)
		

	},
	update: function() {
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED / 2
		updateShakeScreen()
	},

	// Returns a Text Button
	// params:
	// x,y position
	// text text to draw
	// color color to draw
	// onClick callback function when clicked
	// game a reference to the game object should be "this" in the game state
	addTextButton: function(x, y, text, color="#fff", onClick, game) {
		var button = game.add.text(x, y, text, Game.MENU_STYLE)
		button.inputEnabled = true;
		button.addColor(color,0)
		button.events.onInputDown.add(onClick, game)
		button.anchor.setTo(0.5)
		return button
	},

	// onClick callback function for play button
	retryButtonClick: function() {
		game.state.start("Play")
	},

	// onClick callback function for options button
	menuButtonClick: function() {
		game.state.start("Menu")
	},

}
