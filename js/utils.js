// Utility functions shared across the app
const utils = {
    // Mock Save to LocalStorage
   saveUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
},

getUser: () => {
    return JSON.parse(localStorage.getItem('user'));
},

clearUser: () => {
    localStorage.removeItem('user');
},
    // Format Date
    formatDate: (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
};
