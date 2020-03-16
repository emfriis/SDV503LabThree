const gradePercent = 83; // Declares value of the student's percentage grade.

if (gradePercent <= 100, gradePercent > 84) { // Assigns a student an A+ letter grade if their percentage grade is greater than 85% and less than or equal to 100%.
    const gradeLetter = "A+";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
} else if (gradePercent < 85, gradePercent > 79) { // Assigns a student an A letter grade if their percentage grade is between 85% and 79%.
    const gradeLetter = "A";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
} else if (gradePercent < 80, gradePercent > 74) { // Assigns a student an A letter grade if their percentage grade is between 80% and 74%.
    const gradeLetter = "A-";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
} else if (gradePercent < 75, gradePercent > 69) { // Assigns a student an B+ letter grade if their percentage grade is between 75% and 69%.
    const gradeLetter = "B+";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
} else if (gradePercent < 70, gradePercent > 64) { // Assigns a student a B letter grade if their percentage grade is between 70% and 64%.
    const gradeLetter = "B";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
} else if (gradePercent < 65, gradePercent > 59) { // Assigns a student a B- letter grade if their percentage grade is between 65% and 59%.
    const gradeLetter = "B-";
    console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
} else if (gradePercent < 60, gradePercent > 54) { // Assigns a student a C+ letter grade if their percentage grade is between 60% and 54%.
    const gradeLetter = "C+";
    console.log("Student's final grade is an " + gradeLetter + ", student passes.");
} else if (gradePercent < 55, gradePercent > 49) { // Assigns a student a C letter grade if their percentage grade is between 55% and 49%.
    const gradeLetter = "C";
    console.log("Student's final grade is an " + gradeLetter + ", student passes.");
} else if (gradePercent < 50, gradePercent > 39) { // Assigns a student a D letter grade if their percentage grade is between 50% and 39%.
    const gradeLetter = "D";
    console.log("Student's final grade is an " + gradeLetter + ", student fails.");
} else if (gradePercent < 40, gradePercent >= 0) { // Assigns a student an letter grade if their percentage grade is less than 40% and greater than or equal to 0%.
    const gradeLetter = "E";
    console.log("Student's final grade is an " + gradeLetter + ", student fails.");
} else { // Assigns a student null for their letter grade if their percentage grade is does not satisfy any number comparisons.
    const gradeLetter = null;
    console.log("Student's percentage grade is invalid");
}

switch (gradePercent) {
    case 100:
    case 99:
    case 98:
    case 97:
    case 96:
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
    case 89:
    case 88:
    case 87:
    case 86:
        if (gradePercent <= 100, gradePercent > 84) { // Assigns a student an A+ letter grade if their percentage grade is greater than 85% and less than or equal to 100%.
            const gradeLetter = "A+";
            console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
        }
    case 84:
    case 83:
    case 82:
    case 81:
    case 80:
        if (gradePercent < 85, gradePercent > 79) { // Assigns a student an A letter grade if their percentage grade is between 85% and 79%.
            const gradeLetter = "A";
            console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
        }
        break;
    case 79:
    case 78:
    case 77:
    case 76:
    case 75:
        if (gradePercent < 80, gradePercent > 74) { // Assigns a student an A letter grade if their percentage grade is between 80% and 74%.
            const gradeLetter = "A-";
            console.log("Student's final grade is an " + gradeLetter + ", student passes with distinction.");
        }
        break;
    case 74:
    case 73:
    case 72:
    case 71:
    case 70:
        if (gradePercent < 75, gradePercent > 69) { // Assigns a student an B+ letter grade if their percentage grade is between 75% and 69%.
            const gradeLetter = "B+";
            console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
        }
        break;
    case 69:
    case 68:
    case 67:
    case 66:
    case 65:
        if (gradePercent < 70, gradePercent > 64) { // Assigns a student a B letter grade if their percentage grade is between 70% and 64%.
            const gradeLetter = "B";
            console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
        }
        break;
    case 64:
    case 63:
    case 62:
    case 61:
    case 60:
        if (gradePercent < 65, gradePercent > 59) { // Assigns a student a B- letter grade if their percentage grade is between 65% and 59%.
            const gradeLetter = "B-";
            console.log("Student's final grade is an " + gradeLetter + ", student passes with merit.");
        }
        break;
    case 59:
    case 58:
    case 57:
    case 56:
    case 55:
        if (gradePercent < 60, gradePercent > 54) { // Assigns a student a C+ letter grade if their percentage grade is between 60% and 54%.
            const gradeLetter = "C+";
            console.log("Student's final grade is an " + gradeLetter + ", student passes.");
        }
        break;
    case 54:
    case 53:
    case 52:
    case 51:
    case 50:
        if (gradePercent < 55, gradePercent > 49) { // Assigns a student a C letter grade if their percentage grade is between 55% and 49%.
            const gradeLetter = "C";
            console.log("Student's final grade is an " + gradeLetter + ", student passes.");
        }
        break;
    case 49:
    case 48:
    case 47:
    case 46:
    case 45:
    case 44:
    case 43:
    case 42:
    case 41:
    case 40:
        if (gradePercent < 50, gradePercent > 39) { // Assigns a student a D letter grade if their percentage grade is between 50% and 39%.
            const gradeLetter = "D";
            console.log("Student's final grade is an " + gradeLetter + ", student fails.");
        }
        break;
    case 39:
    case 38:
    case 37:
    case 36:
    case 35:
    case 34:
    case 33:
    case 32:
    case 31:
    case 30:
    case 29:
    case 28:
    case 27:
    case 26:
    case 25:
    case 24:
    case 23:
    case 22:
    case 21:
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        if (gradePercent < 40, gradePercent >= 0) { // Assigns a student an letter grade if their percentage grade is less than 40% and greater than or equal to 0%.
            const gradeLetter = "E";
            console.log("Student's final grade is an " + gradeLetter + ", student fails.");
        }
        break;
    default: // Assigns a student null for their letter grade if their percentage grade is does not satisfy any number comparisons.
        const gradeLetter = null;
        console.log("Student's percentage grade is invalid");
}