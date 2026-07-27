document.addEventListener('DOMContentLoaded', () => {
    // 1. Auth Check
    const user = utils.getUser();
    if (!user) {
        window.location.href = 'login.html'; // Redirect if not logged in
        return;
    }
    
    // Set Username
    document.getElementById('userName').textContent = user.split('@')[0];

    // 2. Mobile Sidebar Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // 3. Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        utils.clearUser();
        window.location.href = 'login.html';
    });

    // 4. Mock Data Generation for Dashboard
    const mockData = {
        activeProjects: 12,
        pendingApprovals: 5,
        deliveryRate: "94%",
        workflows: [
            { project: "Website Redesign", client: "Acme Corp", status: "active", date: "2026-08-15" },
            { project: "Q3 Marketing Assets", client: "TechFlow", status: "pending", date: "2026-07-30" },
            { project: "API Integration", client: "GlobalNet", status: "active", date: "2026-08-05" }
        ]
    };

    // Populate Widgets
    document.getElementById('activeProjectsCount').textContent = mockData.activeProjects;
    document.getElementById('pendingApprovalsCount').textContent = mockData.pendingApprovals;
    document.getElementById('deliveryRate').textContent = mockData.deliveryRate;

    // Populate Table
    const tbody = document.querySelector('#workflowTable tbody');
    mockData.workflows.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.project}</strong></td>
            <td>${item.client}</td>
            <td><span class="status ${item.status}">${item.status.toUpperCase()}</span></td>
            <td>${utils.formatDate(item.date)}</td>
        `;
        tbody.appendChild(tr);
    });
});
