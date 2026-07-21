// ======================================================
// Dashboard Elements
// ======================================================

const totalCustomersElement = document.getElementById("totalCustomers");
const totalFeaturesElement = document.getElementById("totalFeatures");
const totalClustersElement = document.getElementById("totalClusters");

const clusterTableBody = document.getElementById("clusterTableBody");


// ======================================================
// Load Dashboard Summary
// ======================================================

async function loadDashboardSummary() {

    const summary = await getSummary();

    if (!summary) {

        console.error("Unable to load dashboard summary.");

        return;

    }

    totalCustomersElement.textContent = summary["Total Customers"];

    totalFeaturesElement.textContent = summary["Total Features"];

    totalClustersElement.textContent =
        summary["Total Clusters"];
}


// ======================================================
// Load Cluster Analysis Table
// ======================================================

async function loadClusterAnalysisTable() {

    const analysis = await getClusterAnalysis();

    if (!analysis) {

        console.error("Unable to load cluster analysis.");

        return;

    }

    clusterTableBody.innerHTML = "";

    analysis.forEach(cluster => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${cluster.Cluster}</td>
            <td>${cluster.Age}</td>
            <td>${cluster["Annual Income (k$)"]}</td>
            <td>${cluster["Spending Score (1-100)"]}</td>
        `;

        clusterTableBody.appendChild(row);

    });

}


// ======================================================
// Load Complete Dashboard
// ======================================================

async function initializeDashboard() {

    await loadDashboardSummary();

    await loadClusterAnalysisTable();

}