def RED():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def off():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(1000)
    strip.clear()
    range2 = strip.range(1, 1)
    basic.pause(1000)
    strip.clear()
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    range2 = strip.range(2, 1)
    basic.pause(1000)
    strip.clear()
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(1000)
    strip.clear()
def yelow():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def Green():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))
range2: neopixel.Strip = None
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.set_brightness(30)

def on_forever():
    RED()
    basic.pause(5000)
    Green()
    basic.pause(5000)
    yelow()
    basic.pause(1000)
basic.forever(on_forever)
