// dotenv ko load kar rahe hain (agar local pe kaam kar rahe ho toh)
try {
    require('dotenv').config();
} catch (e) {
    console.log("Dotenv not found, using system env variables");
}

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Firebase Admin Setup
if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FB_PROJECT_ID,
                clientEmail: process.env.FB_CLIENT_EMAIL,
                privateKey: process.env.FB_PRIVATE_KEY ? process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
            })
        });
        console.log("Firebase Admin Initialized");
    } catch (error) {
        console.error("Firebase Admin Error:", error.message);
    }
}

// Routes
app.get('/', (req, res) => {
    res.json({ message: "Flowdesk Backend is Live and Secure!" });
});

// Dummy Stats API
app.get('/api/stats', (req, res) => {
    res.json({
        activeUsers: 120,
        serverStatus: "Optimal",
        version: "1.0.2"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
