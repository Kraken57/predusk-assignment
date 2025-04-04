# **🚀 Three.js Portfolio with AI Chatbot**

### 🌍 **Live Demo**

👉 **[Deployed Website](https://kraken57.site/)**

## Demo Video
[![Watch the Video](./imgs/websitess.png)](https://www.youtube.com/watch?v=RC1zSKck5lk)
🔗 [Click here to watch the video](https://www.youtube.com/watch?v=RC1zSKck5lk)
---

## **📌 Project Overview**

This is a **3D Portfolio Website** built with **React, Vite, Three.js, and React Three Fiber**. It features:

- **Interactive 3D models** 🎮
- **AI-powered chatbot** 🤖 using **Groq Cloud API**
- **Email functionality** 📩 with **EmailJS**
- **Fully responsive and modern UI** ✨

The **backend** is built using **Node.js & Express.js** and deployed on **AWS EC2**.

---

## **🛠️ Tech Stack Used**

### **Frontend:**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React--Three--Fiber-CA4245?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### **Backend:**

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![Groq Cloud](https://img.shields.io/badge/Groq_Cloud-FFD700?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white)

### **Deployment & Hosting:**

![AWS EC2](https://img.shields.io/badge/AWS_EC2-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=aws-amplify&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

---

## **⚙️ Local Setup**

### **1️⃣ Clone the Repository**

```sh
 git clone https://github.com/Kraken57/predusk-portfolio.git
 cd predusk-portfolio
```

### **2️⃣ Setup Environment Variables**

Create a `.env` file in both `frontend` and `chatbot-backend` folders.

#### **Frontend (`frontend/.env`)**

```ini
VITE_EMAILJS_USER_ID=your_emailjs_user_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_BACKEND_URL=http://localhost:5000
```

#### **Backend (`chatbot-backend/.env`)**

```ini
PORT=5000
GROQ_API_KEY=your_groq_api_key
```

### **3️⃣ Install Dependencies & Start the Project**

#### **Frontend**

```sh
cd frontend
npm install
npm run dev
```

#### **Backend**

```sh
cd chatbot-backend
npm install
node server.js
```

Your chatbot API should now be running on `http://localhost:5000`.

---

## **🚀 Deployment on AWS**

### **1️⃣ Deploy Frontend on AWS Amplify**

1. Go to **[AWS Amplify Console](https://aws.amazon.com/amplify/)**.
2. Click **"New App"** → **"Host Web App"**.
3. Connect your **GitHub Repository**.
4. Configure **Build Settings**:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*
```

5. Set **Environment Variables** for EmailJS.
6. Click **Deploy** and wait for AWS to build & host your frontend.

### **2️⃣ Deploy Backend on AWS EC2**

#### **Launch EC2 Instance**

1. Go to **AWS EC2 Console** → **Launch Instance**.
2. Choose **Ubuntu 22.04 LTS**.
3. Select **t2.micro** (Free Tier Eligible).
4. Configure Security Groups:
   - Allow **Port 22 (SSH)**
   - Allow **Port 5000 (Backend API)**
5. Click **Launch** and download the `.pem` key.

#### **Connect to EC2 & Setup Backend**

```sh
ssh -i your-key.pem ubuntu@your-ec2-ip
```

```sh
sudo apt update && sudo apt upgrade -y
sudo apt install -y nodejs npm git
```

#### **Clone & Run the Backend**

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo/chatbot-backend
npm install
node server.js
```

#### **Keep the Server Running with PM2**

```sh
npm install -g pm2
pm2 start server.js --name chatbot-backend
pm2 save
```

### **3️⃣ Connect Frontend & Backend**

Update API URL in **`frontend/src/config.js`**:

```js
export const API_URL = "http://your-ec2-public-ip:5000";
```

Push the changes:

```sh
git add .
git commit -m "Updated API URL"
git push origin main
```

---

## **📂 Project Structure**

```
/threejs-portfolio
   ├── portfolio (Vite + React + Three.js)
   ├── chatbot-backend (Node.js + Express + Groq API)
```

---

### **🎯 Features**

✅ 3D Portfolio with interactive models 🎨
✅ AI-powered chatbot 🤖
✅ Email functionality 📩
✅ Fully Responsive UI 📱
✅ AWS EC2 + Amplify Deployment ☁️

---

### **💡 Future Improvements**

- ✅ Add WebSocket support for chatbot
- ✅ Optimize 3D model loading times

---

### **📬 Contact**

**Ahmad Saad**  
**IIT Roorkee**  
📧 **Email:** ahmad_s@ee.iitr.ac.in

---
