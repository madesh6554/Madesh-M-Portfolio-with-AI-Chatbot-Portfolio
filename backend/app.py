from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow all origins so Vercel and any subdomain can reach the API

# Database setup
DATABASE = 'portfolio.db'

def init_db():
    """Initialize the database with required tables"""
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    
    # Create contact messages table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

# Sample data
PROJECTS = [
    {
        "id": 1,
        "title": "AI-Powered Image Classification System",
        "description": "A deep learning model that classifies images into 1000 categories using CNN architecture. Built with TensorFlow and deployed using Flask.",
        "image": "/api/placeholder/400/300",
        "technologies": ["Python", "TensorFlow", "OpenCV", "Flask", "HTML/CSS"],
        "category": "ai_ml",
        "github": "https://github.com/madesh/image-classifier",
        "demo": "https://image-classifier-demo.herokuapp.com",
        "featured": True
    },
    {
        "id": 2,
        "title": "Real-time Stock Price Predictor",
        "description": "Machine learning model that predicts stock prices using LSTM neural networks. Includes data visualization dashboard with real-time updates.",
        "image": "/api/placeholder/400/300",
        "technologies": ["Python", "PyTorch", "Pandas", "Streamlit", "Yahoo Finance API"],
        "category": "ai_ml",
        "github": "https://github.com/madesh/stock-predictor",
        "demo": "https://stock-predictor-demo.herokuapp.com",
        "featured": True
    },
    {
        "id": 3,
        "title": "Customer Sentiment Analysis Dashboard",
        "description": "NLP application that analyzes customer reviews and feedback. Features sentiment classification, topic modeling, and interactive visualizations.",
        "image": "/api/placeholder/400/300",
        "technologies": ["Python", "NLTK", "Scikit-learn", "Tableau", "FastAPI"],
        "category": "ai_ml",
        "github": "https://github.com/madesh/sentiment-analysis",
        "demo": "https://sentiment-dashboard.herokuapp.com",
        "featured": False
    },
    {
        "id": 4,
        "title": "Data Visualization Portfolio",
        "description": "Interactive dashboard showcasing various data visualization techniques using Tableau. Includes sales analytics, demographic insights, and trend analysis.",
        "image": "/api/placeholder/400/300",
        "technologies": ["Tableau", "SQL", "Excel", "Python", "Pandas"],
        "category": "visualization",
        "github": "https://github.com/madesh/data-viz-portfolio",
        "demo": "https://tableau-public.com/madesh",
        "featured": False
    },
    {
        "id": 5,
        "title": "Personal Portfolio Website",
        "description": "Modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.",
        "image": "/api/placeholder/400/300",
        "technologies": ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Node.js"],
        "category": "web",
        "github": "https://github.com/madesh/portfolio",
        "demo": "https://madesh-portfolio.vercel.app",
        "featured": True
    },
    {
        "id": 6,
        "title": "Computer Vision Object Detection",
        "description": "Real-time object detection system using YOLO algorithm. Detects and tracks multiple objects in video streams with high accuracy.",
        "image": "/api/placeholder/400/300",
        "technologies": ["Python", "OpenCV", "YOLO", "TensorFlow", "Flask"],
        "category": "ai_ml",
        "github": "https://github.com/madesh/object-detection",
        "demo": "https://object-detection-demo.herokuapp.com",
        "featured": False
    },
    {
        "id": 7,
        "title": "Glove Shield AI: Safety Compliance System",
        "description": "An end-to-end computer vision pipeline using YOLOv8 to detect gloved vs. bare hands in industrial environments. Features a real-time Streamlit dashboard for monitoring safety compliance with 92% precision.",
        "image": "https://img.freepik.com/free-photo/worker-wearing-gloves-hand-protection-safety-concept_53876-133748.jpg",
        "technologies": ["Python", "YOLOv8", "Streamlit", "OpenCV", "Roboflow"],
        "category": "ai_ml",
        "github": "https://github.com/madesh6554/Gloved-vs-Ungloved-Hand-Detection",
        "demo": "https://gloved-vs-ungloved-hand-detection-m58nfzmdrlkzjxzktms8fm.streamlit.app/",
        "featured": True
    }
]

SKILLS = {
    "programming": {
        "title": "Programming Languages",
        "skills": [
            {"name": "Python", "level": 95, "color": "#3776ab"},
            {"name": "SQL", "level": 90, "color": "#336791"},
            {"name": "JavaScript", "level": 80, "color": "#f7df1e"},
            {"name": "R", "level": 75, "color": "#276dc3"},
        ]
    },
    "ai_ml": {
        "title": "AI & Machine Learning",
        "skills": [
            {"name": "TensorFlow", "level": 90, "color": "#ff6f00"},
            {"name": "PyTorch", "level": 85, "color": "#ee4c2c"},
            {"name": "Scikit-Learn", "level": 90, "color": "#f7931e"},
            {"name": "OpenCV", "level": 80, "color": "#5c3ee8"},
            {"name": "Pandas", "level": 95, "color": "#150458"},
            {"name": "NumPy", "level": 90, "color": "#4d77cf"},
        ]
    },
    "visualization": {
        "title": "Data Visualization",
        "skills": [
            {"name": "Tableau", "level": 85, "color": "#e97627"},
            {"name": "Matplotlib", "level": 90, "color": "#11557c"},
            {"name": "Seaborn", "level": 85, "color": "#3776ab"},
            {"name": "Plotly", "level": 80, "color": "#3f4f75"},
        ]
    },
    "tools": {
        "title": "Tools & Frameworks",
        "skills": [
            {"name": "Excel", "level": 95, "color": "#217346"},
            {"name": "Tableau", "level": 85, "color": "#e97627"},
            {"name": "Power BI", "level": 80, "color": "#f2c811"},
            {"name": "Git", "level": 85, "color": "#f05032"},
            {"name": "Jupyter", "level": 90, "color": "#f37626"},
            {"name": "Google Colab", "level": 85, "color": "#f9ab00"},
        ]
    }
}

