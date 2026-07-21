# 🛍️ Customer Segmentation using K-Means Clustering

A Machine Learning web application that segments customers into different groups using the K-Means Clustering algorithm. The project includes a Flask REST API backend and an interactive frontend dashboard built with HTML, CSS, JavaScript, and Chart.js.

---

## 📌 Project Overview

Customer segmentation is one of the most important applications of Machine Learning in marketing and business analytics. This project groups customers with similar purchasing behavior into different clusters, helping businesses understand customer patterns and make data-driven decisions.

The application allows users to:

- View customer segmentation statistics
- Visualize cluster distribution
- Analyze cluster characteristics
- Predict the segment of a new customer based on their Age, Annual Income, and Spending Score

---

## ✨ Features

- 📊 Customer Segmentation using K-Means Clustering
- 📈 Interactive Dashboard
- 📉 Cluster Distribution Visualization (Chart.js)
- 📋 Cluster Analysis Table
- 🤖 Predict Customer Segment
- 🔥 Flask REST API
- 💻 Responsive User Interface
- 🎨 Modern Glassmorphism Design

---

## 🛠️ Tech Stack

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

### Backend
- Flask
- Flask-CORS

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Chart.js

### Development Tools
- Jupyter Notebook
- VS Code
- Git
- GitHub

---

## 📂 Project Structure

```text
TASK-2/
│
├── backend/
│   ├── data/
│   ├── models/
│   ├── notebooks/
│   ├── output/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── app.py
│   ├── config.py
│   └── requirements.txt
│
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── screenshots/
│   └── index.html
│
├── LICENSE
├── README.md
└── .gitignore
```

---

## 📊 Dataset

**Dataset:** Mall Customers Dataset

Features used for clustering:

- Age
- Annual Income (k$)
- Spending Score (1–100)

---

## ⚙️ Machine Learning Workflow

1. Data Collection
2. Data Preprocessing
3. Feature Selection
4. Feature Scaling
5. Elbow Method
6. K-Means Model Training
7. Customer Segmentation
8. Cluster Visualization
9. Model Saving
10. Flask API Integration

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/Shubranilpandit/SCT_ML_2.git
```

### Navigate into the project

```bash
cd SCT_ML_2
```

### Create Virtual Environment

```bash
python -m venv .venv
```

### Activate Virtual Environment

Windows

```bash
.venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r backend/requirements.txt
```

---

## ▶️ Run Backend

```bash
cd backend
python app.py
```

Backend will run on:

```
http://127.0.0.1:5000
```

---

## 🌐 Run Frontend

Simply open:

```
frontend/index.html
```

or use VS Code Live Server.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | API Status |
| GET | `/summary` | Dashboard Summary |
| GET | `/clusters` | Cluster Distribution |
| GET | `/cluster-analysis` | Cluster Statistics |
| POST | `/predict` | Predict Customer Segment |

---

## 📸 Screenshots

### Dashboard

> Add dashboard screenshot here.

```
frontend/screenshots/dashboard.png
```

### Cluster Analysis

> Add cluster analysis screenshot here.

```
frontend/screenshots/analysis.png
```

### Prediction

> Add prediction screenshot here.

```
frontend/screenshots/prediction.png
```

## 🎯 Learning Outcomes

Through this project, I learned:

- Data Preprocessing
- K-Means Clustering
- Feature Scaling
- Model Serialization using Joblib
- REST API Development using Flask
- Frontend & Backend Integration
- Interactive Dashboard Development
- Git & GitHub Workflow

---
