input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    vini = randint(1, 3)
    if (vini == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (vini == 2) {
        basic.showIcon(IconNames.Square)
    } else if (vini == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    basic.showIcon(IconNames.Square)
})
let vini = 0
basic.showString("Ola")
basic.forever(function () {
	
})
