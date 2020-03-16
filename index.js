const gradePercent = 74;

if (gradePercent > 84) {
    gradeLetter = "A+";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
} else if (gradePercent < 85, gradePercent > 79) {
    gradeLetter = "A";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
} else if (gradePercent < 80, gradePercent > 74) {
    gradeLetter = "A-";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
} else if (gradePercent < 75, gradePercent > 69) {
    gradeLetter = "B+";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
} else if (gradePercent < 70, gradePercent > 64) {
    gradeLetter = "B";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
} else if (gradePercent < 65, gradePercent > 59) {
    gradeLetter = "B-";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
} else if (gradePercent < 60, gradePercent > 54) {
    gradeLetter = "C+";
    console.log("Student's final grade is an " + gradeLetter + ", student passes.");
} else if (gradePercent < 55, gradePercent > 49) {
    gradeLetter = "C";
    console.log("Student's final grade is an " + gradeLetter + ", student passes.");
} else if (gradePercent < 50, gradePercent > 39) {
    gradeLetter = "D";
    console.log("Student's final grade is an " + gradeLetter + ", student fails.");
} else if (gradePercent < 40, gradePercent >= 0) {
    gradeLetter = "E";
    console.log("Student's final grade is an " + gradeLetter + ", student fails.");
} else {
    gradeLetter = null;
    console.log("Student's percentage grade is invalid");
}