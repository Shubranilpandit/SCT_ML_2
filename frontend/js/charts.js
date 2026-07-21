// ======================================================
// Global Chart Variable
// ======================================================

let clusterChart = null;


// ======================================================
// Load Cluster Distribution Chart
// ======================================================

async function loadClusterChart() {

    const clusterData = await getClusters();

    if (!clusterData) {

        console.error("Unable to load cluster data.");

        return;

    }

    // Convert JSON into Arrays

    const labels = Object.keys(clusterData);

    const values = Object.values(clusterData);


    // Get Canvas

    const ctx = document
        .getElementById("clusterChart")
        .getContext("2d");


    // Destroy previous chart (if exists)

    if (clusterChart) {

        clusterChart.destroy();

    }


    // Create Chart

    clusterChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [

                {

                    label: "Number of Customers",

                    data: values,

                    backgroundColor: [

                        "#4F46E5",
                        "#7C3AED",
                        "#06B6D4",
                        "#10B981",
                        "#F59E0B"

                    ],

                    borderRadius: 12,

                    borderWidth: 1

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {

                duration: 1800,

                easing: "easeOutQuart"

            },

            plugins: {

                legend: {

                    display: false

                },

                title: {

                    display: true,

                    text: "Customer Distribution Across Clusters",

                    font: {

                        size: 20,

                        weight: "bold"

                    }

                }

            },

            scales: {

                x: {

                    title: {

                        display: true,

                        text: "Cluster"

                    },

                    grid: {

                        display: false

                    }

                },

                y: {

                    beginAtZero: true,

                    title: {

                        display: true,

                        text: "Customers"

                    }

                }

            }

        }

    });

}