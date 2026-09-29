import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- APNI FIREBASE KEYS YAHAN RAKHNA ---
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA75sjVya0r-vS4yoQrBvG2YF2ShLkyB_M",
  authDomain: "flowdesk-workspace.firebaseapp.com",
  projectId: "flowdesk-workspace",
  storageBucket: "flowdesk-workspace.firebasestorage.app",
  messagingSenderId: "691632052472",
  appId: "1:691632052472:web:b3101c5159e0463396430d",
  measurementId: "G-TJ3N189PWT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- YE HAI TERA RENDER LINK ---
const RENDER_URL = "https://flowdesk-workspace.onrender.com"; 

// Backend se data lane wala function
async function fetchBackendStats() {
    try {
        const response = await fetch(`${RENDER_URL}/api/stats`);
        const data = await response.json();
        
        // HTML mein data bhar rahe hain
        document.getElementById('server-status').innerText = data.serverStatus;
        document.getElementById('active-users').innerText = data.activeUsers;
        document.getElementById('api-version').innerText = data.version;
        
        console.log("Backend Connected!");
    } catch (err) {
        console.log("Backend connection error:", err);
    }
}

// Check Login Status
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('user-email').innerText = user.email;
        fetchBackendStats(); // Login hote hi backend se baat karo
    } else {
        window.location.href = "login.html";
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    signOut(auth).then(() => window.location.href = "login.html");
});