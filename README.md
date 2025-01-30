# Scalable ERP System with Employment Management, Task Monitoring, and Fleet Tracking

## Overview

This is a **Scalable Enterprise Resource Planning (ERP) System** built using **React.js, Node.js, Express, and MongoDB**. It includes comprehensive features for **Employment Management, Task Monitoring, Training Modules, and Real-Time Fleet Tracking** using Google Maps API.

## Features

### 1. Employment Management

- Employee onboarding and record management
- Role-based access control (RBAC)
- Performance tracking and evaluation

### 2. Task Monitoring

- Assign, track, and manage tasks in real-time
- Automated task reminders and notifications
- Progress tracking with detailed reports

### 3. Training Modules & Toolbox Talks (TBTs)

- Designed **Toolbox Talks (TBTs)** and training modules for effective employee onboarding
- Integrated learning management with progress tracking
- Secure digital storage of training records

### 4. Real-Time Fleet Tracking

- Implemented **Google Maps API** for live tracking of fleet movement
- **Route optimization** and logistics control
- Enhanced **real-time monitoring** for better fleet management

### 5. Digitized Documentation

- Transitioned from paper-based to **digital documentation**
- Improved accessibility and reduced manual errors
- Secure cloud-based document storage

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Maps API:** Google Maps API
- **Authentication:** JWT-based authentication
- **Deployment:** Docker, Kubernetes (Optional)

## Installation & Setup

### Prerequisites

- Node.js installed
- MongoDB database setup

### Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install Dependencies

```sh
npm install
```

### Environment Configuration

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
JWT_SECRET=your_jwt_secret
```

### Run the Server

```sh
npm run server
```

### Run the Frontend

```sh
cd client
npm start
```

## API Endpoints

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | /api/employees      | Get all employees            |
| POST   | /api/employees      | Add a new employee           |
| GET    | /api/tasks          | Get all tasks                |
| POST   | /api/tasks          | Create a new task            |
| GET    | /api/fleet/tracking | Get real-time fleet tracking |

## Deployment

- Dockerize the application:
  ```sh
  docker-compose up --build
  ```
- Deploy to Kubernetes:
  ```sh
  kubectl apply -f k8s/
  ```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

