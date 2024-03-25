function calculateGrade(mark) {
    if (mark >= 80) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

const userMark = parseFloat(prompt('Enter student marks (between 0 and 100):'));
if (isNaN(userMark) || userMark < 0 || userMark > 100) {
    console.log('Invalid input. Please enter a valid mark between 0 and 100.');
} else {
    const grade = calculateGrade(userMark);
    console.log(`Grade: ${grade}`);
}
