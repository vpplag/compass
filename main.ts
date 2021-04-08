basic.forever(function () {
    while (input.compassHeading() < 30 || input.compassHeading() > 330) {
        basic.showArrow(ArrowNames.North)
    }
    basic.clearScreen()
})
