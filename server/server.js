const express = require('express');
const cors = require('cors');
const Groq = require("groq-sdk"); // Groq Library
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Groq AI Setup (Render ki key use ho rahi hai)
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get('/', (req, res) => {
    res.json({ message: "Flowdesk AI Backend is Live!" });
});

// --- AI CHAT ROUTE ---
app.post('/api/ai/chat', async (req, res) => {
    const { prompt } = req.body;
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are FlowDesk AI, a world-class workspace assistant created by Amar Kumar. Give short, professional and helpful advice for project management."
                },
                { role: "user", content: prompt }
            ],
            model: "llama3-8b-8192", // Super fast model
        });
        res.json({ response: chatCompletion.choices[0]?.message?.content || "AI is resting right now." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Stats API
app.get('/api/stats', (req, res) => {
    res.json({ activeUsers: 125, serverStatus: "Optimal", version: "1.1.0" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});