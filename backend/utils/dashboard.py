import pandas as pd
from config import DATASET_PATH

# Load dataset only once
df = pd.read_csv(DATASET_PATH)


def get_summary():

    return {
        "Total Customers": int(df.shape[0]),
        "Total Features": int(df.shape[1]),
        "Total Clusters": int(df["Cluster"].nunique()),
        "Columns": list(df.columns)
    }


def get_cluster_distribution():

    cluster_counts = (
        df["Cluster"]
        .value_counts()
        .sort_index()
    )

    return cluster_counts.to_dict()


def get_cluster_analysis():

    analysis = (
        df.groupby("Cluster")[[
            "Age",
            "Annual Income (k$)",
            "Spending Score (1-100)"
        ]]
        .mean()
        .round(2)
    )

    return analysis.reset_index().to_dict(orient="records")