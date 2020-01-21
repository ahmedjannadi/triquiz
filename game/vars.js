Game = {}

Game.WIDTH = 720
Game.HEIGHT = 1280
Game.TITLE = "Quiz"
Game.API = "http://localhost:8080"
//Game.API = "http://ahmedjannadi.tk:8080"

Game.SPEED = 1.3 // Question fall speed
Game.BACKGROUND_SPEED = 1


Game.QUESTIONS_STYLE = {font:"bold 24px Verdana", fill: "#fff"}
Game.ANSWERS_STYLE = {font:"bold 20px Verdana", fill: "#fff"}
Game.MENU_STYLE = {font:"bold 40px Verdana", fill: "#fff"}
Game.SCORE_STYLE = {font:"bold italic 40px Verdana", fill: "#fff"}

Game.LINE_Y = Game.HEIGHT / 3 * 2 + 100


Game.shakeWorld = 0
