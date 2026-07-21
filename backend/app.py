from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

from utils.model_loader import load_model, load_scaler
from utils.helper import get_customer_segment
from utils.dashboard import (
    get_summary,
    get_cluster_distribution,
    get_cluster_analysis
)

app = Flask(__name__)
CORS(app)

# Load ML Objects
kmeans_model = load_model()
scaler = load_scaler()

print("✅ Machine Learning Model Loaded Successfully!")
print("✅ StandardScaler Loaded Successfully!")


# -------------------------------------------------
# HOME
# -------------------------------------------------

@app.route("/")
def home():

    return jsonify({
        "message": "Customer Segmentation API Running Successfully",
        "status": "Success"
    })


# -------------------------------------------------
# DATASET SUMMARY
# -------------------------------------------------

@app.route("/summary")
def summary():

    return jsonify(get_summary())


# -------------------------------------------------
# CLUSTER DISTRIBUTION
# -------------------------------------------------

@app.route("/clusters")
def clusters():

    return jsonify(get_cluster_distribution())


# -------------------------------------------------
# CLUSTER ANALYSIS
# -------------------------------------------------

@app.route("/cluster-analysis")
def cluster_analysis():

    return jsonify(get_cluster_analysis())


# -------------------------------------------------
# PREDICT CUSTOMER SEGMENT
# -------------------------------------------------

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        required_fields = [
            "Age",
            "Annual Income (k$)",
            "Spending Score (1-100)"
        ]

        for field in required_fields:

            if field not in data:

                return jsonify({
                    "Status": "Error",
                    "Message": f"Missing field: {field}"
                }), 400

        age = float(data["Age"])
        income = float(data["Annual Income (k$)"])
        spending = float(data["Spending Score (1-100)"])

        customer = np.array([[age, income, spending]])

        customer_scaled = scaler.transform(customer)

        cluster = int(kmeans_model.predict(customer_scaled)[0])

        segment = get_customer_segment(cluster)

        return jsonify({

            "Status": "Success",
            "Cluster": cluster,

            "Customer Segment":
                segment["Customer Segment"],

            "Description":
                segment["Description"],

            "Business Strategy":
                segment["Business Strategy"]

        })

    except Exception as e:

        return jsonify({
            "Status": "Error",
            "Message": str(e)
        }), 500


# -------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)