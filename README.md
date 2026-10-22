# Docker Notes App

## Student Information
- **Name:** Oxina, Diana Mae J.
- **Student ID:** 24-159
- **Course:** BSIT 3 - PYTHON
- **Activity:** Docker Hands-on Lab

## Project Description
A modern full-stack Notes App (NotesApp Pro) built with React and Vite that allows users to create, organize, and manage notes. It uses Docker Compose to orchestrate and run the frontend, backend API, and database services in separate containers.

## Technologies Used
- React + Vite
- .NET Web API
- PostgreSQL
- Docker and Docker Compose

## Project Structure
my-docker-lab/
├── api/
├── web/
├── screenshots/
│   ├── terminal-output.png
│   └── browser-app.png
├── docker-compose.yml
├── .gitignore
└── README.md

## How to Run & Setup Instructions
Prerequisites: Docker Desktop and Git must be installed and running on your system.

1. **Clone the repository**: Download the project source code from GitHub to your local machine.
   ```bash
   git clone [https://github.com/yanziii16/IPT102-Docker-Hands-on-Lab.git](https://github.com/yanziii16/IPT102-Docker-Hands-on-Lab.git)
   cd my-docker-lab


Build and start the application: Builds the container images from scratch and starts all services in the background using Docker Compose.

docker compose up --build
Check the running containers: Verifies that all multi-service containers are up and running properly.


## docker compose ps
Application URLs
Frontend App: http://localhost:3000

Stopping and Restarting Containers
To stop the containers while preserving your app's state:

docker compose down

## Screenshots
The screenshots/ folder contains visual evidence of successful lab execution:

terminal-output.png — Terminal logs showing successful container builds and database readiness.

browser-app.png — The NotesApp interface running successfully in the web browser.

## Conclusion
This project demonstrates the practical implementation of containerization, multi-service deployment, and environment orchestration using Docker and Docker Compose.