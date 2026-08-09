let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

displayIssuedBooks();

function issueBook() {

    const student = document.getElementById("studentName").value.trim();
    const book = document.getElementById("bookTitle").value.trim();
    const issueDate = document.getElementById("issueDate").value;
    const dueDate = document.getElementById("dueDate").value;

    if (!student || !book || !issueDate || !dueDate) {

        alert("Please fill all fields.");

        return;

    }

    issuedBooks.push({

        id: Date.now(),

        student,

        book,

        issueDate,

        dueDate,

        status: "Issued"

    });

    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    displayIssuedBooks();

    document.getElementById("studentName").value = "";
    document.getElementById("bookTitle").value = "";
    document.getElementById("issueDate").value = "";
    document.getElementById("dueDate").value = "";

}

function displayIssuedBooks() {

    let output = "";

    issuedBooks.forEach(item => {

        output += `

<tr>

<td>${item.id}</td>

<td>${item.student}</td>

<td>${item.book}</td>

<td>${item.issueDate}</td>

<td>${item.dueDate}</td>

<td>
<span class="issued">
${item.status}
</span>
</td>

<td>

<button class="delete"

onclick="deleteIssue(${item.id})">

Delete

</button>

</td>

</tr>

`;

    });

    document.getElementById("issueTable").innerHTML = output;

}

function deleteIssue(id) {

    issuedBooks = issuedBooks.filter(item => item.id !== id);

    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    displayIssuedBooks();

}