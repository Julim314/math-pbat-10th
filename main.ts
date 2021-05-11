while (true) {
    music.setVolume(225)
    light.setBrightness(225)
    if (input.acceleration(Dimension.X) > 10 || input.acceleration(Dimension.X) < 0) {
        light.setBrightness(100)
        light.setPixelColor(0, light.rgb(255, 255, 255))
        light.setPixelColor(1, light.rgb(255, 255, 255))
        light.setPixelColor(2, light.rgb(255, 255, 255))
        light.setPixelColor(3, light.rgb(255, 255, 255))
        light.setPixelColor(4, light.rgb(255, 255, 255))
        light.setPixelColor(5, light.rgb(255, 255, 255))
        light.setPixelColor(6, light.rgb(255, 255, 255))
        light.setPixelColor(7, light.rgb(255, 255, 255))
        light.setPixelColor(8, light.rgb(255, 255, 255))
        light.setPixelColor(9, light.rgb(255, 255, 255))
        pause(100)
        light.clear()
        music.siren.playUntilDone()
    } else {
        light.clear()
        music.siren.stop()
    }
    
}
