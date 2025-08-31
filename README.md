# MatchBusiness

MatchBusiness is a digital platform designed to connect skilled developers with innovative companies.  
It provides a space where companies can post real-world challenges, and coders can showcase their skills by solving them.  
The goal is to bridge the gap between talent and business innovation, accelerating digital transformation.

🌐 **Live Demo:** [https://matchbusiness-web.vercel.app/](https://matchbusiness-web.vercel.app/)

---

## 🚀 Features
- User authentication (login & registration).  
- Explore companies and their innovation challenges.  
- Developers can showcase their solutions.  
- Companies can evaluate coders’ skills based on real tasks.  

---

## 🛠️ Technologies Used
### Frontend
- HTML5, CSS3, JavaScript (SPA)  
- TailwindCSS (styling)  
- Vite (build tool)  
- Deployed on **Vercel**

### Backend
- Node.js with Express  
- PostgreSQL database  
- Authentication & API endpoints  
- Deployed on **Render**

---

## ⚙️ Installation & Setup

### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16 or higher)  
- [PostgreSQL](https://www.postgresql.org/) (if running locally)  


### Install dependencies
For both frontend and backend:
```bash
npm install
```

### Environment variables
Create a `.env` file in the backend with the following variables:
```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Run the project
#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd frontend
npm run dev
```

Now open:  
👉 Frontend: `http://localhost:5173`  
👉 Backend API: `http://localhost:5000`

---

## 📡 API Endpoints
- `POST /auth/login` – User login  
- `POST /auth/register` – User registration  
- `GET /companies` – List of companies  
- `GET /companies/:id` – Company details  

---

## 👨‍💻 Team Partner solutions
- Andrés Felipe Londoño  
- Brayan Duque  
- Pablo Jiménez Mora  
- Brisbany Puerta Herrera  
- Menelik Puerta Herrera  

---

## 📄 License
This project is for educational purposes only.  
