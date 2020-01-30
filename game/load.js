function hsb (h, s, l) {
    var r, g, b, m, c, x
    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0
    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6
    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))
    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))
    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }
    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

	return "#"+r.toString(16)+g.toString(16)+b.toString(16)
}
function updateShakeScreen() {
	if (Game.shakeWorld > 0) {
		var rand1 = game.rnd.integerInRange(-10,10);
		var rand2 = game.rnd.integerInRange(-10,10);
		game.world.setBounds(0, rand2, game.width + rand1, game.height + rand2);
		Game.shakeWorld--;
		if (Game.shakeWorld == 0) {
			game.world.setBounds(0, 0, game.width,game.height); // normalize after shake?
		}
	}
}

function shakeScreen(value) {
	Game.shakeWorld = value
}

// fisher yates shuffle
function shuffle(array) {
	for(let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i)
		let tmp = array[i]
		array[i] = array[j]
		array[j] = tmp
	}
	return array
}


Game.Load = function(game){}

Game.Load.prototype = {
	preload: function(){
		game.stage.backgroundColor = hsb(Math.floor(Math.random()*360),50,50)
		this.text = game.add.text(Game.WIDTH/2,Game.HEIGHT/2,"Loading...",Game.SCORE_STYLE);
		this.text.anchor.setTo(0.5,0.5);

		game.load.image("bg","assets/img/bg.png") // Background image
		game.load.image("line","assets/img/line.png") // Line
		game.load.audio("bgm","assets/bgm/bgm.mp3") // Background music
		game.load.audio("hit","assets/snd/hit.wav") // Hit sound
		game.load.audio("death","assets/snd/death.wav") // Hit sound
		game.scale.setScreenSize()
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

		if(localStorage.getItem("bestscore") !== null) {
			Game.bestScore = localStorage.getItem("bestscore")
		}
	},
	update: function(){

	},
	create: async function(){
		let res = await fetch(Game.API+"/api/questions")
		let data = await res.json()
		Game.questions = await JSON.parse(data)
		this.bgm = game.add.audio("bgm")
		this.bgm.loopFull()

		game.state.start("Menu")
	},
}
