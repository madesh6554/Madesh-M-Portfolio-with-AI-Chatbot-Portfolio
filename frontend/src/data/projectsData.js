import aiModelHubImage from '../assests/ai-artificial-intelligence-machine-learning-technology-concept_143463-8643.avif';
import satelliteImage from '../assests/artificial-satellite-orbiting-earth-concept-future-technology-satellites-human-galactic-conquest-space-debris-nasa-generative-ai_853928-910.jpg';
import recommendationSystemImage from '../assests/AI-in-Recommendation-Engine-(In).png';
import imageCaptionImage from '../assests/OIP.webp';
import entertainmentIndustryImage from '../assests/ai-in-entertainment.webp-scaled.webp';
import rainfallAnalysisImage from '../assests/rainy-day-with-umbrellas-forest-background_924629-223192.avif';
import carChart1 from '../assests/Images/car price prediction/output.png';
import carChart2 from '../assests/Images/car price prediction/output1.png';
import carChart3 from '../assests/Images/car price prediction/output2.png';
import unempChart1 from '../assests/Images/unemployeement analysis/output.png';
import unempChart2 from '../assests/Images/unemployeement analysis/output1.png';
import unempChart3 from '../assests/Images/unemployeement analysis/newplot.png';
import unempChart4 from '../assests/Images/unemployeement analysis/newplot1.png';
import aiTutorImage from '../assests/chatgpt-chat-with-ai-artificial-intelligence-woman-chatting-with-smart-ai-artificial-intell_926199-2106756.avif';
import aiChatImage from '../assests/_757f1abd-9878-4bf9-a3a4-dbea038785a0.jpg';
import n8nTechNewsImage from '../assests/n8n-tech-news.svg';
import n8nMovieBotImage from '../assests/n8n-movie-bot.svg';
import n8nTechNewsShot1 from '../assests/n8n workflow/AI-Powered Daily Tech News Automation (n8n)/Screenshot 2026-02-25 121312.png';
import n8nTechNewsShot2 from '../assests/n8n workflow/AI-Powered Daily Tech News Automation (n8n)/Screenshot (428).png';
import n8nMovieBotShot1 from '../assests/n8n workflow/Movie Recommendation Automation Bot (n8n + Telegram)/Screenshot (443).png';
import n8nMovieBotVideo from '../assests/n8n workflow/Movie Recommendation Automation Bot (n8n + Telegram)/Screen Recording 2026-02-26 214002 (online-video-cutter.com).mp4';
import gloveShieldImage from '../assests/_6910bc27-4bc6-4d22-9b23-eed6976b14c4.jpg';
import kaggleObesityImage from '../assests/kaggle_obesity_project.png';

