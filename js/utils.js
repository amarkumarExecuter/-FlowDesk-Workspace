// Utility functions shared across the app
const utils = {
    // Mock Save to LocalStorage
    saveUser: (email) => {
        localStorage.setItem('flowdesk_user', email);
    },
    // Get Current User
    getUser: () => {
        return localStorage.getItem('flowdesk_user');
    },
    // Logout
    clearUser: () => {
        localStorage.removeItem('flowdesk_user');
    },
    // Format Date
    formatDate: (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
};
