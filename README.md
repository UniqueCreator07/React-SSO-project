# 🔐 React SSO Authentication (Google & GitHub)

A simple and modern **Single Sign-On (SSO)** demo project built with **React (frontend)** and **Node.js + Express (backend)** using **Passport.js** for authentication.  
Supports **Google and GitHub login** with secure OAuth2 flow.

---

## 🚀 Features

- ✅ Google Sign-In using OAuth 2.0  
- ✅ GitHub Sign-In using OAuth 2.0  
- ⚡ Express-based authentication server with Passport.js  
- ⚛️ React frontend with clean UI and reusable components  
- 🔒 Secure session management with `express-session`  
- 🌐 CORS-enabled backend for frontend integration  
- 🧠 Easy to extend for other providers (LinkedIn, Twitter, etc.)

---

## 🧩 Project Structure

sso-project/
│
├── sso-auth-server/ # Node.js + Express + Passport backend
│ ├── server.js
│ ├── passportConfig.js
│ ├── .env
│ └── package.json
│
├── sso-frontend/ # React frontend
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── components/
│ ├── public/
│ │ └── index.html
│ └── package.json
│
└── README.md


---

## ⚙️ Tech Stack

**Frontend:**
- React (with `create-react-app`)
- HTML5, CSS3, JavaScript (ES6)

**Backend:**
- Node.js
- Express.js
- Passport.js (Google + GitHub Strategies)
- dotenv
- express-session

---

## 🛠️ Setup Instructions

1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/React-SSO-project.git
cd React-SSO-project

2️⃣ Setup the Backend (Server)
cd sso-auth-server
npm install


Create a .env file inside sso-auth-server folder:

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
CALLBACK_URL=http://localhost:5000/auth/google/callback
SESSION_SECRET=your_secret_key


Start the backend:
npm start


The server will run on http://localhost:5000.

3️⃣ Setup the Frontend (React)
cd ../sso-frontend
npm install
npm start


React app will run on http://localhost:3000.

🔗 OAuth Redirect URIs

Google OAuth Redirect URI:
- http://localhost:5000/auth/google/callback

GitHub OAuth Redirect URI:
- http://localhost:5000/auth/github/callback

💡 How It Works

- User clicks “Login with Google” or “Login with GitHub”
- React frontend redirects to the backend’s /auth/google or /auth/github route
- Passport.js handles authentication with the respective provider
- On success, user is redirected to the /success route
- Session is created and stored securely in Express

🧱 Future Improvements

🔹 Add JWT-based token management
🔹 Connect with a real database (MongoDB or PostgreSQL)
🔹 Include user dashboard after login
🔹 Add dark/light mode in UI
🔹 Deploy using Render / Vercel + Railway

🧑‍💻 Author
Developed by: Unique Creators
💼 React | Node | Full-Stack Developer
