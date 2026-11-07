class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return this.grades.length > 0
            ? total / this.grades.length
            : 0;
    }

    // Get Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Final Result
    getResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعه";
        }
    }
}

// Create Students List
const studentsList = [
    new Student(1, "ayman", [90, 80, 95], 90),
    new Student(2, "ahmed", [45, 48, 44], 80),
    new Student(3, "mohamed", [70, 80, 75], 85),
    new Student(4, "ali", [40, 45, 48], 70)
];

// Filter Struggling Students
const strugglingStudents = studentsList.filter(student => {
    const average = student.calculateAverage();

    return average >= 40 && average <= 49;
});

// Map: Add 5 Degrees
const upgradedgrades = strugglingStudents.map(student => {
    const oldAverage = student.calculateAverage();

    const newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: newAverage
    };
});

// Reduce: Calculate Total
const totalNewAverages = upgradedgrades.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// Calculate Average With Protection
let upgradedAverge = 0;

if (upgradedgrades.length > 0) {
    upgradedAverge = totalNewAverages / upgradedgrades.length;
}

// Print All Students Report
console.log("Students Report");

for (let i = 0; i < studentsList.length; i++) {
    const student = studentsList[i];

    const averagee = student.calculateAverage();
    const grade = student.getGrade(averagee);
    const result = student.getResult();

    console.log(`
        ID: ${student.id}
        Name: ${student.name}
        Average: ${averagee.toFixed(2)}
        Grade: ${grade}
        Result: ${result}
    `);
}

// Print Mercy Students
console.log("Mercy Students");
console.log(upgradedgrades);

// Print Mercy Average
console.log("Mercy Average");
console.log(upgradedAverge.toFixed(2));