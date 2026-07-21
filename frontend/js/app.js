// ======================================================
// Application Initialization
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    initializeApplication();

});


// ======================================================
// Initialize Complete Dashboard
// ======================================================

async function initializeApplication() {

    try {

        await initializeDashboard();

        await loadClusterChart();

        setupPredictionForm();

        console.log("Dashboard Loaded Successfully");

    }

    catch (error) {

        console.error("Application Initialization Failed");

        console.error(error);

    }

}


// ======================================================
// Prediction Form
// ======================================================

function setupPredictionForm() {

    const form = document.getElementById("predictionForm");

    form.addEventListener("submit", async function(event) {

        event.preventDefault();

        // Read Inputs

        const age = Number(
            document.getElementById("age").value
        );

        const income = Number(
            document.getElementById("income").value
        );

        const spending = Number(
            document.getElementById("spending").value
        );


        // Basic Validation

        if (

            age <= 0 ||

            income < 0 ||

            spending < 0 ||

            spending > 100

        ){

            alert("Please enter valid customer details.");

            return;

        }


        // Loading State

        const segmentName =
            document.getElementById("segmentName");

        const description =
            document.getElementById("segmentDescription");

        const strategy =
            document.getElementById("businessStrategy");


        segmentName.textContent = "Predicting...";

        description.textContent = "Please wait...";

        strategy.textContent = "";


        // API Call

        const result = await predictCustomer(

            age,

            income,

            spending

        );


        if(!result){

            segmentName.textContent = "Prediction Failed";

            description.textContent =
                "Unable to connect to Flask API.";

            strategy.textContent = "";

            return;

        }


        // Display Result

        segmentName.textContent =
            result["Customer Segment"];

        description.textContent =
            result["Description"];

        strategy.textContent =
            result["Business Strategy"];


        // Reset Form

        form.reset();

    });

}