export const completedProjects = [
  {
    id: 1,
    title: 'AI ModelHub',
    description: 'An intern-led prototype of a unified AI model-as-a-service platform that bridges the gap between cutting-edge AI technologies and real-world applications.',
    extendedDescription: 'AI ModelHub is an intuitive and powerful platform designed to bridge the gap between cutting-edge artificial intelligence technologies and their real-world applications. The platform empowers a diverse user base—including researchers, developers, students, and businesses—to explore, test, and integrate state-of-the-art AI models without the need for complex infrastructure or advanced technical expertise.\n\nThe primary focus of AI ModelHub is to simplify AI adoption by providing an accessible, scalable, and innovation-driven environment that supports a wide range of AI use cases.',
    image: aiModelHubImage,
    technologies: ['Python', 'Flask', 'Angular', 'Ionic', 'TensorFlow.js', 'MediaPipe', 'Three.js', 'Node.js', 'Express.js', 'Firebase', 'Google Gemini AI', 'OpenCV', 'yt-dlp', 'REST API'],
    github: 'https://github.com/madesh6554/AI-ModelHub',
    demo: 'https://ai-modelhub.onrender.com/',
    pdf: '/pdfs/AI-ModelHub-Project.pdf',
    featured: true,
    features: [
      'Model Exploration: Discover a curated list of cutting-edge AI models across various domains',
      'One-click Testing: Instantly test models with sample or user-provided data',
      'API Integration: Easily integrate models into applications using pre-configured APIs',
      'Community & Collaboration: Interact with other users, share projects, and get support',
      'Multiple Model Categories: Support for Audio AI, NLP, Multimodal AI, Computer Vision, and Generative AI',
      'Gemini Analyzer: Media content analysis for images, videos, and YouTube content using Google Gemini 1.5 Flash',
      'Sign Translate: Real-time sign language translation system with 3D avatar visualization',
      'Scalable Architecture: Built to handle growing user demands and evolving model complexity',
      'User-Friendly Interface: No complex setup required, models are ready to explore instantly'
    ],
    additionalInfo: 'Project Goals:\n• Democratize AI: Provide open and easy access to powerful AI models for everyone\n• Simplify AI Workflows: Streamline the discovery, experimentation, and deployment of AI models\n• Lower Technical Barriers: Minimize infrastructure and skillset requirements to use AI effectively\n• Empower Users: Enable developers, researchers, and businesses to build intelligent solutions using ready-to-use models\n\nFuture Scope:\n• Broader Model Coverage: Incorporating more specialized and niche models\n• Model Customization: Tools for fine-tuning models for specific use cases\n• Collaboration Tools: Features for team-based model development and sharing\n• Research Integration: Frequent updates with the latest AI innovations\n• Community Expansion: Learning resources, forums, and innovation challenges'
  },
  {
    id: 2,
    title: 'AI-Powered Digital Twin for Satellite Health Monitoring',
    description: 'A prototype digital twin system that simulates real-time satellite conditions and predicts potential issues using AI models trained on satellite telemetry data.',
    extendedDescription: 'This project involves developing a prototype of an AI-powered digital twin for satellite health monitoring. The digital twin simulates real-time satellite conditions and predicts potential issues using AI models trained on simulated satellite telemetry data. The system includes real-time monitoring, predictive analytics for anomaly detection, an interactive Streamlit dashboard, automated email alert system, and comprehensive visualization of satellite metrics.\n\nThe system monitors 40+ satellite telemetry parameters including power systems (battery voltage, solar panel efficiency), thermal systems (internal temperature, radiator efficiency), navigation and control (gyroscope, orientation), communications (signal strength, data rate), and payload systems. The AI model uses Isolation Forest algorithm for anomaly detection and can identify power anomalies, thermal anomalies, AOCS faults, and payload failures in real-time.',
    image: satelliteImage,
    technologies: ['Python', 'Streamlit', 'MySQL', 'Isolation Forest', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'SMTP', 'Joblib', 'Machine Learning', 'Digital Twin', 'Anomaly Detection', 'Real-time Monitoring'],
    github: 'https://github.com/madesh6554/Satellite-Health-Monitoring-DT',
    demo: 'https://satellite-health-monitoring-dt-bom4jaf2gnukue8yizjeak.streamlit.app/',
    pdf: '/pdfs/AI-Powered Digital Twin Prototype for Satellite Health Monitoring.pdf',
    featured: true,
    features: [
      'Real-time Satellite Health Monitoring: Continuous monitoring of 40+ telemetry parameters',
      'Predictive Analytics: AI-powered anomaly detection using Isolation Forest algorithm',
      'Interactive Dashboard: Streamlit-based interactive dashboard with real-time updates',
      'Automated Alert System: Email notifications for critical anomalies and failures',
      'Comprehensive Visualization: Real-time charts and metrics visualization using Plotly',
      'MySQL Database Integration: Real-time data storage and retrieval from MySQL database',
      'Multi-Parameter Monitoring: Power systems, thermal systems, navigation, communications, and payload',
      'Anomaly Detection: Identifies power anomalies, thermal anomalies, AOCS faults, and payload failures',
      'Digital Twin Simulation: Simulates satellite conditions and predicts potential issues',
      'Data Generation: Synthetic data generation for training and testing'
    ],
    additionalInfo: 'Project Phases:\n• Phase 1: Data Collection & Digital Twin Setup - Identified 40+ satellite parameters, generated telemetry datasets, set up MySQL database\n• Phase 2: AI Model Development - Trained Isolation Forest model for anomaly detection using historical telemetry data\n• Phase 3: Real-Time Dashboard & Alerts - Created Streamlit dashboard, implemented email alert system, connected to MySQL\n• Phase 4: Deployment & Documentation - Deployed prototype, wrote documentation, conducted testing\n\nKey Parameters Monitored:\n• Power Systems: Battery voltage/current, solar panel efficiency, power consumption\n• Thermal Systems: Internal temperature, battery temp, radiator efficiency\n• Navigation: Position, velocity, gyroscope, orientation\n• Communications: Signal strength, data rate, packet loss, latency\n• Payload: Payload power, sensor data rate, camera temperature, data quality\n\nTechnologies Used:\n• Machine Learning: Isolation Forest for anomaly detection\n• Database: MySQL for data storage and retrieval\n• Web Framework: Streamlit for interactive dashboard\n• Visualization: Plotly for real-time charts and graphs\n• Email: SMTP for automated alert notifications'
  },
  {
    id: 3,
    title: 'Smart Electronics Recommendation System',
    description: 'An intelligent AI-driven recommendation system that provides personalized product suggestions for electronics using Natural Language Processing (NLP) techniques, specifically TF-IDF vectorization and cosine similarity.',
    extendedDescription: 'The Smart Electronics Recommendation System is an intelligent, AI-driven solution designed to enhance the online shopping experience by providing personalized product recommendations. This system leverages Natural Language Processing (NLP) techniques, specifically TF-IDF vectorization and cosine similarity, to analyze product titles, categories, brands, and features.\n\nThe recommendation engine identifies the most relevant products based on user queries, taking into account factors like price range, brand, category, and user ratings. Additionally, the system provides accessory recommendations, ensuring that users receive complementary product suggestions tailored to their needs. The system integrates fuzzy string matching (via the FuzzyWuzzy library) to refine product searches and improve the accuracy of recommendations. This project demonstrates the power of machine learning and NLP in e-commerce, offering a scalable and adaptable solution for businesses looking to optimize customer engagement and improve product discovery.',
    image: recommendationSystemImage,
    technologies: ['Python', 'Streamlit', 'TF-IDF', 'Cosine Similarity', 'FuzzyWuzzy', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Machine Learning', 'Content-Based Filtering', 'Rule-Based Filtering', 'Hybrid Model', 'Web Scraping'],
    github: 'https://github.com/madesh6554/Smart-Electronics-Recommendation-System',
    demo: 'https://smart-electronics-recommendation-system-cg6eyh2obhqeyju7vca6gn.streamlit.app/',
    pdf: '/pdfs/smart electronics RS.pdf',
    featured: true,
    features: [
      'Content-Based Filtering: Uses TF-IDF vectorization and cosine similarity to recommend products based on textual features',
      'Rule-Based Filtering: Implements predefined business rules for price range, rating, brand, and category filters',
      'Hybrid Model: Combines content-based and rule-based filtering for enhanced recommendation accuracy',
      'Fuzzy String Matching: Handles misspellings and variations in product names using FuzzyWuzzy library',
      'Accessory Recommendations: Provides complementary product suggestions based on category and brand',
      'Interactive Dashboard: Streamlit-based user-friendly interface with real-time product recommendations',
      'Multi-Filter Support: Price range, rating, brand, and category filters for personalized results',
      'Product Feature Extraction: Analyzes product titles, categories, brands, and features for similarity matching',
      'Data Preprocessing: Handles missing values, cleans data, and standardizes textual information',
      'Web Scraping Integration: Collects product data from e-commerce platforms for recommendation system'
    ],
    additionalInfo: 'Project Overview:\n• Academic Project: Master of Science in Data Science project submitted to Periyar University, Salem\n• Course Code: 23UPCSC4P02\n• Registration Number: U23PG507DTS018\n\nRecommendation Techniques:\n• Content-Based Filtering: Uses product attributes (title, category, brand, features) with TF-IDF and cosine similarity\n• Rule-Based Filtering: Applies business rules for price, rating, brand, and category constraints\n• Hybrid Approach: Combines both methods for improved accuracy and personalization\n\nKey Features:\n• Handles misspellings and product name variations\n• Provides similar products and accessory recommendations\n• Flexible filtering options (price, rating, category, brand)\n• Focuses on Apple and Samsung electronics products\n• Real-time recommendation generation\n\nTechnologies & Libraries:\n• NLP: TF-IDF vectorization for text feature extraction\n• Similarity: Cosine similarity for product matching\n• Fuzzy Matching: FuzzyWuzzy for handling search variations\n• Data Processing: Pandas, NumPy for data manipulation\n• ML Framework: Scikit-learn for machine learning algorithms\n• Web Framework: Streamlit for interactive dashboard\n• Web Scraping: BeautifulSoup, Requests for data collection'
  },
  {
    id: 4,
    title: 'Image Caption Generator with Deep Learning',
    description: 'An end-to-end deep learning solution for automatic image caption generation that integrates computer vision and natural language processing using VGG16 for feature extraction and an encoder-decoder architecture with LSTM for caption generation.',
    extendedDescription: 'This project implements an end-to-end solution for automatic image caption generation using deep learning techniques, integrating computer vision and natural language processing. The system leverages VGG16-based image feature extraction, text preprocessing, and an encoder-decoder architecture for caption generation.\n\nImage features are extracted using VGG16, and preprocessed captions are paired with these features. An encoder extracts image features, while a decoder generates captions by merging these features with input text sequences. The model is trained using a data generator to prevent session crashes, with categorical cross-entropy loss and the Adam optimizer. Evaluation employs BLEU scores on a test dataset.\n\nAdditionally, a web application is created using Streamlit to provide a user-friendly interface for generating captions. This project demonstrates the integration of deep learning techniques for automated caption generation, with applications in image indexing, retrieval, and accessibility enhancement.',
    image: imageCaptionImage,
    technologies: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'LSTM', 'NLP', 'Computer Vision', 'Streamlit', 'OpenCV', 'NLTK', 'PIL', 'NumPy', 'Pandas', 'Deep Learning', 'Encoder-Decoder Architecture'],
    github: 'https://github.com/madesh6554/Image-Caption-Generater',
    demo: 'https://image-caption-generater-3gxwy5jxjyhd38ihur2emv.streamlit.app/',
    pdf: '/pdfs/Mini project .pdf',
    featured: true,
    features: [
      'VGG16 Feature Extraction: Uses pre-trained VGG16 CNN to extract high-level features from images',
      'Encoder-Decoder Architecture: Combines image features with LSTM-based decoder for caption generation',
      'Flickr 8k Dataset: Trained on 8,000 images with 5 captions each for robust model training',
      'Text Preprocessing: Tokenization, cleaning, and sequence padding for caption processing',
      'Data Generator: Efficient batch processing to handle large datasets without session crashes',
      'BLEU Score Evaluation: Uses BLEU-1, BLEU-2, and METEOR scores for model performance assessment',
      'Streamlit Web Application: User-friendly interface for uploading images and generating captions',
      'Real-time Caption Generation: Generates descriptive captions for new images instantly',
      'Image Preprocessing: Resizes and preprocesses images to match VGG16 input requirements',
      'Sequence Generation: Generates coherent captions using LSTM networks with start and end sequence tags'
    ],
    additionalInfo: 'Project Overview:\n• Academic Project: Professional Competency Skill - Mini Project for Master of Science in Data Science\n• Course Code: 23UPCSC4P01\n• Registration Number: U23PG507DTS018\n• University: Periyar University, Salem\n\nModel Architecture:\n• Encoder: VGG16 CNN extracts 4096-dimensional feature vectors from images\n• Decoder: LSTM network with embedding layer generates captions from image features\n• Training: 150 epochs with batch size of 64, using categorical cross-entropy loss and Adam optimizer\n\nDataset:\n• Flickr 8k Dataset: 8,000 images with 5 captions each\n• Training/Test Split: 90% training, 10% testing\n• Vocabulary Size: Based on unique words in captions\n• Max Caption Length: Determined from dataset analysis\n\nEvaluation Metrics:\n• BLEU-1 Score: 0.423060\n• BLEU-2 Score: 0.036435\n• METEOR Score: 0.0058479532163742695\n\nTechnologies & Libraries:\n• Deep Learning: TensorFlow/Keras for model implementation\n• Computer Vision: VGG16 for feature extraction, OpenCV for image processing\n• NLP: Tokenizer for text processing, NLTK for evaluation\n• Web Framework: Streamlit for interactive web application\n• Data Processing: NumPy, Pandas for data manipulation\n• Image Processing: PIL for image handling\n\nApplications:\n• Image indexing and retrieval systems\n• Accessibility enhancement for visually impaired users\n• Automated content generation for social media\n• Image search and organization systems'
  },
  {
    id: 5,
    title: 'Entertainment Industry Analysis Report',
    description: 'A comprehensive data visualization project analyzing movie ratings (by audience and critics), budgets, and the number of movies released under various genres from 2007 to 2011. The analysis uncovers trends in budget allocation, movie releases, and rating correlations to support strategic decision-making for movie review companies.',
    extendedDescription: 'This project provides an in-depth analysis of the entertainment industry, focusing on movie ratings, budgets, and releases across different genres from 2007 to 2011. The analysis was developed using Tableau software during an internship at Cognitive i IT Solutions (P) Ltd.\n\nThe project examines budget allocation trends across different genres, revealing that Action movies consistently had high budgets, peaking in 2010 at $2,736 million. Comedy and Drama genres showed moderate and stable budget allocations, while Horror had the lowest budget across all years.\n\nA key finding is the positive correlation between audience and critic ratings, suggesting that movies well-received by critics tend to be liked by audiences as well, though exceptions exist where divergence between the two occurs.\n\nThe analysis also reveals that Comedy genre consistently saw the most releases, peaking in 2009 with 41 films, while Drama remained a popular genre with high numbers of releases each year. Other genres such as Horror and Thriller saw fewer releases.\n\nAdditionally, the comparison shows that audience ratings tended to be higher than critic ratings in most years, with 2010 seeing a significant difference where audience ratings were much higher (61.43%) compared to critic ratings (45.56%).\n\nThe project includes a comprehensive dashboard that combines all visualizations, providing stakeholders with a holistic view of the movie industry trends during this period.',
    image: entertainmentIndustryImage,
    technologies: ['Tableau', 'Tableau Prep', 'Excel', 'Data Visualization', 'Dashboard Design', 'Data Analysis', 'LOD Expressions', 'Calculated Fields', 'Parameters', 'Storyboards'],
    github: 'https://github.com/madesh6554/Cognitive-i-IT-Solution-Internship-Project-',
    demo: 'https://public.tableau.com/views/EntertainmentIndustryAnalysisProject/ProjectDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    pdf: '/pdfs/Report_merged.pdf',
    featured: true,
    features: [
      'Budget Analysis: Analyzed budget allocation across Action, Comedy, Drama, Horror, and Thriller genres from 2007-2011',
      'Rating Correlation: Identified positive correlation between audience and critic ratings using scatter plot visualization',
      'Genre Release Trends: Tracked number of movies released per genre over time, revealing Comedy as most produced genre',
      'Rating Comparison: Compared audience vs critic ratings over time, showing audience ratings generally higher',
      'Top Movies Analysis: Analyzed budget of top 3 movies by both audience and critic ratings, segregated by genre',
      'Interactive Dashboard: Created comprehensive dashboard combining all visualizations for holistic industry view',
      'Data Cleaning: Prepared and cleaned movie industry dataset using Excel and Tableau Prep',
      'Advanced Visualizations: Utilized bar charts, line graphs, scatter plots, and heatmaps for trend analysis',
      'Strategic Insights: Provided actionable insights for movie review company strategic decision-making',
      'Time Series Analysis: Examined trends and patterns across 5-year period (2007-2011)'
    ],
    additionalInfo: 'Project Overview:\n• Project Type: Data Visualization & Analysis Project\n• Company: Cognitive i IT Solutions (P) Ltd, Salem, Tamil Nadu\n• Duration: Completed during internship (14-03-2024 to 20-07-2024)\n• Course Code: 23UPCSC4I01\n• Registration Number: U23PG507DTS018\n• University: Periyar University, Salem\n\nKey Insights:\n• Budget Trends:\n  - Action movies had consistently high budgets, peaking at $2,736 million in 2010\n  - Comedy and Drama genres showed moderate and stable budget allocations\n  - Drama peaked in budget allocation in 2009\n  - Horror had the lowest budget across all years, indicating clear difference in financial backing\n\n• Rating Analysis:\n  - Positive correlation between audience and critic ratings (upward trend in scatter plot)\n  - Movies well-received by critics tend to be liked by audiences, with some exceptions\n  - Audience ratings generally higher than critic ratings in most years\n  - 2010 saw significant difference: audience ratings 61.43% vs critic ratings 45.56%\n\n• Release Trends:\n  - Comedy genre consistently had the most releases, peaking at 41 films in 2009\n  - Drama remained popular with high numbers of releases each year\n  - Horror and Thriller saw fewer releases, with Thriller hitting lowest in 2011\n\n• Top Movies:\n  - Action and Adventure movies (Star Trek, Mission Impossible) had highest budgets\n  - Comedy and Drama featured slightly lower-budget top-performing movies\n  - Thriller movies (The Girl With The Dragon Tattoo) had notable budget allocations\n\nTechnologies & Tools:\n• Tableau: Primary tool for dashboard creation and visualization\n• Tableau Prep: Data cleaning and transformation\n• Excel: Initial data preparation and analysis\n• Calculated Fields: For custom metrics and calculations\n• Parameters: For interactive filtering and analysis\n• LOD Expressions: For complex aggregations across different levels\n\nDashboard Features:\n• Interactive filters for genre, year, and rating type\n• Multiple visualization types: bar charts, line graphs, scatter plots\n• Holistic view combining budget, ratings, and release trends\n• User-friendly interface for stakeholders'
  },
  {
    id: 6,
    title: 'India Rainfall Analysis',
    description: 'A comprehensive analysis of rainfall patterns across Indian states from 1901 to 2017, examining long-term trends, seasonal variations, state-wise distribution, climate change impacts, and extreme weather events. This analysis supports water resource management, agricultural planning, and disaster preparedness.',
    extendedDescription: 'India, a country heavily reliant on agriculture, experiences diverse rainfall patterns across its vast geographical expanse. Understanding these patterns is crucial for effective water resource management, agricultural planning, and disaster preparedness.\n\nThis comprehensive analysis delves into the intricate details of India\'s rainfall, examining long-term trends spanning over a century (1901-2017), seasonal variations, state-wise distribution, climate change impacts, and the detection of extreme weather events.\n\nThe dataset includes monthly rainfall data for all Indian States and Union Territories, with columns for each month (January to December) and annual totals. The analysis reveals a general upward trend in average annual rainfall, suggesting potential climate change impacts, though regional variations exist with some areas experiencing more significant increases than others.\n\nSeasonal analysis shows that the monsoon season consistently receives the highest average rainfall, followed by winter and summer. Seasonal variability is significant, with some years experiencing extreme rainfall events or droughts.\n\nState-wise distribution reveals that Arunachal Pradesh receives the highest average annual rainfall, while Rajasthan receives the lowest. Regional disparities in rainfall are evident, with coastal areas generally receiving higher precipitation than inland regions.\n\nThe analysis identifies years with extreme rainfall events, such as heavy rainfall or droughts, which is crucial for risk assessment and disaster preparedness. Understanding the frequency and intensity of these events helps inform climate change adaptation strategies.\n\nThis project was developed using Tableau during an internship at Cognitive i IT Solutions, providing valuable insights for policymakers and communities in developing strategies to mitigate risks and promote sustainable development.',
    image: rainfallAnalysisImage,
    technologies: ['Tableau', 'Tableau Prep', 'Excel', 'Data Visualization', 'Dashboard Design', 'Data Analysis', 'LOD Expressions', 'Calculated Fields', 'Time Series Analysis', 'Geographic Analysis'],
    github: 'https://github.com/madesh6554/Cognitive-i-IT-Solution-Internship-Project-',
    demo: 'https://public.tableau.com/app/profile/madesh.m7198/viz/IndiaRainAnalysis/Dashboard1',
    pdf: '/pdfs/Report_merged.pdf',
    featured: true,
    features: [
      'Long-Term Trend Analysis: Examined rainfall patterns from 1901 to 2017 across all Indian states',
      'Seasonal Variation Analysis: Identified monsoon, winter, and summer rainfall patterns and variability',
      'State-Wise Distribution: Analyzed average annual rainfall across all states and union territories',
      'Climate Change Impact: Detected upward trends in average annual rainfall suggesting climate change influences',
      'Extreme Weather Detection: Identified years with extreme rainfall events, heavy rainfall, and droughts',
      'Geographic Analysis: Revealed regional disparities with coastal areas receiving higher precipitation',
      'Time Series Visualization: Created visualizations showing trends over 117 years of data',
      'Interactive Dashboard: Developed comprehensive dashboard for exploring rainfall patterns',
      'Data Processing: Handled large dataset with monthly and annual rainfall data for all states',
      'Agricultural Insights: Provided valuable information for water resource management and farming planning'
    ],
    additionalInfo: 'Project Overview:\n• Project Type: Data Visualization & Climate Analysis Project\n• Company: Cognitive i IT Solutions (P) Ltd, Salem, Tamil Nadu\n• Duration: Completed during internship (14-03-2024 to 20-07-2024)\n• Course Code: 23UPCSC4I01\n• Registration Number: U23PG507DTS018\n• University: Periyar University, Salem\n• Dataset: Indian States Monthly Rainfall from 1901 to 2017\n\nKey Insights:\n• Long-Term Trends:\n  - General upward trend in average annual rainfall, suggesting potential climate change impacts\n  - Regional variations exist, with some areas experiencing more significant increases\n  - Over 117 years of data analyzed for comprehensive trend identification\n\n• Seasonal Rainfall Variation:\n  - Monsoon season consistently receives highest average rainfall\n  - Followed by winter and summer seasons\n  - Significant seasonal variability with extreme events in some years\n\n• State Distribution:\n  - Arunachal Pradesh receives highest average annual rainfall\n  - Rajasthan receives lowest average annual rainfall\n  - Regional disparities evident with coastal areas receiving higher precipitation than inland regions\n\nTechnologies & Tools:\n• Tableau: Primary tool for dashboard creation and visualization\n• Tableau Prep: Data cleaning and transformation of large historical dataset\n• Excel: Initial data preparation and analysis'
  },
  {
    id: 7,
    title: 'Email Spam Detection with Machine Learning',
    description: 'Implemented an email spam classifier using TF-IDF vectorization and logistic regression to distinguish spam from ham messages in the SMS Spam Collection dataset.',
    extendedDescription: 'This project automates spam email detection by training a supervised machine learning model on the SMS Spam Collection dataset (5,572 messages). The workflow includes data cleaning, handling missing columns, converting categorical labels to numerical values, TF-IDF text vectorization, and model training/evaluation using logistic regression. The resulting classifier delivers 96% accuracy and a weighted F1-score of 0.96, demonstrating a significant improvement over manual rule-based filtering with reduced maintenance overhead.',
    image: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?auto=format&fit=crop&w=900&q=80',
    tags: ['Machine Learning', 'NLP', 'Classification'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TF-IDF', 'Logistic Regression', 'Seaborn', 'Matplotlib'],
    github: '',
    demo: '',
    pdf: '/pdfs/Jupyter%20files/Email_spam_detection_with_machine_learning_Task_4%20.ipynb',
    featured: false,
    metrics: [
      { label: 'Accuracy', value: '96%' },
      { label: 'Precision (Spam)', value: '0.99' },
      { label: 'Dataset Size', value: '5,572 messages' }
    ],
    visualizations: [
      {
        title: 'Confusion Matrix & Metrics',
        description: 'Classification report and confusion matrix summarizing precision, recall, and F1-scores for both classes.',
        data: [
          { label: 'Accuracy', value: 96, display: '96%' },
          { label: 'Precision (Spam)', value: 99, display: '0.99' },
          { label: 'Recall (Ham)', value: 100, display: '1.00' },
          { label: 'Recall (Spam)', value: 74, display: '0.74' }
        ]
      }
    ],
    resources: [
      {
        label: 'Notebook (Jupyter)',
        url: '/pdfs/Jupyter%20files/Email_spam_detection_with_machine_learning_Task_4%20.ipynb'
      },
      {
        label: 'Dataset (Kaggle)',
        url: 'https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset'
      }
    ],
    codeLanguage: 'Python',
    codeSnippet: "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\n\n# vectorize the SMS corpus\nvectorizer = TfidfVectorizer(stop_words='english', lowercase=True)\nX = vectorizer.fit_transform(df['sms'])\ny = df['spam/ham'].map({'spam': 0, 'ham': 1}).astype(int)\n\n# train / test split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=3)\n\n# train logistic regression classifier\nmodel = LogisticRegression(max_iter=1000)\nmodel.fit(X_train, y_train)\n\nprint('Accuracy:', model.score(X_test, y_test))",
    features: [
      'Data Cleaning: Removed columns with >99% missing values and standardized column names',
      'Label Encoding: Converted spam/ham categories into binary numeric targets for modeling',
      'Train/Test Split: Allocated 80% of data for training and 20% for evaluation',
      'Text Vectorization: Applied TfidfVectorizer with English stop-word removal and lowercase normalization',
      'Model Training: Trained logistic regression classifier on sparse TF-IDF matrices'
    ]
  },
  {
    id: 8,
    title: 'Car Price Prediction with Machine Learning',
    description: 'Developed regression models to predict used car selling prices and compared linear regression with random forest for improved valuation accuracy.',
    extendedDescription: 'This project predicts the selling price of used cars using historical listings (301 records, 9 columns). The process covers duplicate detection/removal, exploratory analysis, categorical encoding, and the training of regression models.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    tags: ['Machine Learning', 'Regression', 'EDA'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Scikit-Learn', 'Linear Regression', 'Random Forest', 'Feature Engineering'],
    github: '',
    demo: '',
    pdf: '/pdfs/Jupyter%20files/CAR%20PRICE%20PREDICTION%20WITH%20MACHINE%20LEARNING%20task_3-checkpoint.ipynb',
    featured: false,
    metrics: [
      { label: 'Random Forest R²', value: '0.94' },
      { label: 'Linear Regression R²', value: '0.89' },
      { label: 'Records', value: '299 cleaned rows' }
    ],
    visualizations: [
      {
        title: 'Actual vs Predicted (Linear Regression)',
        description: 'Scatter plot comparing actual selling prices versus model predictions.',
        image: carChart2
      },
      {
        title: 'Random Forest Feature Importance',
        description: 'Horizontal bar chart ranking features such as Present_Price, Year, and Driven_kms by relative importance.',
        image: carChart3
      },
      {
        title: 'Correlation Heatmap',
        description: 'Correlation matrix among Year, Present_Price, Selling_Price, Driven_kms, and Owner.',
        image: carChart1
      }
    ],
    resources: [
      {
        label: 'Notebook (Jupyter)',
        url: '/pdfs/Jupyter%20files/CAR%20PRICE%20PREDICTION%20WITH%20MACHINE%20LEARNING%20task_3-checkpoint.ipynb'
      }
    ],
    codeLanguage: 'Python',
    codeSnippet: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.ensemble import RandomForestRegressor\n\nfeatures = car_1[['Year','Present_Price','Driven_kms','Fuel_Type','Selling_type','Transmission','Owner']]\nlabels = car_1['Selling_Price']\n\nX_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=13)\n\nlin_reg = LinearRegression().fit(X_train, y_train)\nrf_reg = RandomForestRegressor(random_state=17).fit(X_train, y_train)\n\nprint('Linear Regression R2:', lin_reg.score(X_test, y_test))\nprint('Random Forest R2:', rf_reg.score(X_test, y_test))",
    features: [
      'Data Cleaning: Identified and removed duplicate rows to create a clean dataset',
      'Exploratory Analysis: Visualized selling price distribution and correlation matrix',
      'Model Training: Built Linear Regression baseline and Random Forest regressor',
      'Feature Importance: Highlighted Present_Price and Year as top predictive features'
    ]
  },
  {
    id: 9,
    title: 'Unemployment Analysis with Python',
    description: 'Explored India’s unemployment trends up to November 2020 through data cleaning, exploratory data analysis, and geographic visualization.',
    extendedDescription: 'This project analyzes unemployment data across Indian regions from January to November 2020. The workflow includes inspecting dataset metadata, handling missing values, computing correlations, and visualizing unemployment rates using Seaborn and Plotly.',
    image: 'https://images.unsplash.com/photo-1506784881475-0e408bbca849?auto=format&fit=crop&w=900&q=80',
    tags: ['EDA', 'Data Visualization', 'Socioeconomic'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Plotly Express', 'EDA'],
    github: '',
    demo: '',
    pdf: '/pdfs/Jupyter%20files/Unemplyment%20analysis%20with%20python%20task_2-checkpoint.ipynb',
    featured: false,
    metrics: [
      { label: 'Records Analysed', value: '267' },
      { label: 'Regions Covered', value: '21 states' }
    ],
    visualizations: [
      { title: 'Unemployment Rate by Region', description: 'Region-wise unemployment distribution.', image: unempChart1 },
      { title: 'Labour Participation vs Unemployment', description: 'Comparative view of labour participation and unemployment.', image: unempChart2 },
      { title: 'Geospatial Pattern - Plot A', description: 'Heat/scatter visualization of unemployment by coordinates.', image: unempChart3 },
      { title: 'Geospatial Pattern - Plot B', description: 'Alternate geospatial pattern view.', image: unempChart4 }
    ],
    resources: [
      {
        label: 'Notebook (Jupyter)',
        url: '/pdfs/Jupyter%20files/Unemplyment%20analysis%20with%20python%20task_2-checkpoint.ipynb'
      }
    ],
    codeLanguage: 'Python',
    codeSnippet: "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('Unemployment_Rate_upto_11_2020.csv')\n\n# correlation matrix\ncorrelation = df.corr(numeric_only=True)\nsns.heatmap(correlation, cmap='coolwarm', annot=True)\nplt.title('Unemployment Correlation Heatmap')\nplt.show()",
    features: [
      'Dataset Exploration: Loaded 267-record unemployment dataset',
      'Correlation Study: Calculated pairwise correlations among labour indicators',
      'Geospatial Insights: Visualized latitude and longitude distributions'
    ]
  },
  {
    id: 10,
    title: 'AI-Powered Daily Tech News Automation (n8n)',
    description: 'Automated workflow that fetches real-time AI news from Google News RSS, summarizes it with Gemini, and stores structured results in Google Sheets.',
    extendedDescription: 'This automation system was built to track daily AI trends without manually reading multiple articles. The n8n workflow fetches real-time AI news from Google News RSS, uses Google Gemini LLM to generate 5-point summaries, and automatically stores the structured results in Google Sheets.',
    image: n8nTechNewsImage,
    tags: ['Automation', 'n8n', 'LLM'],
    technologies: ['n8n', 'Google News RSS', 'Google Gemini LLM', 'Google Sheets API', 'Automation', 'API Orchestration'],
    github: '',
    demo: 'https://www.linkedin.com/posts/madesh-m-15037b273_ai-automation-n8n-activity-7432316879395799041-Es3J',
    featured: false,
    media: [
      {
        type: 'image',
        src: n8nTechNewsShot1,
        alt: 'n8n workflow canvas',
        caption: 'n8n workflow: Google News RSS → Gemini summarizer → Google Sheets writer.'
      },
      {
        type: 'image',
        src: n8nTechNewsShot2,
        alt: 'Google Sheets output',
        caption: 'Structured daily AI news summaries stored in Google Sheets.'
      }
    ],
    features: [
      'RSS Ingestion: Fetches real-time AI news',
      'LLM Summarization: Generates clean 5-point summaries with Gemini',
      'Structured Storage: Writes outputs into Google Sheets'
    ]
  },
  {
    id: 11,
    title: 'Movie Recommendation Automation Bot (n8n + Telegram)',
    description: 'Automation workflow that fetches latest movies, filters and scores them, uses AI for curation, and sends recommendations to Telegram.',
    extendedDescription: 'Built to solve the “What should we watch?” decision problem. The workflow automatically fetches latest movies, filters by rating/votes/popularity, scores them with custom logic, and sends curated recommendations to Telegram.',
    image: n8nMovieBotImage,
    tags: ['Automation', 'n8n', 'Telegram', 'LLM'],
    technologies: ['n8n', 'APIs', 'Webhooks', 'Telegram Bot', 'Google Gemini LLM', 'Automation', 'Ranking/Scoring'],
    github: '',
    demo: 'https://www.linkedin.com/posts/madesh-m-15037b273_ai-automation-llm-activity-7432819683592028161-Tczt',
    featured: false,
    media: [
      {
        type: 'image',
        src: n8nMovieBotShot1,
        alt: 'n8n workflow',
        caption: 'n8n pipeline for movie recommendation.'
      },
      {
        type: 'video',
        src: n8nMovieBotVideo,
        alt: 'Movie bot demo',
        caption: 'Demo video showing recommendations delivered to Telegram.'
      }
    ],
    features: [
      'Automated Movie Fetch: Pulls latest movies via APIs',
      'Custom Scoring: Ranks movies using logic',
      'Telegram Delivery: Sends curated picks instantly'
    ]
  },
  {
    id: 12,
    title: 'Glove Shield AI: Safety Compliance System',
    description: 'An end-to-end computer vision pipeline using YOLOv8 to detect gloved vs. bare hands in industrial environments with 92% precision.',
    extendedDescription: 'Glove Shield AI is a specialized computer vision solution designed for industrial safety compliance. Using the YOLOv8 architecture, the system accurately distinguishes between workers wearing protective gloves and those with bare hands.',
    image: gloveShieldImage,
    tags: ['Computer Vision', 'YOLOv8', 'Safety AI'],
    technologies: ['Python', 'YOLOv8', 'Streamlit', 'OpenCV', 'Roboflow', 'Dataset Augmentation'],
    github: 'https://github.com/madesh6554/Gloved-vs-Ungloved-Hand-Detection',
    demo: 'https://gloved-vs-ungloved-hand-detection-m58nfzmdrlkzjxzktms8fm.streamlit.app/',
    featured: true,
    metrics: [
      { label: 'Precision', value: '92.1%' },
      { label: 'mAP50', value: '91.4%' }
    ],
    features: [
      'Real-time Detection: Identifies gloved vs. bare hands',
      'Streamlit Dashboard: Interface for monitoring'
    ]
  },
  {
    id: 13,
    title: 'Multi-Class Prediction of Obesity Risk (Kaggle)',
    description: 'A machine learning competition project classifying obesity risk levels using Logistic Regression with 88% accuracy.',
    extendedDescription: 'Participated in the Kaggle "Multi-Class Prediction of Obesity Risk" competition. Developed a robust classification model using data preprocessing, feature engineering, and Logistic Regression. Handled multi-class target variables and optimized hyper-parameters to reach an accuracy of 88%. This project highlights skills in handling real-world structured datasets and performing complex classification tasks.',
    image: kaggleObesityImage,
    tags: ['Machine Learning', 'Kaggle', 'Classification'],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'Feature Engineering'],
    github: 'https://github.com/madesh6554',
    demo: 'https://www.kaggle.com/madesh6554',
    featured: true,
    metrics: [
      { label: 'Accuracy', value: '88%' },
      { label: 'Task', value: 'Multi-class' }
    ],
    features: [
      'Advanced Feature Engineering: Transformed raw data into predictive signals',
      'Model Optimization: Fine-tuned Logistic Regression for peak performance',
      'Kaggle Competitive Environment: Benchmarked against global data scientists'
    ]
  }
];

