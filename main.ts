radio.onReceivedNumber(function (receivedNumber) {
    폭탄시간 = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    if (폭탄시간 > 0) {
        radio.sendNumber(폭탄시간)
        폭탄시간 = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    basic.clearScreen()
    폭탄시간 = randint(5, 20)
})
let 폭탄시간 = 0
폭탄시간 = -1
radio.setGroup(1)
basic.forever(function () {
    if (폭탄시간 == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    }
    if (폭탄시간 < 0) {
        basic.clearScreen()
    }
    if (폭탄시간 > 0) {
        basic.showIcon(IconNames.Skull)
        폭탄시간 += -1
    }
})
