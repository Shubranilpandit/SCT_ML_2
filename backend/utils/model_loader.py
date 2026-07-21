import joblib
import os

# Get absolute path of the current file
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(BASE_DIR, "models", "kmeans_model.pkl")
SCALER_PATH = os.path.join(BASE_DIR, "models", "scaler.pkl")


def load_model():
    """
    Load the trained K-Means model.
    """

    return joblib.load(MODEL_PATH)


def load_scaler():
    """
    Load the fitted StandardScaler.
    """

    return joblib.load(SCALER_PATH)