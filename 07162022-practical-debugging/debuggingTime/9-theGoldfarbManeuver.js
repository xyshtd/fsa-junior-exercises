class StarShip {
  constructor () {
    this.roll = 0;
    this.pitch = 0;
    this.yaw = 0;
  }
  
  goldfarbManeuver () {
    // if (this.canSafelyPerformGoldfarbManeuver() = true) {
    if (this.canSafelyPerformGoldfarbManeuver() === true) {
      this.roll = Math.abs(Math.min(this.pitch, this.yaw) * Math.sin(22)) * 360;
    }
  }
  
  canSafelyPerformGoldfarbManeuver () {
    return this.yaw < 45 && this.pitch > 87;
  }
}

const USSBalthazar = new StarShip()
USSBalthazar.goldfarbManeuver()