// ======================================================
// Flask Backend Base URL
// ======================================================

const BASE_URL = "http://127.0.0.1:5000";


// ======================================================
// Generic GET Request Function
// ======================================================

async function getData(endpoint) {

    try {

        const response = await fetch(`${BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();

    }

    catch (error) {

        console.error("GET Request Failed:", error);

        return null;

    }

}


// ======================================================
// Generic POST Request Function
// ======================================================

async function postData(endpoint, data) {

    try {

        const response = await fetch(`${BASE_URL}${endpoint}`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();

    }

    catch (error) {

        console.error("POST Request Failed:", error);

        return null;

    }

}


// ======================================================
// Dashboard APIs
// ======================================================

async function getSummary() {

    return await getData("/summary");

}


async function getClusters() {

    return await getData("/clusters");

}


async function getClusterAnalysis() {

    return await getData("/cluster-analysis");

}


// ======================================================
// Prediction API
// ======================================================

async function predictCustomer(age, income, spending) {

    return await postData("/predict", {

        "Age": age,

        "Annual Income (k$)": income,

        "Spending Score (1-100)": spending

    });

}