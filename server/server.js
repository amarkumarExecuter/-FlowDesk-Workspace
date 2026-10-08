const express = require('express');
const cors = require('cors');
const Groq = require("groq-sdk");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Groq AI Setup
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get('/', (req, res) => res.json({ message: "FlowDesk AI Backend Live!" }));

app.post('/api/ai/chat', async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "You are FlowDesk AI. IMPORTANT: If asked for a list of tasks, provide ONLY the task names separated by commas. Do not use bullets, numbers, or introductory text. Just: Task 1, Task 2, Task 3." },
                { role: "user", content: prompt }
            ],
            model: "llama3-8b-8192",
        });
        const responseText = completion.choices[0]?.message?.content || "";
        res.json({ response: responseText });
    } catch (e) { 
        console.error("Groq Error:", e);
        res.status(500).json({ response: "AI Error: Check API Key" }); 
    }
});

app.get('/api/stats', (req, res) => res.json({ activeUsers: 125, serverStatus: "Optimal", version: "1.2.0" }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));