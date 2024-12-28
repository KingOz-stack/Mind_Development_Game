# Mind Development Game

## Overview
This web application is designed to help users improve their focus and mindfulness through interactive exercises like breathing, gratitude reflection, and the "Moment" game. Additionally, the app offers users the ability to connect with verified psychologists for professional support.

---

## Features

### Exercises
- **Breathing Exercises**: Guided exercises with timers to improve relaxation.
- **Gratitude Reflection**: Prompt-based journaling to encourage positivity.
- **The Moment Game**: Descriptive exercises where users focus on details of objects to enhance attention and combat ADHD symptoms.

### Connect with a Psychologist
- Search and filter verified psychologists.
- Real-time chat and appointment scheduling.

### Gamification
- Track streaks, time spent, and achievements.

---

## Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **Tailwind CSS**: For responsive and modern design.
- **Three.js**: For interactive 3D elements (optional).

### Backend
- **Node.js** with **Express.js**: For server-side logic and API development.
- **Socket.IO**: For real-time chat functionality.

### Database
- **MongoDB**: For storing user data and psychologist profiles.

### Hosting/Deployment
- **Netlify**: For frontend hosting.
- **Heroku**: For backend deployment.
- **MongoDB Atlas**: For cloud-hosted database.

### Collaborators/Teammates
- Angel Antwi-Mensah
- Seedorf Otchere
- Favour Umejesi
- Ghislain Nkundayezu

---

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas instance)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mind-development-game.git
   cd mind-development-game
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
2. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure
```
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   └── App.js
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   └── server.js
├── README.md
└── package.json
```

---

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to your branch: `git push origin feature-name`
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
- Color Stack Winter Hackathon for hosting the event.
- Team members for collaboration and dedication.

---

## Contact
For questions or feedback, please reach out to [umejesif@gmail.com].
