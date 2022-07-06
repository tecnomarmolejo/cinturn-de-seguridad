basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 100) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
})
