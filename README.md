# CRM-HRM System

This project contains both the frontend (React + Vite) and the backend (Node.js + Express + MongoDB) for the CRM-HRM application.

## How to Run the Application

To run the application, you'll need to open two separate terminals.

### 1. Running the Backend Server

Navigate into the `backend` folder, install the required dependencies (if you haven't already), and start the Express server using Nodemon:

```bash
cd backend
npm install
npm run dev
```

The backend will start and typically run on `http://localhost:5000`. Make sure you have your local MongoDB instance running (or configure the `MONGO_URI` connection string inside `backend/.env`).

### 2. Running the Frontend Application

In a new terminal window, navigate to the `frontend` folder, install dependencies, and start the Vite development server:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173/` (or the port specified by Vite in the terminal output).
