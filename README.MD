# 🚀 DevOps & Cloud Learning Dashboard

![DevOps & Cloud](https://img.shields.io/badge/DevOps%20%26%20Cloud-Learning%20Dashboard-0f172a?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white)

A modern, responsive **DevOps & Cloud Learning Dashboard** built from scratch with HTML, CSS and JavaScript. The project is containerized with Docker, published to Docker Hub, and automated with GitHub Actions.

## 🎬 Project Demo

> **GIF placeholder:** add your recorded dashboard GIF as `assets/dashboard-demo.gif` and this README will display it automatically.

![Dashboard Demo](assets/dashboard-demo.gif)

## ✨ What We Built

- 🎯 DevOps & Cloud learning dashboard focused on AWS + DevOps engineering
- 📊 Progress cards for AWS, Docker, Kubernetes and Terraform
- 🔥 Learning streak, study hours and completed-task stats
- ✅ Daily learning task manager with complete/delete actions
- 💾 Task persistence with browser Local Storage
- 🗺️ DevOps learning roadmap covering AWS, Docker, Kubernetes, Terraform, CI/CD and Helm
- 🎨 Dark glassmorphism UI with gradients, animations and responsive layout
- 🐳 Dockerized static web application using Nginx
- 📦 Docker Compose support for local container execution
- ⚙️ GitHub Actions workflow that builds and pushes the image to Docker Hub on pushes to `main`

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Dashboard structure and UI content |
| CSS3 | Responsive design, glassmorphism, gradients and animations |
| JavaScript | Task management and Local Storage functionality |
| Nginx | Lightweight production web server inside the container |
| Docker | Application containerization |
| Docker Compose | Local container orchestration |
| GitHub Actions | CI automation for Docker build and push |
| Docker Hub | Container image registry |

## 🏗️ Architecture

```text
                 Developer
                     |
                     | git push
                     v
              +---------------+
              |    GitHub     |
              |  Repository   |
              +-------+-------+
                      |
                      | workflow trigger
                      v
              +---------------+
              | GitHub Actions|
              |   CI Pipeline  |
              +-------+-------+
                      |
               docker build
                      |
                      v
              +---------------+
              |  Docker Image  |
              |  Nginx + App   |
              +-------+-------+
                      |
                 docker push
                      |
                      v
              +---------------+
              |   Docker Hub   |
              | raj25522/       |
              | devops-dashboard|
              +---------------+
```

## 🐳 Run with Docker

Build the image:

```bash
docker build -t devops-dashboard:latest .
```

Run the container:

```bash
docker run -d -p 8080:80 --name devops-dashboard devops-dashboard:latest
```

Open:

```text
http://localhost:8080
```

## 🧩 Run with Docker Compose

```bash
docker compose up -d
```

Then open:

```text
http://localhost:8080
```

Stop the application:

```bash
docker compose down
```

## ⚙️ CI/CD with GitHub Actions

The repository contains:

```text
.github/workflows/docker-build.yml
```

The workflow runs when code is pushed to the `main` branch and performs:

1. Checkout source code
2. Authenticate to Docker Hub using GitHub Secrets
3. Build the Docker image
4. Push the image to Docker Hub as `raj25522/devops-dashboard:latest`

Required GitHub repository secrets:

```text
DOCKER_USERNAME
DOCKER_PASSWORD
```

`DOCKER_PASSWORD` should contain a Docker Hub access token rather than your Docker Hub password.

## 📦 Docker Hub

Container image:

**`raj25522/devops-dashboard:latest`**

## 📁 Project Structure

```text
devops-cloud-learning-dashboard/
├── .github/
│   └── workflows/
│       └── docker-build.yml
├── assets/
│   └── dashboard-demo.gif
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── script.js
├── style.css
└── README.MD
```

## 🚀 Development Journey

This project is intentionally being developed step by step as a hands-on DevOps learning project:

```text
HTML / CSS / JavaScript
          ↓
       GitHub
          ↓
       Docker
          ↓
      Docker Hub
          ↓
   GitHub Actions CI
          ↓
    Kubernetes
          ↓
       AWS / EKS
```

## 🔮 Planned Enhancements

- 📈 Learning analytics and weekly charts
- 🎓 AWS certification tracker
- ☸️ Kubernetes deployment manifests
- 📦 Helm chart
- ☁️ AWS deployment
- 🔁 Automated deployment pipeline
- 🟢 Production health checks
- 🌐 HTTPS and custom domain

## 👨‍💻 Project Author

**Satish**

Building this project as a practical AWS + DevOps learning and portfolio project.

---

⭐ If you find the project useful, consider starring the repository.
