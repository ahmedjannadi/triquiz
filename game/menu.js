Game.Menu = function(game){}
Game.Menu.prototype = {
	create: function() {

		this.selected = 0

		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)
		

		this.playButton = this.addTextButton(Game.WIDTH /2 , Game.HEIGHT / 2 - 100, "PLAY", "#fff", this.playButtonClick,this)
		this.optionsButton = this.addTextButton(Game.WIDTH / 2, Game.HEIGHT / 2 + 100, "OPTIONS", "#fff",this.optionsButtonClick,this)
	},
	update: function() {
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED / 2
		this.playButton.alpha = this.selected == 0 ? 1 : 0.5
		this.optionsButton.alpha = this.selected == 1 ? 1 : 0.5
		
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
	playButtonClick: function() {
		game.state.start("Play")
	},

	// onClick callback function for options button
	optionsButtonClick: function() {
		if(game.scale.isFullScreen) {
			game.scale.stopFullScreen()
		}
		else {
			game.scale.startFullScreen()
		}
	},

}
