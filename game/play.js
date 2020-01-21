Game.Play = function(game){}
Game.Play.prototype = {
	create: function() {
		// the number of questions
		this.countQuestions = Game.questions.length
		// array of the index of the answered questions
		this.answeredQuestions = []

		Game.questions = shuffle(Game.questions)
		
		// initialise the score
		this.score = 0

		// background stuff
		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)

		this.initAnswers()

		this.questionCounter=0
		this.spawnQuestion()

		this.hintText = game.add.text(Game.WIDTH / 2, Game.HEIGHT / 2, "Press 1 or 2 or 3 to answers", Game.ANSWERS_STYLE)
		this.hintText.anchor.setTo(0.5)
		let hintTextTween = game.add.tween(this.hintText).to({alpha: 0},1500,"Linear",true,0,0);
		hintTextTween.start()

		this.line = game.add.sprite(Game.WIDTH /2 , Game.LINE_Y, "line")
		this.line.anchor.setTo(0.5)

		// Input handeling
		this.initKeyboardInput()

		this.hitSound = game.add.audio("hit")
		this.deathSound = game.add.audio("death")
		
		this.scoreText = game.add.text(50,50,"0",Game.SCORE_STYLE)

	},
	update: function() {
		// moves the question
		this.currentQuestionText.y += Game.SPEED

		// scrols the background
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED

		// checks if the question collides with the line
		if (this.currentQuestionText.y >= Game.LINE_Y){
			this.wrongAnswer()
		}

		// always add at the end of update function of game state for
		// screenshake to work
		updateShakeScreen()
	},

	spawnQuestion: function() {
		this.setAnswer(this.questionCounter)
		this.currentQuestionText = game.add.text(Game.WIDTH / 2,-100,Game.questions[this.questionCounter++].fields.title,Game.QUESTIONS_STYLE)
		this.currentQuestionText.anchor.setTo(0.5,0.5)
	},

	setAnswer: function(id) {
		
		let answer1 = Game.questions[id].fields.rep1
		let answer2 = Game.questions[id].fields.rep2
		let answer3 = Game.questions[id].fields.rep3

		var answers = [0,1,2]
		for (var i=0; i< Math.floor(Math.random()*10); i++){
			if(i%2==0) {
				var tmp = answers[0]
				answers[0] = answers[1]
				answers[1] = tmp
			} else {
				var tmp = answers[0]
				answers[0] = answers[2]
				answers[2] = tmp
			}
		}
		this.correctAnswer = answers.indexOf(0)
		
		var answersText = [answer1,answer2,answer3]

		this.questionAnswer1 = answersText[answers[0]]
		this.questionAnswer2 = answersText[answers[1]]
		this.questionAnswer3 = answersText[answers[2]]

		this.answerText1.text = this.questionAnswer1
		this.answerText2.text = this.questionAnswer2
		this.answerText3.text = this.questionAnswer3
	},

	initAnswers: function() {
		this.answerText1 = game.add.text(20, Game.HEIGHT / 2 + 400, "Rep1", Game.ANSWERS_STYLE)
		this.answerText2 = game.add.text(20, Game.HEIGHT / 2 + 500, "Rep2", Game.ANSWERS_STYLE)
		this.answerText3 = game.add.text(20, Game.HEIGHT / 2 + 600, "Rep3", Game.ANSWERS_STYLE)
		
		this.answerText1.anchor.setTo(0,0.5)
		this.answerText2.anchor.setTo(0,0.5)
		this.answerText3.anchor.setTo(0,0.5)

		// enabling touch input
		this.answerText1.inputEnabled = true
		this.answerText2.inputEnabled = true
		this.answerText3.inputEnabled = true

		// adding touch event
		this.answerText1.events.onInputDown.add(this.answerFirstAnswer,this)
		this.answerText2.events.onInputDown.add(this.answerSecondAnswer,this)
		this.answerText3.events.onInputDown.add(this.answerThirdAnswer,this)
	},

	answer: function(index) {
		if(this.correctAnswer == index) {
			this.correctAnswerFunc()
		}else {
			this.wrongAnswer()
		}

	},

	answerFirstAnswer: function() {
		if(this.correctAnswer == 0) {
			this.correctAnswerFunc()
		}else {
			this.wrongAnswer()
		}
	},

	answerSecondAnswer: function() {
		if(this.correctAnswer == 1) {
			this.correctAnswerFunc()
		}else {
			this.wrongAnswer()
		}
	},

	answerThirdAnswer: function() {
		if(this.correctAnswer == 2) {
			this.correctAnswerFunc()
		}else {
			this.wrongAnswer()
		}
	},

	initKeyboardInput: function() {
		this.key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE)
		this.key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO)
		this.key3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE)
		this.key1.onDown.add(this.answerFirstAnswer, this)
		this.key2.onDown.add(this.answerSecondAnswer, this)
		this.key3.onDown.add(this.answerThirdAnswer, this)
	},
	
	wrongAnswer: function() {
		this.deathSound.play()
		shakeScreen(30)
		Game.score = this.score
		game.state.start("Lose")
	},

	correctAnswerFunc: function() {
			this.currentQuestionText.addColor("#0f0",0)
			let questionKillTween = game.add.tween(this.currentQuestionText).to({x:3000},2000).start()
			this.hitSound.play()
			shakeScreen(10)
			this.updateScore()

			this.spawnQuestion()
	},

	updateScore: function() {
		console.log(this.currentQuestionText.y)
		console.log(Game.LINE_Y)
		this.score += Math.floor(Math.abs(this.currentQuestionText.y - Game.LINE_Y))
		this.scoreText.text = this.score
	},

	setRandomQuestion: function() {
		randomQuestion = Math.floor(Math.random() * this.countQuestions)
		while(!this.answeredQuestions.includes(randomQuestion)) {
			randomQuestion = Math.floor(Math.random() * this.countQuestions)
		}
	},
}
