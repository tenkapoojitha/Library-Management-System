// ===============================
// Library Chart
// ===============================

const ctx = document.getElementById("myChart");

let myChart = new Chart(ctx, {

    type: "bar",

    data: {

        labels: [

            "Total Books",
            "Available",
            "Issued"

        ],

        datasets: [{

            label: "Library Statistics",

            data: [0, 0, 0],

            backgroundColor: [

                "#3b82f6",
                "#22c55e",
                "#ef4444"

            ],

            borderRadius: 10,

            borderWidth: 1

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                display: false

            }

        },

        scales: {

            y: {

                beginAtZero: true,

                ticks: {

                    stepSize: 1

                }

            }

        }

    }

});

// ===============================
// Update Chart Automatically
// ===============================

function updateChart(total, available, issued) {

    myChart.data.datasets[0].data = [

        total,
        available,
        issued

    ];

    myChart.update();

}