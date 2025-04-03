const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");

dotenv.config();

const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(cors());
app.use(express.json());

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../portfolio/dist");
app.use(express.static(buildPath));

// Resume data as context
const resumeContext = `
My name is Ahmad Saad. I am a college student with experience in game development, augmented reality, and software engineering, web development.

### **Projects:**
- **Version Control System Like GIT**  
  Developed a CLI-based version control system in C++, implementing branching, merging, and stash features. Built a Python GUI using PyQT5 for easy file staging.  
- **ChatApp**  
  A real-time messaging platform built with Next.js (frontend) and Node.js with Express (backend), using Socket.IO, PostgreSQL, and Redis.  
- **AR Basketball**  
  Crafted an AR basketball game using Unity 3D and ARCore, focusing on realistic UI/UX.  
- **Car Game with Health-Bar**  
  Developed a Unity 3D car game with a dynamic health-bar and health pickups.  
- **Graphics Library | ArIES: Artificial Intelligence and Electronics Society, IITR**  
  Engineered a bespoke graphics library entirely in C, devoid of external graphics APIs like OpenGL or SDL.  
  - Implemented foundational drawing functionalities such as lines, rectangles, circles, polygons, and advanced area-filling operations from scratch.  
  - Developed robust error-handling mechanisms to ensure stability and reliability under diverse conditions.  

### **Work Experience:**
- **Kirabiz Technologies**  
  *Full-Stack Developer (Feb 2024 - Jun 2024)*  
  - Built a full-stack MERN application for online shopping, enhancing user experience and backend efficiency.  
  - Developed a responsive ed-tech frontend and managed version control with Git and GitHub.  

- **Machau Games**  
  *Game Developer (Jul 2023 - Present)*  
  - Developed a dynamic car racing game with Unity 3D.  
  - Built an email automation system using Python.  

- **ARIES, IITR**  
  *AR Developer (Apr 2023 - May 2023)*  
  - Created an AR Basketball game using Unity 3D and ARCore.  

### **Technical Skills:**
**Languages:** C++, C#, JavaScript, Lua, Python  
**Technologies:** Unity Engine, Git, GitHub, Linux, Redis, Prisma, Socket.io, Next.js, Tailwind, AWS, PostgreSQL, Express.js, Node.js, PyQT5, OpenGL, SDL  
**Concepts:** Game Development, Augmented Reality, Object-Oriented Programming, Version Control  

### **Education:**
- **Indian Institute of Technology Roorkee**  
  *B.Tech, Electrical Engineering (2022 - 2026)*  

### **Contact:**
- **GitHub:** [github.com/Kraken57](https://github.com/Kraken57)  
- **LinkedIn:** [linkedin.com/in/ahmad-saad-399304199](https://www.linkedin.com/in/ahmad-saad-399304199/)  
- **Email:** ahmad_s@ee.iitr.ac.in  
`;

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an AI assistant trained to answer questions about Ahmad Saad's resume. Here is his resume data: ${resumeContext}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    res.json({
      reply:
        response.choices[0]?.message?.content ||
        "Sorry, I couldn't understand that.",
    });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Error fetching response." });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
