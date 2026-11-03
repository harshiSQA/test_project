function displayProfile() {

    let name = document.getElementById("studentName").value;
    let id = document.getElementById("studentID").value;
    let course = document.getElementById("course").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let grade = document.getElementById("grade").value;

    document.getElementById("result").innerHTML =
        "<h2>Student Information</h2>" +
        "Name: " + name + "<br>" +
        "Student ID: " + id + "<br>" +
        "Course: " + course + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Grade: " + grade;
}

if (grade == "F") {
    message = "Status: Fail";
} else {
    message = "Status: Pass";
}

document.getElementById("result").innerHTML =
    "<h2>Student Information</h2>" +
    "Name: " + name + "<br>" +
    "Student ID: " + id + "<br>" +
    "Course: " + course + "<br>" +
    "Age: " + age + "<br>" +
    "Email: " + email + "<br>" +
    "Grade: " + grade + "<br>" +
    "<strong>" + message + "</strong>";

function getStatus(grade) {

    if (grade == "F") {
        return "Fail";
    } else {
        return "Pass";
    }
}

let status = getStatus(grade);
"Status: " + status