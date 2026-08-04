# FlowDesk Workspace

Unified SaaS dashboard for distributed teams to manage projects, approvals, and client delivery workflows.

## Project Structure

This project is built using vanilla HTML, CSS, and JavaScript. No build tools or Node.js required for the frontend boilerplate.

- `index.html`: Landing page.
- `login.html`: Mock authentication page.
- `dashboard.html`: The main SaaS application interface.
- `css/`: Contains modular stylesheets (Global, Login, Dashboard, Responsive).
- `js/`: Contains modular scripts (Auth logic, Dashboard UI logic, Global utils).

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Click "Login", enter any mock email/password, and you will be redirected to the interactive Dashboard.

## Features Included
- CSS Grid/Flexbox Layouts
- Fully responsive design (Mobile sidebar toggle)
- Vanilla JS DOM manipulation (Mock data population)
- Mock LocalStorage Authentication flow




```

flowdesk-workspace/
│
├── index.html
├── dashboard.html
├── login.html
├── css/
│   ├── style.css
│   ├── dashboard.css
│   ├── login.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── dashboard.js
│   ├── auth.js
│   └── utils.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo.png
|
|
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
│
└── README.md
```