@app.route('/')
def home():
    return jsonify({"message": "Welcome to Madesh's AI Portfolio Backend!"})

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get all projects or filter by category"""
    category = request.args.get('category', 'all')
    
    if category == 'all':
        return jsonify({"projects": PROJECTS})
    else:
        filtered_projects = [p for p in PROJECTS if p['category'] == category]
        return jsonify({"projects": filtered_projects})

@app.route('/api/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """Get a specific project by ID"""
    project = next((p for p in PROJECTS if p['id'] == project_id), None)
    if project:
        return jsonify({"project": project})
    return jsonify({"error": "Project not found"}), 404

@app.route('/api/skills', methods=['GET'])
def get_skills():
    """Get all skills organized by category"""
    return jsonify({"skills": SKILLS})

@app.route('/api/skills/<category>', methods=['GET'])
def get_skills_by_category(category):
    """Get skills for a specific category"""
    if category in SKILLS:
        return jsonify({"skills": {category: SKILLS[category]}})
    return jsonify({"error": "Category not found"}), 404

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Store in database
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO contact_messages (name, email, subject, message)
            VALUES (?, ?, ?, ?)
        ''', (data['name'], data['email'], data['subject'], data['message']))
        
        conn.commit()
        conn.close()
        
        # Send email notification
        try:
            send_email_notification(data)
        except Exception as email_error:
            # Log email error but don't fail the request
            print(f"Email sending failed: {str(email_error)}")
        
        return jsonify({
            "message": "Thank you for your message! I'll get back to you soon.",
            "status": "success"
        })
        
    except Exception as e:
        return jsonify({"error": "Failed to process contact form"}), 500

from routes.chatbot import chatbot_bp

# Register Blueprints
app.register_blueprint(chatbot_bp, url_prefix='/api')


@app.route('/healthz')
def healthz():
    """Health check for Render (and other platforms)."""
    return jsonify({"status": "ok"}), 200


def send_email_notification(data):
    """Send email notification for new contact form submission"""
    # Email configuration from environment variables
    smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
    smtp_port = int(os.getenv('SMTP_PORT', '587'))
    sender_email = os.getenv('SENDER_EMAIL', 'madesh6554@gmail.com')
    sender_password = os.getenv('SENDER_PASSWORD', '')
    recipient_email = os.getenv('RECIPIENT_EMAIL', 'madesh6554@gmail.com')
    
    # If no password is set, skip email sending completely but log the message to the backend console
    if not sender_password:
        print("⚠️ Email password (SENDER_PASSWORD) not configured. Skipping email notification.")
        print(f"[CONTACT LOG] New message from {data['name']} <{data['email']}>")
        print(f"[CONTACT LOG] Subject: {data['subject']}")
        print(f"[CONTACT LOG] Message: {data['message']}")
        return

    print(f"[EMAIL] Attempting to send notifications for message from {data['name']} ({data['email']})")
    
    # Create message for you (the portfolio owner)
    msg_to_owner = MIMEMultipart()
    msg_to_owner['From'] = sender_email
    msg_to_owner['To'] = recipient_email
    msg_to_owner['Subject'] = f"New Contact Form Message: {data['subject']}"
    
    body_to_owner = f"""
    You have received a new message from your portfolio website:
    
    Name: {data['name']}
    Email: {data['email']}
    Subject: {data['subject']}
    
    Message:
    {data['message']}
    
    ---
    This message was sent from your portfolio contact form.
    """
    
    msg_to_owner.attach(MIMEText(body_to_owner, 'plain'))
    
    # Create confirmation message for the sender
    msg_to_sender = MIMEMultipart()
    msg_to_sender['From'] = sender_email
    msg_to_sender['To'] = data['email']
    msg_to_sender['Subject'] = f"Thank you for contacting Madesh M - {data['subject']}"
    
    body_to_sender = f"""
    Dear {data['name']},
    
    Thank you for reaching out through my portfolio website!
    
    I have received your message regarding "{data['subject']}" and will get back to you as soon as possible.
    
    Your message:
    {data['message']}
    
    Best regards,
    Madesh M
    AI & ML Engineer | Data Scientist
    
    ---
    This is an automated confirmation email. Please do not reply to this email.
    If you need to contact me directly, please use: madesh6554@gmail.com
    """
    
    msg_to_sender.attach(MIMEText(body_to_sender, 'plain'))
    
    # Send both emails
    try:
        # Connect to SMTP server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        
        # Send email to owner
        text_to_owner = msg_to_owner.as_string()
        server.sendmail(sender_email, recipient_email, text_to_owner)
        
        # Send confirmation email to sender
        text_to_sender = msg_to_sender.as_string()
        server.sendmail(sender_email, data['email'], text_to_sender)
        
        server.quit()
        print(f"✅ Email notifications sent successfully for message from {data['name']} ({data['email']})")
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)
