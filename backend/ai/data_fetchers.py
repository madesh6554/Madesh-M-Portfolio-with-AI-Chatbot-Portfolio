import sqlite3
import requests
import json
import os
from typing import Dict, Any

def get_github_projects(username: str = "madesh6554") -> str:
    """Fetch public repositories from GitHub for a given username."""
    try:
        # Fetch repos sorted by updated time
        url = f"https://api.github.com/users/{username}/repos?sort=updated&per_page=10"
        response = requests.get(url, headers={"Accept": "application/vnd.github.v3+json"}, timeout=10)
        
        if response.status_code != 200:
            return json.dumps({"error": f"Failed to fetch GitHub projects. Status code: {response.status_code}"})
            
        repos = response.json()
        
        if not repos:
            return json.dumps({"message": f"No public repositories found for user {username}"})
            
        result = []
        for repo in repos:
            # We don't want to overwhelm the context window, extract key info only
            result.append({
                "name": repo.get("name"),
                "description": repo.get("description", "No description provided."),
                "url": repo.get("html_url"),
                "language": repo.get("language", "Unknown"),
                "stars": repo.get("stargazers_count", 0),
                "is_fork": repo.get("fork", False)
            })
            
        return json.dumps({"github_projects": result})
        
    except Exception as e:
        return json.dumps({"error": str(e)})


def get_database_projects() -> str:
    """Retrieve the curated projects from the portfolio database/app.py list."""
    # Since the projects are stored in memory in app.py, we can just import them
    # But to avoid circular imports, we'll fetch them from the local API route
    try:
        # Using the local Flask server route
        url = "http://127.0.0.1:5000/api/projects"
        response = requests.get(url, timeout=5)
        
        if response.status_code == 200:
            return json.dumps(response.json())
        else:
            return json.dumps({"error": "Could not fetch portfolio projects from API."})
            
    except Exception as e:
        return json.dumps({"error": f"Failed to connect to local API: {str(e)}"})


def get_linkedin_profile() -> str:
    """Return Madesh's LinkedIn profile URL and a summary of his professional presence."""
    return json.dumps({
        "linkedin_url": "https://www.linkedin.com/in/madesh-m-15037b273",
        "name": "Madesh M",
        "headline": "AI & ML Engineer | Data Scientist",
        "summary": "Madesh is an AI & Data Science professional with experience in building RAG systems, computer vision models, and automated AI workflows. He is currently an AI & Data Science Trainer for the TNSDC Vetri Nichayam Initiative."
    })


def submit_contact_message(name: str, email: str, subject: str, message: str) -> str:
    """Allow the AI to submit a contact message on behalf of the user/recruiter."""
    try:
        url = "http://127.0.0.1:5000/api/contact"
        payload = {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message
        }
        
        response = requests.post(url, json=payload, timeout=5)
        
        if response.status_code == 200:
            return json.dumps({
                "success": True, 
                "message": "Contact message has been successfully saved to the database and Madesh has been notified. Let the user know you've sent it!"
            })
        else:
            return json.dumps({
                "success": False, 
                "error": response.text
            })
    except Exception as e:
        return json.dumps({"error": str(e)})


# Tools Definition for OpenAI Functions API
MCP_TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_github_projects",
            "description": "Fetch Madesh's public repositories from GitHub. Use this when the user explicitly asks about GitHub repositories.",
            "parameters": {
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string",
                        "description": "The GitHub username to fetch repos for. Defaults to madesh6554."
                    }
                },
                "required": []
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_database_projects",
            "description": "Retrieve Madesh's detailed, curated portfolio projects (the ones featured on his website). Use this when the user asks about his projects, tech stack, or portfolio work in general.",
            "parameters": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_linkedin_profile",
            "description": "Get Madesh's LinkedIn profile URL and professional headline. Use this when the user asks for his LinkedIn, professional social media, or how to connect on LinkedIn.",
            "parameters": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "submit_contact_message",
            "description": "Submit a contact form message to Madesh on behalf of the user/recruiter. Require name, email, subject, and message before calling this tool.",
            "parameters": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The user's or recruiter's full name."
                    },
                    "email": {
                        "type": "string",
                        "description": "The email address to reach them at."
                    },
                    "subject": {
                        "type": "string",
                        "description": "A short subject line summarizing the message intent."
                    },
                    "message": {
                        "type": "string",
                        "description": "The detailed message for Madesh."
                    }
                },
                "required": ["name", "email", "subject", "message"]
            }
        }
    }
]

# Map tool names to actual functions for dynamic invocation
AVAILABLE_FUNCTIONS = {
    "get_github_projects": get_github_projects,
    "get_database_projects": get_database_projects,
    "get_linkedin_profile": get_linkedin_profile,
    "submit_contact_message": submit_contact_message
}
