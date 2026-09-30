import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- 1. FIREBASE CONFIG ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const RENDER_URL = "https://flowdesk-workspace.onrender.com";

// --- 2. MODAL TOGGLE ---
window.toggleModal = () => {
    const modal = document.getElementById('projectModal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
};

// --- 3. BACKEND STATS (Render) ---
async function fetchBackendStats() {
    try {
        const response = await fetch(`${RENDER_URL}/api/stats`);
        const data = await response.json();
        document.getElementById('serverStatus').innerText = data.serverStatus;
        document.getElementById('apiVersion').innerText = data.version;
    } catch (err) {
        console.log("Render offline");
    }
}

// --- 4. REAL-TIME PROJECTS (Firestore) ---
function loadRealProjects(uid) {
    const q = query(collection(db, "projects"), where("userId", "==", uid));
    
    onSnapshot(q, (snapshot) => {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = "";
        let count = 0;

        snapshot.forEach((doc) => {
            count++;
            const p = doc.data();
            tableBody.innerHTML += `
                <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                    <td class="py-5 px-4 font-bold text-slate-800">${p.name}</td>
                    <td class="py-5 px-4 text-slate-500">${p.client}</td>
                    <td class="py-5 px-4"><span class="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Active</span></td>
                    <td class="py-5 px-4 text-right text-slate-400">Just Now</td>
                </tr>
            `;
        });
        document.getElementById('realProjectCount').innerText = count;
    });
}

// --- 5. SAVE NEW PROJECT ---
document.getElementById('project-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('saveBtn');
    btn.innerText = "Saving...";
    btn.disabled = true;

    try {
        await addDoc(collection(db, "projects"), {
            name: document.getElementById('p-name').value,
            client: document.getElementById('p-client').value,
            userId: auth.currentUser.uid,
            createdAt: serverTimestamp()
        });
        toggleModal();
        document.getElementById('project-form').reset();
    } catch (err) {
        alert("Error: " + err.message);
    }
    btn.innerText = "Save";
    btn.disabled = false;
});

// --- 6. AUTH CHECK ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('userName').innerText = user.email;
        fetchBackendStats();
        loadRealProjects(user.uid);
    } else {
        window.location.href = "login.html";
    }
});

// --- 7. LOGOUT ---
document.getElementById('logoutBtn').addEventListener('click', () => {
    signOut(auth).then(() => window.location.href = "login.html");
});