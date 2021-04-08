basic.forever(function () {
    while (input.compassHeading() < 45 || input.compassHeading() > 315) {
        basic.showArrow(ArrowNames.North)
    }
    basic.clearScreen()
})
