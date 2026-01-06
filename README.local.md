# Madesh M - Personal Portfolio

A modern, responsive personal portfolio website showcasing my work as an AI & ML Engineer and Data Scientist. Built with React, Tailwind CSS, and Flask backend.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Mobile-first design that works on all devices
- **Animated**: Smooth animations using Framer Motion
- **Interactive**: Dynamic skill visualizations and project showcases
- **Contact Form**: Functional contact form with backend integration
- **Future-Ready**: Prepared for AI chatbot integration

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Chart.js** - Data visualization
- **Lucide React** - Beautiful icons

### Backend
- **Flask** - Python web framework
- **SQLite** - Lightweight database
- **Flask-CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── contexts/           # React contexts
│   │   │   └── ThemeContext.js
│   │   ├── assests/           # Static assets
│   │   └── App.js
│   ├── public/
│   └── package.json
├── backend/
│   ├── app.py                 # Flask application
│   ├── requirements.txt       # Python dependencies
│   └── portfolio.db          # SQLite database (created on first run)
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   python app.py
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## 📱 Pages & Features

### Home Page
- Animated introduction with profile image
- Social media links
- Call-to-action buttons
- Smooth scroll indicators

### About Page
- Personal bio and story
- Education details
- Key achievements
- Areas of interest

### Skills Page
- Interactive skill visualizations
- Categorized skills (Programming, AI/ML, Visualization, Tools)
- Chart.js integration for data visualization
- Continuous learning section

### Projects Page
- Project showcase with filtering
- Featured projects section
- Technology tags
- GitHub and demo links

### Contact Page
- Contact form with validation
- Contact information
- Social media links
- Form submission to backend

## 🔧 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?category=<category>` - Filter projects by category
- `GET /api/projects/<id>` - Get specific project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/<category>` - Get skills by category

### Contact
- `POST /api/contact` - Submit contact form

### Chatbot (Future)
- `POST /api/chatbot` - AI chatbot endpoint (placeholder)

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `frontend/src/components/Home.jsx` - Personal details and social links
- `frontend/src/components/About.jsx` - Bio, education, and achievements
- `backend/app.py` - Projects and skills data

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Update `frontend/src/index.css` for global styles
- Customize component styles in individual component files

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting platform

### Backend (Render/Railway)
1. Push your code to GitHub
2. Connect your repository to your hosting platform
3. Set environment variables if needed
4. Deploy

## 🤖 Future Enhancements

### Phase 2: AI Chatbot Integration
- OpenAI API integration
- Natural language processing
- Contextual responses about portfolio
- Real-time chat interface

### Additional Features
- Blog section
- Resume download functionality
- Project case studies
- Testimonials section
- Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Madesh M**
- Email: madesh6554@gmail.com
- Location: Salem, Tamil Nadu, India
- LinkedIn: [LinkedIn](https://linkedin.com/in/madesh-m-15037b273)
- GitHub: [GitHub](https://github.com/madesh6554)

---

Built with ❤️ by Madesh M
