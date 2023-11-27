function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42
    const distance = Math.abs(someValue - hqLocation);
    return distance;
  }

  function distanceFromHqInFeet(someValue) {
    const distanceInBlocks = distanceFromHqInBlocks(someValue);
    const blockLength = 264;
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    const feetTraveled = Math.abs(destination - start) * blockLength;
    return feetTraveled;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    const blockLength = 264
    const feetTraveled = Math.abs(destination - start) * blockLength
    if (feetTraveled <= 400) {
        return 0
    } else if (feetTraveled <= 2000) {
        return 0.02 * (feetTraveled - 400)
    } else if (feetTraveled <= 2500) {
        return 25
    } else if (feetTraveled > 2501)
        return 'cannot travel that far'
  }
