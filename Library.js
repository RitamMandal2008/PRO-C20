function detectCollision(car, carWeight, carSpeed, wall, wallThickness) {
    if ( wall.x - car.x < (car.width + wall.width)/2 ) {
        car.velocityX = 0;
        var deformation = 0.5 * carWeight * carSpeed * carSpeed / (wallThickness * wallThickness * wallThickness);
  
        return deformation;
    }
  }