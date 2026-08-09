const books = JSON.parse(localStorage.getItem("books")) || [];
const students = JSON.parse(localStorage.getItem("students")) || [];
const issued = JSON.parse(localStorage.getItem("issuedBooks")) || [];
const returned = JSON.parse(localStorage.getItem("returnedBooks")) || [];

document.getElementById("books").innerHTML = books.length;
document.getElementById("students").innerHTML = students.length;
document.getElementById("issued").innerHTML = issued.length;
document.getElementById("returned").innerHTML = returned.length;

let totalFine = 0;

returned.forEach(book => {

    totalFine += book.fine;

});

document.getElementById("fineAmount").innerHTML = "₹" + totalFine;

// Chart

const ctx = document.getElementById("reportChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [

            "Books",

            "Students",

            "Issued",

            "Returned"

        ],

        datasets: [{

            label: "Library Statistics",

            data: [

                books.length,

                students.length,

                issued.length,

                returned.length

            ],

            backgroundColor: [

                "#3b82f6",

                "#22c55e",

                "#f59e0b",

                "#7c3aed"

            ],

            borderRadius: 10

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: false

            }

        }

    }

});

function downloadReport(){

let report = `
LIBRARY MANAGEMENT SYSTEM REPORT

---------------------------------

Total Books : ${books.length}

Total Students : ${students.length}

Issued Books : ${issued.length}

Returned Books : ${returned.length}

Fine Collected : ₹${totalFine}

---------------------------------
`;

const blob = new Blob([report], {type:"text/plain"});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "Library_Report.txt";

link.click();

}