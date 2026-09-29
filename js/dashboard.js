import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- 1. APNI FIREBASE KEYS YAHAN WAPAS DALO (ZARURI HAI) ---
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

// --- 2. TERA LIVE RENDER LINK ---
const RENDER_URL = "https://flowdesk-workspace.onrender.com"; 

// --- 3. BACKEND SE DATA LANE WALA FUNCTION ---
async function fetchBackendStats() {
    try {
        console.log("Fetching from Render...");
        const response = await fetch(`${RENDER_URL}/api/stats`);
        const data = await response.json();
        
        // Tere Tailwind Dashboard ki IDs se match kar rahe hain
        if(document.getElementById('activeProjectsCount')) {
            document.getElementById('activeProjectsCount').innerText = data.serverStatus;
        }
        if(document.getElementById('pendingApprovalsCount')) {
            document.getElementById('pendingApprovalsCount').innerText = data.activeUsers;
        }
        if(document.getElementById('deliveryRate')) {
            document.getElementById('deliveryRate').innerText = data.version;
        }
        
        console.log("Backend Connected! Data:", data);
    } catch (err) {
        console.log("Backend connection error:", err);
        if(document.getElementById('activeProjectsCount')) {
            document.getElementById('activeProjectsCount').innerText = "Offline";
        }
    }
}

// --- 4. CHECK LOGIN STATUS ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Naam ya Email dikhane ke liye
        const nameElement = document.getElementById('userName') || document.getElementById('user-email');
        if(nameElement) {
            nameElement.innerText = user.email;
        }
        
        fetchBackendStats(); // Login hote hi Render se data mangwao
    } else {
        // Agar login nahi hai toh login page pe bhago
        window.location.href = "login.html";
    }
});

// --- 5. LOGOUT LOGIC ---
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = "login.html";
        });
    });
}