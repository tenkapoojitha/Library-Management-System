// ===============================
// Student Management System
// ===============================

let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

// ===============================
// Add Student
// ===============================

function addStudent() {

    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("studentRoll").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const dept = document.getElementById("studentDept").value.trim();
    const year = document.getElementById("studentYear").value;

    if (
        name === "" ||
        roll === "" ||
        email === "" ||
        phone === "" ||
        dept === "" ||
        year === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    students.push({

        id: Date.now(),

        name,

        roll,

        email,

        phone,

        dept,

        year,

        status: "Active"

    });

    localStorage.setItem("students", JSON.stringify(students));

    clearForm();

    displayStudents();

}

// ===============================
// Display Students
// ===============================

function displayStudents() {

    let output = "";

    let active = 0;

    let finalYear = 0;

    let departments = [];

    students.forEach(student => {

        if (student.status === "Active")
            active++;

        if (student.year === "4th Year")
            finalYear++;

        if (!departments.includes(student.dept))
            departments.push(student.dept);

        output += `

<tr>

<td>${student.id}</td>

<td>${student.name}</td>

<td>${student.roll}</td>

<td>${student.email}</td>

<td>${student.phone}</td>

<td>${student.dept}</td>

<td>${student.year}</td>

<td>

<span class="available">

${student.status}

</span>

</td>

<td>

<button class="edit"

onclick="editStudent(${student.id})">

Edit

</button>

<button class="delete"

onclick="deleteStudent(${student.id})">

Delete

</button>

</td>

</tr>

`;

    });

    document.getElementById("studentTable").innerHTML = output;

    document.getElementById("totalStudents").innerHTML = students.length;

    document.getElementById("activeStudents").innerHTML = active;

    document.getElementById("totalDepartments").innerHTML = departments.length;

    document.getElementById("finalYearStudents").innerHTML = finalYear;

}

// ===============================
// Delete Student
// ===============================

function deleteStudent(id) {

    if (!confirm("Delete this student?"))
        return;

    students = students.filter(student => student.id !== id);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

}

// ===============================
// Edit Student
// ===============================

function editStudent(id) {

    const student = students.find(s => s.id === id);

    if (!student)
        return;

    document.getElementById("studentName").value = student.name;

    document.getElementById("studentRoll").value = student.roll;

    document.getElementById("studentEmail").value = student.email;

    document.getElementById("studentPhone").value = student.phone;

    document.getElementById("studentDept").value = student.dept;

    document.getElementById("studentYear").value = student.year;

    students = students.filter(s => s.id !== id);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

}

// ===============================
// Search Student
// ===============================

function searchStudent() {

    const value = document
        .getElementById("searchStudent")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";

    });

}

// ===============================
// Clear Form
// ===============================

function clearForm() {

    document.getElementById("studentName").value = "";

    document.getElementById("studentRoll").value = "";

    document.getElementById("studentEmail").value = "";

    document.getElementById("studentPhone").value = "";

    document.getElementById("studentDept").value = "";

    document.getElementById("studentYear").value = "";

}