// ================================
// Library Management System
// script.js
// ================================

// Load books from Local Storage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Display books when page loads
displayBooks();

// ================================
// Add Book
// ================================

function addBook() {

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value.trim();

    if (title === "" || author === "" || category === "") {
        alert("Please fill all fields!");
        return;
    }

    books.push({
        id: Date.now(),
        title: title,
        author: author,
        category: category,
        status: "Available"
    });

    displayBooks();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";

    alert("Book Added Successfully!");
}

// ================================
// Display Books
// ================================

function displayBooks() {

    let output = "";

    let available = 0;
    let issued = 0;

    books.forEach(book => {

        if (book.status === "Available")
            available++;
        else
            issued++;

        output += `
        <tr>

            <td>${book.id}</td>

            <td>${book.title}</td>

            <td>${book.author}</td>

            <td>${book.category}</td>

            <td>
                <span class="${book.status === "Available" ? "available" : "issued"}">
                    ${book.status}
                </span>
            </td>

            <td>

                <button class="issue"
                onclick="issueBook(${book.id})">
                Issue
                </button>

                <button class="return"
                onclick="returnBook(${book.id})">
                Return
                </button>

                <button class="edit"
                onclick="editBook(${book.id})">
                Edit
                </button>

                <button class="delete"
                onclick="deleteBook(${book.id})">
                Delete
                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById("bookTable").innerHTML = output;

    document.getElementById("totalBooks").innerHTML = books.length;

    document.getElementById("availableBooks").innerHTML = available;

    document.getElementById("issuedBooks").innerHTML = issued;

    // Save to Local Storage
    localStorage.setItem("books", JSON.stringify(books));

    // Update Chart
    if (typeof updateChart === "function") {
        updateChart(books.length, available, issued);
    }
}

// ================================
// Issue Book
// ================================

function issueBook(id) {

    books.forEach(book => {

        if (book.id === id) {
            book.status = "Issued";
        }

    });

    displayBooks();

}

// ================================
// Return Book
// ================================

function returnBook(id) {

    books.forEach(book => {

        if (book.id === id) {
            book.status = "Available";
        }

    });

    displayBooks();

}

// ================================
// Delete Book
// ================================

function deleteBook(id) {

    let confirmDelete = confirm("Are you sure you want to delete this book?");

    if (confirmDelete) {

        books = books.filter(book => book.id !== id);

        displayBooks();

        alert("Book Deleted Successfully!");

    }

}

// ================================
// Edit Book
// ================================

function editBook(id) {

    let book = books.find(book => book.id === id);

    if (!book) return;

    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("category").value = book.category;

    books = books.filter(b => b.id !== id);

    displayBooks();

}

// ================================
// Search Book
// ================================

function searchBook() {

    const value = document.getElementById("search").value.toLowerCase();

    const rows = document.querySelectorAll("#bookTable tr");

    rows.forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";

    });

}