const students = [];

function addStudent() {
    const name = prompt("Enter the student's name:");
    const className = prompt("Enter the student's classroom:");
    const grade = parseInt(prompt("Enter the student's grade:"));
    const student = {
        name: name,
        grade: grade,
        class: className
    };

    students.push(student);
    alert("Student added!");
};

function viewStudents() {
    let studentList = "List of students:\n";
    for (const student of students) {
        studentList += `${student.name} from class ${student.class}: ${student.grade}\n`;
    }
    alert(studentList);
}