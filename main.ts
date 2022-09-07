let SORTEIO = 0
input.onGesture(Gesture.Shake, function () {
    SORTEIO = randint(0, 2)
    if (SORTEIO == 0) {
        basic.showString("NAO SEI")
    } else if (SORTEIO == 2) {
        basic.showString("SIM")
    } else {
        basic.showString("NAO")
    }
})
