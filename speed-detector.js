function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log('Ok');
        return 0;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        console.log('License suspended');
    } else {
        console.log(`Points: ${points}`);
    }
    return points;
}

const userSpeed = parseFloat(prompt('Enter the car speed (in km/h):'));
if (isNaN(userSpeed) || userSpeed < 0) {
    console.log('Invalid input. Please enter a valid positive speed.');
} else {
    calculateDemeritPoints(userSpeed);
}
