Game.Menu = function(game){}
Game.Menu.prototype = {
	create: function() {

		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)
		

		this.playButton = game.add.text(Game.WIDTH /2 , Game.HEIGHT / 2, "PLAY")
		this.playButton.inputEnabled = true;
		this.playButton.addColor("#fff",0)
		this.playButton.events.onInputDown.add(this.playButtonClick,this)

		this.optionsButton = this.addTextButton(Game.WIDTH / 2, Game.HEIGHT /2 + 20, "OPTIONS", "#fff",this.optionsButtonClick,this)

	},
	update: function() {
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED
	},

	// Returns a Text Button
	// params:
	// x,y position
	// text text to draw
	// color color to draw
	// onClick callback function when clicked
	// game a reference to the game object should be "this" in the game state
	addTextButton: function(x, y, text, color="#fff", onClick, game) {
		var button = game.add.text(x, y, text)
		button.inputEnabled = true;
		button.addColor(color,0)
		button.events.onInputDown.add(onClick, game)
		return button
	},

	// onClick callback function for play button
	playButtonClick: function() {
		game.state.start("Play")
	},

	// onClick callback function for options button
	optionsButtonClick: function() {
		alert("OPTIONS")
	},

}
