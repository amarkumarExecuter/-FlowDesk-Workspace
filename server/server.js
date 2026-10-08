const express = require('express');
const cors = require('cors');
const Groq = require("groq-sdk");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Groq Setup
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get('/', (req, res) => res.json({ message: "FlowDesk AI Backend Live!" }));

app.post('/api/ai/chat', async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await groq.chat.completions.create({
            messages: [{ role: "system", content: "You are FlowDesk AI. Be short and professional." }, { role: "user", content: prompt }],
            model: "llama3-8b-8192",
        });
        res.json({ response: completion.choices[0]?.message?.content || "Busy..." });
    } catch (e) { res.status(500).json({ response: "AI Error: " + e.message }); }
});

app.get('/api/stats', (req, res) => res.json({ activeUsers: 125, serverStatus: "Optimal", version: "1.1.0" }));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));