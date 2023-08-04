# Mini Weather App
Mini Realtime Chat App to practice on Socket.IO, NodeJS, Express, TypeScript and React

## Live Demo
Visit the link: [TODO](https://todo/)

## Features
- A monorepo that contains the backend and frontend,
- Uses Socket.IO
- Both BE and FE uses TypeScript
  - BE was ready in JS.
  - I migrated it to TS from JS.

## Libs
- To save messages: [Redis](https://redis.com/) TODO: convert to SqLite for easy deployment such as Heroku
- Frontend Boilerplate: [Create React App with TypeScript Template](https://create-react-app.dev/)
  - Created via: `npx create-react-app frontend --template typescript`
- [EsLint](https://www.eslint.org/) + [Prettier](https://prettier.io/) + [AirBnb Style Guide](https://airbnb.io/javascript/react/)
  - Implementation Guide: https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97
- [Socket.IO](https://socket.io)
- [React Scrollable Feed](https://www.npmjs.com/package/react-scrollable-feed)

## Test in local environment

- **Clone repo:**
```bash
git clone https://github.com/pribrahimsari/Mini-Realtime-Chat-App.git
```

### 1) Redis:
- How to install: https://redis.io/docs/getting-started/installation/


### 2) Backend:
- **Install dependencies:**
```bash
cd backend 
npm install
```

- **Create `.env` file at root of backend folder:**
    - You can copy or rename `.env.example` file already available
    - for default Redis config, you do not need to change anything in .env file

```.env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASS=
```

- **Start Backend:**
```bash
npm run dev
```

- **Backend Runs on:** http://localhost:3000/

### 3) Frontend:
- **Install dependencies:**
```bash
cd frontend 
npm install
```

- **Start Frontend:**
```bash
npm start
```

- **Frontend Runs on:** http://localhost:3001/


- **Open multiple tabs for FE and send a message:**
