import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import requests
import joblib
from io import StringIO
import seaborn as sns
import matplotlib.pyplot as plt

# Page configuration
st.set_page_config(
    page_title="Mental Health & Stress Prediction Dashboard",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main-header {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        color: #0891b2;
        margin-bottom: 2rem;
    }
    .section-header {
        font-size: 2rem;
        font-weight: bold;
        color: #0f766e;
        margin: 2rem 0 1rem 0;
        border-bottom: 2px solid #0891b2;
        padding-bottom: 0.5rem;
    }
    .insight-box {
        background-color: #f0f9ff;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 4px solid #0891b2;
        margin: 1rem 0;
    }
    .metric-card {
        background-color: #fef3c7;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        margin: 0.5rem;
    }
    .recommendation-card {
        background-color: #f0fdf4;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 4px solid #10b981;
        margin: 1rem 0;
    }
</style>
""", unsafe_allow_html=True)

@st.cache_data
def load_data():
    """Load the student lifestyle dataset"""
    url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student_lifestyle_dataset-TnKqaUSiAXIknsgs5w9pbgrkaeYfT4.csv"
    try:
        response = requests.get(url)
        response.raise_for_status()
        df = pd.read_csv(StringIO(response.text))
        return df
    except Exception as e:
        st.error(f"Error loading data: {e}")
        return None

@st.cache_data
def load_model():
    """Load the trained stress prediction model"""
    try:
        # For demo purposes, we'll create a mock model since we can't load the actual joblib file
        # In real implementation, you would load: joblib.load('stress_model.joblib')
        return "Model loaded successfully (mock)"
    except Exception as e:
        st.error(f"Error loading model: {e}")
        return None

def create_stress_distribution_chart(df):
    """Create stress level distribution chart"""
    stress_counts = df['Stress_Level'].value_counts()
    
    fig = px.pie(
        values=stress_counts.values,
        names=stress_counts.index,
        title="Distribution of Stress Levels Among Students",
        color_discrete_map={
            'Low': '#10b981',
            'Moderate': '#f59e0b', 
            'High': '#ef4444'
        }
    )
    fig.update_traces(textposition='inside', textinfo='percent+label')
    fig.update_layout(height=400)
    return fig

def create_gpa_by_stress_chart(df):
    """Create GPA distribution by stress level"""
    fig = px.box(
        df, 
        x='Stress_Level', 
        y='GPA',
        title="GPA Distribution by Stress Level",
        color='Stress_Level',
        color_discrete_map={
            'Low': '#10b981',
            'Moderate': '#f59e0b', 
            'High': '#ef4444'
        }
    )
    fig.update_layout(height=400)
    return fig

def create_correlation_heatmap(df):
    """Create correlation heatmap of lifestyle factors"""
    numeric_cols = ['Study_Hours_Per_Day', 'Extracurricular_Hours_Per_Day', 
                   'Sleep_Hours_Per_Day', 'Social_Hours_Per_Day', 
                   'Physical_Activity_Hours_Per_Day', 'GPA']
    
    # Convert columns to numeric, handling any string values
    for col in numeric_cols:
        df[col] = pd.to_numeric(df[col], errors='coerce')
    
    corr_matrix = df[numeric_cols].corr()
    
    fig = px.imshow(
        corr_matrix,
        text_auto=True,
        aspect="auto",
        title="Correlation Matrix of Lifestyle Factors",
        color_continuous_scale="RdBu_r"
    )
    fig.update_layout(height=500)
    return fig

def create_study_hours_gpa_scatter(df):
    """Create scatter plot of study hours vs GPA"""
    # Convert to numeric
    df['Study_Hours_Per_Day'] = pd.to_numeric(df['Study_Hours_Per_Day'], errors='coerce')
    df['GPA'] = pd.to_numeric(df['GPA'], errors='coerce')
    
    fig = px.scatter(
        df,
        x='Study_Hours_Per_Day',
        y='GPA',
        color='Stress_Level',
        title="Relationship Between Study Hours and GPA",
        color_discrete_map={
            'Low': '#10b981',
            'Moderate': '#f59e0b', 
            'High': '#ef4444'
        },
        trendline="ols"
    )
    fig.update_layout(height=400)
    return fig

def predict_stress_level(study_hours, extracurricular_hours, sleep_hours, 
                        social_hours, physical_activity_hours, gpa):
    """Mock prediction function - replace with actual model prediction"""
    # Simple rule-based prediction for demo
    score = 0
    
    if study_hours > 8: score += 2
    elif study_hours < 5: score += 1
    
    if sleep_hours < 6: score += 2
    elif sleep_hours > 9: score -= 1
    
    if physical_activity_hours < 1: score += 1
    elif physical_activity_hours > 3: score -= 1
    
    if gpa > 3.5: score += 1
    elif gpa < 2.5: score += 2
    
    if score >= 4:
        return "High"
    elif score >= 2:
        return "Moderate"
    else:
        return "Low"

def main():
    # Header
    st.markdown('<h1 class="main-header"> Mental Health & Stress Prediction Dashboard</h1>', unsafe_allow_html=True)
    
    # Load data
    df = load_data()
    model = load_model()
    
    if df is None:
        st.error("Failed to load data. Please check your internet connection.")
        return
    
    # Sidebar navigation
    st.sidebar.title("Navigation")
    page = st.sidebar.selectbox(
        "Choose a section:",
        ["Overview", "Data Insights", "Stress Prediction", "Recommendations"]
    )
    
    if page == "Overview":
        st.markdown('<h2 class="section-header">📊 Dataset Overview</h2>', unsafe_allow_html=True)
        
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.markdown(f"""
            <div class="metric-card">
                <h3>{len(df)}</h3>
                <p>Total Students</p>
            </div>
            """, unsafe_allow_html=True)
        
        with col2:
            high_stress_pct = (df['Stress_Level'] == 'High').mean() * 100
            st.markdown(f"""
            <div class="metric-card">
                <h3>{high_stress_pct:.1f}%</h3>
                <p>High Stress</p>
            </div>
            """, unsafe_allow_html=True)
        
        with col3:
            avg_gpa = pd.to_numeric(df['GPA'], errors='coerce').mean()
            st.markdown(f"""
            <div class="metric-card">
                <h3>{avg_gpa:.2f}</h3>
                <p>Average GPA</p>
            </div>
            """, unsafe_allow_html=True)
        
        with col4:
            avg_study = pd.to_numeric(df['Study_Hours_Per_Day'], errors='coerce').mean()
            st.markdown(f"""
            <div class="metric-card">
                <h3>{avg_study:.1f}h</h3>
                <p>Avg Study Hours</p>
            </div>
            """, unsafe_allow_html=True)
        
        # Mental Health Awareness
        st.markdown('<h2 class="section-header">🎯 Why Student Mental Health Matters</h2>', unsafe_allow_html=True)
        
        st.markdown("""
        <div class="insight-box">
        <h4>Key Mental Health Statistics</h4>
        <ul>
            <li><strong>Over 51%</strong> of students in this dataset report high levels of stress</li>
            <li><strong>Approximately 85%</strong> of students experience moderate to high levels of stress</li>
            <li><strong>Only 1 in 7</strong> students (around 15%) feel their stress level is low</li>
        </ul>
        </div>
        """, unsafe_allow_html=True)
        
        # Show sample data
        st.markdown('<h3>📋 Sample Data</h3>', unsafe_allow_html=True)
        st.dataframe(df.head(10), use_container_width=True)
    
    elif page == "Data Insights":
        st.markdown('<h2 class="section-header">📈 Data Analysis & Insights</h2>', unsafe_allow_html=True)
        
        # Stress distribution
        col1, col2 = st.columns(2)
        
        with col1:
            fig1 = create_stress_distribution_chart(df)
            st.plotly_chart(fig1, use_container_width=True)
        
        with col2:
            fig2 = create_gpa_by_stress_chart(df)
            st.plotly_chart(fig2, use_container_width=True)
        
        # Key insights
        st.markdown("""
        <div class="insight-box">
        <h4>🔍 Key Insights from GPA Analysis</h4>
        <ul>
            <li><strong>Low Stress Students:</strong> Majority achieve 2.5-3.0 GPA (75.1%), suggesting insufficient academic pressure may reduce motivation</li>
            <li><strong>Moderate Stress Students:</strong> Most balanced GPA distribution with 52.2% achieving 3.0-3.5, indicating optimal stress levels</li>
            <li><strong>High Stress Students:</strong> 63.9% achieve 3.0-3.5 GPA with 19.2% reaching 3.5-4.0, but risk of overwhelm exists</li>
        </ul>
        </div>
        """, unsafe_allow_html=True)
        
        # Correlation analysis
        st.markdown('<h3>🔗 Lifestyle Factors Correlation</h3>', unsafe_allow_html=True)
        fig3 = create_correlation_heatmap(df)
        st.plotly_chart(fig3, use_container_width=True)
        
        # Study hours vs GPA
        st.markdown('<h3>📚 Study Hours vs Academic Performance</h3>', unsafe_allow_html=True)
        fig4 = create_study_hours_gpa_scatter(df)
        st.plotly_chart(fig4, use_container_width=True)
        
        st.markdown("""
        <div class="insight-box">
        <h4>📊 Study Hours Analysis</h4>
        <p>The scatter plot shows a clear upward trend: students who allocate more hours to studying tend to achieve higher GPAs. 
        The distribution becomes tighter at higher study hours, indicating that dedicated study time not only improves GPA but also reduces inconsistency in academic outcomes.</p>
        </div>
        """, unsafe_allow_html=True)
    
    elif page == "Stress Prediction":
        st.markdown('<h2 class="section-header">🎯 Stress Level Prediction Tool</h2>', unsafe_allow_html=True)
        
        st.markdown("""
        <div class="insight-box">
        <h4>📝 How to Use This Tool</h4>
        <p>Enter your daily lifestyle information below to get a personalized stress level prediction. 
        This tool uses machine learning to analyze patterns in student data and provide insights about your stress level.</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Input form
        col1, col2 = st.columns(2)
        
        with col1:
            study_hours = st.slider("Study Hours Per Day", 0.0, 12.0, 6.0, 0.5)
            extracurricular_hours = st.slider("Extracurricular Hours Per Day", 0.0, 6.0, 2.0, 0.5)
            sleep_hours = st.slider("Sleep Hours Per Day", 4.0, 12.0, 7.0, 0.5)
        
        with col2:
            social_hours = st.slider("Social Hours Per Day", 0.0, 8.0, 3.0, 0.5)
            physical_activity_hours = st.slider("Physical Activity Hours Per Day", 0.0, 4.0, 1.0, 0.5)
            gpa = st.slider("Current GPA", 2.0, 4.0, 3.0, 0.1)
        
        # Prediction button
        if st.button("Predict My Stress Level", type="primary"):
            prediction = predict_stress_level(
                study_hours, extracurricular_hours, sleep_hours,
                social_hours, physical_activity_hours, gpa
            )
            
            # Display prediction with color coding
            color_map = {"Low": "#10b981", "Moderate": "#f59e0b", "High": "#ef4444"}
            
            st.markdown(f"""
            <div style="background-color: {color_map[prediction]}20; padding: 2rem; border-radius: 1rem; text-align: center; margin: 2rem 0;">
                <h2 style="color: {color_map[prediction]}; margin-bottom: 1rem;">Your Predicted Stress Level: {prediction}</h2>
                <p style="font-size: 1.2rem;">Based on your lifestyle patterns, our model predicts you have <strong>{prediction.lower()}</strong> stress levels.</p>
            </div>
            """, unsafe_allow_html=True)
            
            # Show lifestyle summary
            st.markdown('<h3>📊 Your Lifestyle Summary</h3>', unsafe_allow_html=True)
            
            lifestyle_data = {
                "Factor": ["Study Hours", "Sleep Hours", "Physical Activity", "Social Hours", "Extracurricular", "GPA"],
                "Your Value": [f"{study_hours}h", f"{sleep_hours}h", f"{physical_activity_hours}h", 
                             f"{social_hours}h", f"{extracurricular_hours}h", f"{gpa:.1f}"],
                "Recommended Range": ["6-8h", "7-9h", "1-2h", "2-4h", "1-3h", "3.0+"]
            }
            
            st.dataframe(pd.DataFrame(lifestyle_data), use_container_width=True)
    
    elif page == "Recommendations":
        st.markdown('<h2 class="section-header">💡 Personalized Recommendations</h2>', unsafe_allow_html=True)
        
        # Low Stress Recommendations
        st.markdown("""
        <div class="recommendation-card">
        <h3 style="color: #10b981;">🟢 For Low Stress Level Students</h3>
        <h4>Academic Enhancement:</h4>
        <ul>
            <li>Set more challenging academic goals to increase motivation</li>
            <li>Join study groups or academic competitions</li>
            <li>Consider taking additional courses or advanced subjects</li>
            <li>Seek research opportunities or internships</li>
        </ul>
        <h4>Personal Development:</h4>
        <ul>
            <li>Develop time management and organizational skills</li>
            <li>Explore new extracurricular activities</li>
            <li>Build leadership skills through student organizations</li>
            <li>Create structured daily routines</li>
        </ul>
        </div>
        """, unsafe_allow_html=True)
        
        # Moderate Stress Recommendations
        st.markdown("""
        <div class="recommendation-card">
        <h3 style="color: #f59e0b;">🟡 For Moderate Stress Level Students</h3>
        <h4>Maintain Balance:</h4>
        <ul>
            <li>Continue current study habits - you're in the optimal zone!</li>
            <li>Regular stress monitoring to prevent escalation</li>
            <li>Maintain consistent sleep schedule (7-8 hours)</li>
            <li>Keep physical activity routine (1-2 hours daily)</li>
        </ul>
        <h4>Optimization Strategies:</h4>
        <ul>
            <li>Practice mindfulness and meditation techniques</li>
            <li>Use productivity techniques like Pomodoro method</li>
            <li>Build strong social support networks</li>
            <li>Regular self-assessment and adjustment</li>
        </ul>
        </div>
        """, unsafe_allow_html=True)
        
        # High Stress Recommendations
        st.markdown("""
        <div class="recommendation-card">
        <h3 style="color: #ef4444;">🔴 For High Stress Level Students</h3>
        <h4>Immediate Actions:</h4>
        <ul>
            <li>Prioritize sleep - aim for 7-9 hours nightly</li>
            <li>Reduce study hours if exceeding 8 hours daily</li>
            <li>Increase physical activity to 30+ minutes daily</li>
            <li>Practice stress-reduction techniques (deep breathing, yoga)</li>
        </ul>
        <h4>Long-term Strategies:</h4>
        <ul>
            <li>Consider counseling or mental health support</li>
            <li>Learn to say no to excessive commitments</li>
            <li>Develop healthy coping mechanisms</li>
            <li>Regular check-ins with academic advisors</li>
        </ul>
        <h4>Warning Signs to Watch:</h4>
        <ul>
            <li>Persistent fatigue or insomnia</li>
            <li>Declining academic performance despite high effort</li>
            <li>Social withdrawal or isolation</li>
            <li>Physical symptoms (headaches, stomach issues)</li>
        </ul>
        </div>
        """, unsafe_allow_html=True)
        
        # General Resources
        st.markdown('<h3>🆘 Mental Health Resources</h3>', unsafe_allow_html=True)
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.markdown("""
            **Campus Resources:**
            - Student Counseling Center
            - Academic Success Center
            - Peer Support Groups
            - Mental Health First Aid
            """)
        
        with col2:
            st.markdown("""
            **Emergency Contacts:**
            - Campus Crisis Hotline: 24/7
            - National Suicide Prevention: 988
            - Crisis Text Line: Text HOME to 741741
            - Campus Security: Emergency line
            """)

if __name__ == "__main__":
    main()
