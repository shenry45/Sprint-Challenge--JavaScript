// 1. Copy and paste your prototype in here and refactor into class syntax.


class CubeMaker { // new name to fix duplicate classes
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume = function() {
    return this.length * this.width * this.height;
  }
  surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubicMaker extends CubeMaker{
  constructor(length, width, height) {
    super(length, width, height);
  }
}

const redCube = new CubicMaker(8, 9, 2);

console.log(redCube.surfaceArea());
console.log(redCube.volume());