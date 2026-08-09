let returnedBooks = JSON.parse(localStorage.getItem("returnedBooks")) || [];

displayReturns();

function returnBook() {

    const student = document.getElementById("studentName").value.trim();
    const book = document.getElementById("bookTitle").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const returnDate = document.getElementById("returnDate").value;

    if (!student || !book || !dueDate || !returnDate) {

        alert("Please fill all fields.");

        return;

    }

    let fine = calculateFine(dueDate, returnDate);

    returnedBooks.push({

        id: Date.now(),

        student,

        book,

        dueDate,

        returnDate,

        fine,

        status: "Returned"

    });

    localStorage.setItem("returnedBooks", JSON.stringify(returnedBooks));

    displayReturns();

    document.getElementById("studentName").value = "";
    document.getElementById("bookTitle").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("returnDate").value = "";

}

function calculateFine(dueDate, returnDate) {

    const due = new Date(dueDate);
    const ret = new Date(returnDate);

    let days = Math.floor((ret - due) / (1000 * 60 * 60 * 24));

    if (days <= 0)
        return 0;

    return days * 10;

}

function displayReturns() {

    let output = "";

    returnedBooks.forEach(book => {

        output += `

<tr>

<td>${book.id}</td>

<td>${book.student}</td>

<td>${book.book}</td>

<td>${book.dueDate}</td>

<td>${book.returnDate}</td>

<td>₹${book.fine}</td>

<td>

<span class="available">

${book.status}

</span>

</td>

<td>

<button class="delete"

onclick="deleteReturn(${book.id})">

Delete

</button>

</td>

</tr>

`;

    });

    document.getElementById("returnTable").innerHTML = output;

}

function deleteReturn(id){

    if(confirm("Delete this record?")){

        returnedBooks = returnedBooks.filter(book => book.id != id);

        localStorage.setItem("returnedBooks", JSON.stringify(returnedBooks));

        displayReturns();

    }

}