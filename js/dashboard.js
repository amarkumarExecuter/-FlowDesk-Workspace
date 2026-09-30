import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1. Apni Firebase Keys yahan dhyan se dalo
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
const RENDER_URL = "https://flowdesk-workspace.onrender.com";

// 2. Render se stats mangane ka function
async function fetchStats() {
    try {
        const response = await fetch(`${RENDER_URL}/api/stats`);
        const data = await response.json();
        
        // IDs match kar rahe hain HTML widgets se
        document.getElementById('activeProjectsCount').innerText = data.serverStatus;
        document.getElementById('pendingApprovalsCount').innerText = data.activeUsers;
        document.getElementById('deliveryRate').innerText = data.version;
    } catch (err) {
        console.error("Backend Error:", err);
        document.getElementById('activeProjectsCount').innerText = "Offline";
    }
}

// 3. Page load hote hi ye check karega user logged in hai ya nahi
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User ka email Header mein dikhayega
        document.getElementById('userName').innerText = user.email;
        fetchStats(); // Stats fetch karo
    } else {
        // Agar login nahi hai, login page bhej do
        window.location.href = "login.html";
    }
});

// 4. Logout Button Action
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            alert("Logging out...");
            window.location.href = "login.html";
        }).catch((err) => {
            alert("Error logging out: " + err.message);
        });
    });
}