# 🖼️ MERN Image Search App (OAuth + Unsplash + MongoDB)

A full-stack MERN application that lets users **search images** from Unsplash, **save search history**, and **view top searches**, with **Google / GitHub / Facebook login**.

---

## 🚀 Features
- 🔐 OAuth login with Google, GitHub & Facebook (via Passport.js)
- 🔍 Image search using Unsplash API
- 💾 Search history stored in MongoDB
- 🏆 Top 5 most searched terms banner
- ✅ Multi-select images and show selected count
- ⬇️ Download selected images
- 🔓 Logout redirects to Login page
- 📱 Fully responsive frontend (React)

---

## 🧰 Tech Stack
**Frontend:** React.js, Axios, React Router
**Backend:** Node.js, Express.js, Passport.js
**Database:** MongoDB
**API:** Unsplash API

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Amit81082/Mern-Image-Search.git
cd Mern-Image-Search

2️⃣ Install dependencies

Backend:

cd server
npm install

2️⃣ Install dependencies

Backend:

cd server
npm install


Frontend:

cd client
npm install

3️⃣ Environment Setup

Create a .env file in the server folder and add your keys:

PORT=5000
MONGO_URI=your_mongo_connection_string
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=…
GOOGLE_CLIENT_SECRET=…
GITHUB_CLIENT_ID=…
GITHUB_CLIENT_SECRET=…
FACEBOOK_CLIENT_ID=…
FACEBOOK_CLIENT_SECRET=…
UNSPLASH_ACCESS_KEY=your_unsplash_key
CLIENT_URL=http://localhost:5173

4️⃣ Run the Project

Backend:

cd server
npm start


Frontend:

cd client
npm run dev


Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000

📂 Folder Structure
Mern-Image-Search/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   └── MainSearchPage.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── server/                # Node + Express backend
│   ├── routes/
│   │   ├── auth.js
│   │   ├── search.js
│   │   └── history.js
│   ├── config/
│   │   └── passport.js
│   ├── server.js
│   └── package.json
│
├── .env.example
└── README.md

🔑 Login / Logout Flow

User visits Login page → Clicks Login with Google/GitHub/Facebook

OAuth process: user authenticates and is redirected to main search page

User can search images, select, download, view history ✅

User clicks Logout → backend session cleared → app returns to Login page

👨‍💻 Author

Amit Maurya
Full-Stack Developer in progress 💻
📍 Prayagraj, India

⭐ Contribution & Feedback

If you find bugs or have enhancements, feel free to open an issue or submit a pull request.
Your feedback is welcome and helps improve the project!


