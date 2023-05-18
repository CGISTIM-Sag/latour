input.onButtonPressed(Button.A, function () {
    Cliqué = 1
    if (X == -1) {
        X = Sprite.get(LedSpriteProperty.X)
    }
    Tomber(Sprite)
    if (game.score() < 5) {
        Sprite = game.createSprite(0, 0)
    } else {
        music.playMelody("G F E F E G E - ", 250)
        music.playMelody("G F E F E G E - ", 250)
        basic.showString("VICTOIRE! A+B POUR REJOUER")
    }
    Cliqué = 0
})
function JouerMauvais () {
    music.playTone(185, music.beat(BeatFraction.Eighth))
    music.playTone(175, music.beat(BeatFraction.Quarter))
}
function Tomber (sprite: game.LedSprite) {
    if (X == Sprite.get(LedSpriteProperty.X)) {
        for (let index = 0; index < 5 - Etage; index++) {
            Sprite.change(LedSpriteProperty.Y, 1)
            JouerBon()
            basic.pause(200)
        }
        Etage += 1
        Vitesse += -100
        game.addScore(1)
    } else {
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.Y, 1)
            JouerMauvais()
            basic.pause(200)
        }
        music.playTone(131, music.beat(BeatFraction.Whole))
        Sprite.delete()
        game.removeLife(1)
    }
}
function JouerBon () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Eighth))
}
let X = 0
let Cliqué = 0
let Etage = 0
let Sprite: game.LedSprite = null
Sprite = game.createSprite(0, 0)
let Vitesse = 500
Etage = 1
Cliqué = 0
X = -1
music.setVolume(50)
basic.forever(function () {
    if (Cliqué == 0 && game.score() < 5) {
        Sprite.move(1)
        basic.pause(Vitesse)
        Sprite.ifOnEdgeBounce()
    }
})
