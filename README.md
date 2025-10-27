# 🧠 Student Stress Level Prediction Application

This is an end-to-end machine learning project that predicts a student's stress level based on academic and personal factors. The goal is to identify stress triggers and provide an interactive application for real-time predictions.

This application is built using a **Random Forest model** from Scikit-learn and deployed as an interactive web app using **Streamlit**.

---

## Live Application

1. Access the deployed dashboard here:
https://nova-mental-health.streamlit.app
(Note: The app may be in the sleep mode.)

2. Access the full PDF documentation here:
https://github.com/CresenshiaHB/mental-health-streamlit/blob/main/Docummentation.pdf

---

## 📊 Dataset Overview

* **Source:** [Student Lifestyle Dataset (Kaggle)](https://www.kaggle.com/datasets/steve1215rogg/student-lifestyle-dataset)
* **Target Variable:** Stress_Level (Categorical: 0 [Low], 1 [Moderate], 2 [High])
* **Key Features Used:**

| Feature | Description |
| :--- | :--- |
| `Study_Hours_Per_Day` | Time spent on studying (hours) |
| `Sleep_Hours_Per_Day` | Time spent on sleeping (hours) |
| `Social_Hours_Per_Day` | Time spent on socializing (hours) |
| `Physical_Activity_Hours_Per_Day` | Time spent on physical activities (hours) |
| `Extracurricular_Hours_Per_Day` | Time spent on extracurricular activities (hours) |
| `GPA ` | Grade Point Average representing students' academic grade |

---

## Methodology & Feature Engineering

The process to arrive at the final model is documented in the `MentalHealth.ipynb` notebook.

### 1. Exploratory Data Analysis (EDA)

An initial analysis was conducted to understand data distribution, identify correlations between features, and visualize the relationship between independent variables and `Stress_Level`.

### 2. Prepocessing

Before training, the data was prepared. The notebook.ipynb shows the exploration, while the mental_health_streamlit.py app shows the final preprocessing logic required for inference:

* Feature Encoding: Categorical features (like `Stress_Level`) are manually encoded into numerical values directly in the application code to match the model's training data.
* Scaling: Numerical features (`Study_Hours_Per_Day`, `Sleep_Hours_Per_Day`) were normalized during training using StandardScaler and saved as scaler.pkl, which is loaded by the app for real-time prediction.

### 3. Model Training & Selection

Several classification models were evaluated. The **Random Forest Classifier** was chosen as it provided the highest accuracy (100% on the test set) and robustness.

The trained Random Forest model was serialized as `rf_model.pkl` for deployment.

---

## Application Architecture (Streamlit)

This interactive web application (`mental_health_streamlit.py`) is a multi-page dashboard built using **Streamlit**. Navigation is controlled by a sidebar radio button.

* `rf_model.pkl`: The trained Random Forest model file.
* `scaler.pkl`: The fitted StandardScaler file for transforming user input.

**1. Page: Stress Prediction**

The main interface where a user can input their data via sliders and select boxes. When the "Predict" button is pressed, the app:
* Manually encodes the categorical inputs.
* Scales the numerical inputs using the loaded `scaler.pkl`.
* Feeds the final processed vector into the `rf_model.pkl` to generate a real-time prediction.

```python
# Core logic in mental_health_streamlit.py for prediction
if navigation == "Prediction":
    # ... (User input sliders & selects) ...
    
    # Manual encoding for features
    Gender = 0 if Gender == 'Female' else 1
    Extracurricular = 1 if Extracurricular == 'Yes' else 0
    
    if st.button('Predict Stress Level'):
        # 1. Load model and scaler
        model = joblib.load('rf_model.pkl')
        scaler = joblib.load('scaler.pkl')
        
        # 2. Collect and scale input
        input_data = [Age, Gender, Study_Hours, Sleep_Hours, 
                      Social_Media_Hours, Physical_Activity_Hours, 
                      Extracurricular] 
        input_array = np.asarray(input_data).reshape(1, -1)
        scaled_data = scaler.transform(input_array)
        
        # 3. Make prediction and display result
        prediction = model.predict(scaled_data)
```

**2. Page: Data Insight**

This page provides a deep dive into the original dataset (`Mental Health.csv`) using interactive charts:
* Stress Level Distribution: A Plotly Pie Chart showing the percentage of students in each stress category.
* Feature Analysis: Plotly Histograms and Box Plots to visualize the relationship between each feature.
* Correlation Analysis: A Seaborn Heatmap displaying the correlation matrix between all numerical features.

**3. Page: Reccomendations**

A static page providing actionable advice tailored to each predicted stress level (Low, Medium, High) and listing general mental health resources.

---

## Tech Stack
* **Python**
* **Pandas**: For data manipulation and loading.
* **Scikit-learn**: For model training (Random Forest) and preprocessing (StandardScaler).
* **Streamlit**: For building and serving the multi-page interactive web app.
* **Joblib**: For serializing (saving) and deserializing (loading) the Scikit-learn model and scaler.
* **Plotly & Seabor**n: For creating rich, interactive data visualizations in the EDA dashboard.
* **Jupyter Notebook**: For experimentation, analysis, and model training.

---

## How to Run Locally
1. Clone the repository:
   ```python
   git clone [https://github.com/CresenshiaHB/mental-health-streamlit.git](https://github.com/CresenshiaHB/mental-health-streamlit.git)
   cd mental-health-streamlit
   ```
2. Create a virtual environment (recommended):
   ```python
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install the dependencies:
   ```python
   pip install -r requirements.txt
   ```
4. Run the Streamlit app:
   ```python
   streamlit run mental_health_streamlit.py
   ```
5. Pada browser buka link berikut http://localhost:8501.
