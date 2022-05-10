function off2 () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.clear()
    range2 = strip.range(2, 1)
    basic.pause(1000)
    strip.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Green))
    range2 = strip.range(1, 1)
    basic.pause(1000)
    strip.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.clear()
}
function Clear () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    range2 = strip.range(1, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    range2 = strip.range(2, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
}
function RED () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    range2 = strip.range(1, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    range2 = strip.range(2, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
}
function off () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.clear()
    range2 = strip.range(2, 1)
    basic.pause(1000)
    strip.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Green))
    range2 = strip.range(1, 1)
    basic.pause(1000)
    strip.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.clear()
}
input.onButtonPressed(Button.AB, function () {
    RED()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(1000)
    count = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count)
        count += -1
    }
})
function yelow () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    range2 = strip.range(1, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range2 = strip.range(2, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Green () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    range2 = strip.range(1, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    range2 = strip.range(2, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Green))
}
let count = 0
let range2: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.No)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(30)
basic.forever(function () {
    off()
})