export const ongoingProjects = [
  {
    id: 1,
    title: 'Conversational AI Tutor (RAG + STT/TTS Mascot)',
    description: 'Building a RAG-powered conversational tutor with speech recognition, text-to-speech, and animated mascot UI.',
    extendedDescription: 'This ongoing project delivers an end-to-end conversational AI tutor with voice capabilities and real-time mascot animations.',
    image: aiTutorImage,
    tags: ['RAG', 'LLM', 'Voice AI'],
    technologies: ['Python', 'FastAPI', 'LangChain', 'Whisper STT', 'Google TTS', 'React'],
    github: 'https://github.com/madesh6554/conversational-AI-tutor-RAG-',
    demo: '',
    progress: 'In Progress',
    features: [
      'RAG Pipeline: Context-aware document retrieval',
      'Speech-to-Text: Real-time transcription',
      'Mascot UI: Animated mascot driving engagement'
    ]
  }
];

export const upcomingProjects = [
  {
    id: 101,
    title: 'Personalized AI Chat',
    description: 'A privacy-first, individual-friendly AI chat that adapts to your tone and preferences.',
    image: aiChatImage,
    tags: ['LLM', 'RAG', 'Personalization'],
    technologies: ['React', 'FastAPI', 'LangChain', 'Chroma'],
    status: 'Planning'
  },
  {
    id: 102,
    title: 'Career Suggestion with AI',
    description: 'An AI career guide that analyzes skills and trends to recommend learning paths.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    tags: ['Recommendation', 'NLP', 'Roadmapping'],
    technologies: ['React', 'Python', 'LangChain', 'Job APIs'],
    status: 'Research'
  }
];
