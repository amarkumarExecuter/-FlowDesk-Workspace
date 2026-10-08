const express = require('express');
const cors = require('cors');
const Groq = require("groq-sdk");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- GOOGLE GROQ SETUP (Robust Check) ---
let groq;
const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
    console.error("CRITICAL ERROR: GROQ_API_KEY is missing in Environment Variables!");
} else {
    try {
        groq = new Groq({ apiKey: apiKey.trim() }); // .trim() space hata dega
        console.log("Groq AI Successfully Initialized");
    } catch (e) {
        console.error("Groq Init Error:", e.message);
    }
}

app.get('/', (req, res) => {
    res.json({ 
        message: "FlowDesk AI Backend is Running",
        aiStatus: apiKey ? "Key Found" : "Key Missing"
    });
});

// AI Chat Route
app.post('/api/ai/chat', async (req, res) => {
    const { prompt } = req.body;
    if (!groq) {
        return res.status(500).json({ response: "AI not initialized. Check Render Variables." });
    }

    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "You are FlowDesk AI. Give short professional project advice." },
                { role: "user", content: prompt }
            ],
            model: "llama3-8b-8192",
        });
        res.json({ response: completion.choices[0]?.message?.content || "No response." });
    } catch (e) {
        res.status(500).json({ response: "AI Error: " + e.message });
    }
});

app.get('/api/stats', (req, res) => {
    res.json({ activeUsers: 125, serverStatus: "Optimal", version: "1.2.5" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));