# 🖼️ Mern Image Search App (OAuth + Unsplash + MongoDB)

A full-stack MERN application that lets users **search images** from Unsplash, **save search history**, and **view top searches**, with **Google / GitHub / Facebook login**.

---

## 🚀 Features
- 🔐 OAuth login with Google, GitHub, and Facebook (Passport.js)
- 🔍 Image search using Unsplash API
- 💾 Search history stored in MongoDB
- 🏆 Top 5 most searched terms banner
- ✅ Multi-select with selected image counter
- ⬇️ Download selected images
- ⏳ Loader spinner for smooth UX
- 🔓 Logout redirecting to Login page
- 📱 Fully responsive frontend (React)

---

## 🧰 Tech Stack
**Frontend:** React.js, Axios, CSS
**Backend:** Node.js, Express.js, Passport.js
**Database:** MongoDB
**API:** Unsplash API

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
git clone https://github.com/your-username/image-search-app.git
cd image-search-app
2️⃣ Install dependencies
Backend:


cd server
npm install

Frontend:

cd client
npm install

3️⃣ Environment Setup
Create a .env file in the root directory and fill it using .env.example.

🧪 Run the Project
Start Backend:

cd server
npm start

Start Frontend:

cd client
npm run dev

Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000

📸 Screenshots / Demo GIF
(Add here 2–3 screenshots or a short GIF showing login → search → download flow.)

📜 Folder Structure
pgsql
Copy code
project/
│
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   └── SearchPage.jsx
│   │   └── App.js
│   └── package.json
│
├── server/              # Node + Express backend
│   ├── routes/
│   │   └── auth.js
│   │   └── api.js
│   ├── models/
│   ├── server.js
│   └── package.json
│
├── .env.example
└── README.md

👨‍💻 Author
Amit Maurya
Full Stack Developer in progress 💻
📍 Prayagraj, India

## Push to GitHub

### Commands:
git init
git add .
git commit -m "MERN Image Search Project Completed"
git branch -M main
git remote add origin https://github.com/yourusername/mern-image-search.git
git push -u origin main



