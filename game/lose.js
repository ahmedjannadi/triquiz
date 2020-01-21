Game.Lose = function(game){}
Game.Lose.prototype = {
	create: function() {
		this.selected = 0
		this.countSelection = 2 // number of menu items

		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)
		
		this.retryButton = this.addTextButton(Game.WIDTH /2 , Game.HEIGHT / 2 - 100, "RETRY", "#fff", this.retryButtonClick,this)

		this.menuButton = this.addTextButton(Game.WIDTH / 2, Game.HEIGHT / 2 + 100, "MENU", "#fff",this.menuButtonClick,this)

		this.scoreText = game.add.text(Game.WIDTH / 2, Game.HEIGHT / 2 - 400, "SCORE\n"+Game.score,{font: "bold 50px Verdana",fill:"#fff", align: "center"})
		this.scoreText.anchor.setTo(0.5)
		this.bestScoreText = game.add.text(Game.WIDTH / 2, Game.HEIGHT / 2 - 250, "BESTSCORE\n"+Game.bestScore,{font: "bold 50px Verdana",fill:"#fff", align: "center"})
		this.bestScoreText.anchor.setTo(0.5)

		this.initKeyboardInput()
	},
	update: function() {
		// scrols the background
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED / 2

		this.retryButton.alpha = this.selected == 0 ? 1 : 0.5
		this.menuButton.alpha = this.selected == 1 ? 1 : 0.5

		if(this.selected < 0) {
			this.selected += this.countSelection
		}
		if(this.selected >= this.countSelection) {
			this.selected -= this.countSelection
		}

		// always add at the end of update function of game state for
		// screenshake to work
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

	initKeyboardInput: function() {
		this.keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP)
		this.keyUp.onDown.add(this.onKeyUpDown,this)

		this.keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
		this.keyDown.onDown.add(this.onKeyDownDown,this)

		this.keyEnter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		this.keyEnter.onDown.add(this.onKeyEnterDown,this)
	},

	// callback for when the up key is pressed
	onKeyUpDown: function() {
		this.selected -= 1
	},

	// callback for when the down key is pressed
	onKeyDownDown: function() {
		this.selected += 1
	},

	// callback for when the enter key is pressed
	onKeyEnterDown: function() {
		if(this.selected == 0) {
			this.retryButtonClick()
		}
		if(this.selected == 1) {
			this.menuButtonClick()
		}
	},

}
