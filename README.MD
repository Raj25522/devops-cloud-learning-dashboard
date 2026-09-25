# 🚀 DevOps & Cloud Learning Dashboard

![DevOps & Cloud](https://img.shields.io/badge/DevOps%20%26%20Cloud-Learning%20Dashboard-0f172a?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Docker%20Hub](https://img.shields.io/badge/Docker%20Hub-2496ED?style=flat&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![Argo CD](https://img.shields.io/badge/Argo%20CD-EF7B4D?style=flat&logo=argo&logoColor=white)
![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=flat&logo=amazonaws&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white)

A modern, responsive **DevOps & Cloud Learning Dashboard** built from scratch with HTML, CSS and JavaScript and evolved into an end-to-end containerized, CI/CD and GitOps deployment project.

The application is packaged with Docker and Nginx, published to Docker Hub, built automatically with GitHub Actions, deployed to Kubernetes, and synchronized through Argo CD on AWS EC2 using a Minikube-based Kubernetes lab.

---

## 🎯 Project Goal

This project started as a simple HTML/CSS/JavaScript learning dashboard and was progressively extended into a practical DevOps project.

The goal is to demonstrate the complete path from source code to a running Kubernetes workload:

```
Application Development
        ↓
Git & GitHub
        ↓
Docker Containerization
        ↓
Docker Hub Registry
        ↓
GitHub Actions CI
        ↓
Kubernetes
        ↓
Argo CD GitOps
        ↓
AWS EC2
```

---

## 🖥️ Application Features

### 📊 Learning Dashboard

- AWS learning progress
- Docker learning progress
- Kubernetes learning progress
- Terraform learning progress
- Daily learning task management
- Browser Local Storage persistence
- Learning roadmap
- Current learning focus
- DevOps milestone cards
- Infrastructure status cards
- Responsive dark/glassmorphism UI

### 🧠 Current DevOps Learning Areas

- AWS
- Docker
- Kubernetes
- Terraform
- CI/CD
- GitHub Actions
- Argo CD
- Helm
- AWS EKS

---

## 🏗️ Complete Architecture

### Current GitOps Architecture

```
                        ┌──────────────────┐
                        │     Developer    │
                        │  HTML/CSS/JS App │
                        └────────┬─────────┘
                                 │
                                 │ git push
                                 ▼
                        ┌──────────────────┐
                        │      GitHub      │
                        │    Repository    │
                        └────────┬─────────┘
                                 │
                                 │ workflow trigger
                                 ▼
                     ┌───────────────────────┐
                     │    GitHub Actions     │
                     │     CI Pipeline       │
                     │                       │
                     │ • Checkout            │
                     │ • Docker Build        │
                     │ • Docker Push         │
                     └──────────┬────────────┘
                                │
                                │ docker push
                                ▼
                     ┌───────────────────────┐
                     │      Docker Hub       │
                     │ raj25522/             │
                     │ devops-dashboard      │
                     └──────────┬────────────┘
                                │
                                │ image
                                ▼
                     ┌───────────────────────┐
                     │   Kubernetes /        │
                     │      Minikube         │
                     │                       │
                     │  Namespace            │
                     │      ↓                │
                     │  Deployment           │
                     │      ↓                │
                     │  ReplicaSet           │
                     │      ↓                │
                     │  Pods (2 replicas)    │
                     │      ↓                │
                     │  NodePort Service     │
                     └──────────┬────────────┘
                                ▲
                                │
                         GitOps Sync
                                │
                     ┌──────────┴────────────┐
                     │       Argo CD         │
                     │   Application /       │
                     │    Auto Sync          │
                     └───────────────────────┘
                                │
                        ┌───────▼────────┐
                        │    AWS EC2     │
                        │ Minikube Host  │
                        └────────────────┘
```

---

## 🔄 Deployment Flow

### Continuous Integration

Every push to the configured GitHub branch triggers GitHub Actions.

```
Git Push
   ↓
Checkout source
   ↓
Docker build
   ↓
Docker login
   ↓
Push image to Docker Hub
```

### GitOps Deployment

Argo CD is connected to the Kubernetes manifests stored in Git.

```
Git Repository
     ↓
Argo CD detects desired state
     ↓
Argo CD Sync
     ↓
Kubernetes resources
     ↓
Deployment
     ↓
ReplicaSet
     ↓
2 Running Pods
```

The Kubernetes application is currently exposed through a NodePort service:

```
Service Port : 80
NodePort     : 30080
```

Because Minikube is running inside Docker on EC2, external access is currently provided through an EC2 port-forward during the lab setup.

---

## 🧰 Technology Stack

| Technology | Role |
|---|---|
| HTML5 | Dashboard structure |
| CSS3 | UI, glassmorphism, gradients, responsive design |
| JavaScript | Task interactions and Local Storage |
| Git | Version control |
| GitHub | Source repository |
| Docker | Containerization |
| Nginx | Static web server inside the image |
| Docker Hub | Container registry |
| GitHub Actions | CI automation |
| Kubernetes | Application orchestration |
| Minikube | Kubernetes learning/lab cluster |
| Argo CD | GitOps continuous delivery |
| AWS EC2 | Cloud compute host |

---

## 🐳 Docker

### Build the image

```bash
docker build -t devops-dashboard:latest .
```

### Run locally

```bash
docker run -d \
  --name devops-dashboard \
  -p 8080:80 \
  devops-dashboard:latest
```

Open:

```
http://localhost:8080
```

### Pull the published image

```bash
docker pull raj25522/devops-dashboard:latest
```

### Run the published image

```bash
docker run -d \
  --name dashboard \
  -p 8080:80 \
  raj25522/devops-dashboard:latest
```

---

## 📦 Docker Compose

The repository also includes:

```
docker-compose.yml
```

Start:

```bash
docker compose up -d
```

Stop:

```bash
docker compose down
```

---

## ⚙️ GitHub Actions

Workflow location:

```
.github/workflows/docker-build.yml
```

The CI workflow:

1. Checks out source code.
2. Authenticates to Docker Hub.
3. Builds the Docker image.
4. Pushes the image to Docker Hub.

Required repository secrets:

```
DOCKER_USERNAME
DOCKER_PASSWORD
```

`DOCKER_PASSWORD` should contain a Docker Hub access token.

### Current image

```
raj25522/devops-dashboard:latest
```

---

## ☸️ Kubernetes

Kubernetes manifests are maintained under:

```
k8s/
├── namespace.yaml
├── deployment.yaml
└── service.yaml
```

### Deployment

The application is configured with:

- 2 replicas
- Container port 80
- CPU request: 100m
- CPU limit: 500m
- Memory request: 64Mi
- Memory limit: 256Mi

### Service

The dashboard is exposed through:

```
Service Type : NodePort
Port         : 80
Target Port  : 80
NodePort     : 30080
```

---

## 🚀 Argo CD / GitOps

Argo CD manages the Kubernetes application from the Git repository.

The Argo CD application tracks:

```
Repository:
https://github.com/Raj25522/devops-cloud-learning-dashboard.git

Branch:
argocd-migration

Path:
k8s
```

The application is configured for automated synchronization.

### Argo CD responsibilities

- Watches the Git repository.
- Compares desired state with cluster state.
- Synchronizes Kubernetes manifests.
- Reconciles the application when drift is detected.
- Maintains the declared application state in Git.

---

## 🌿 Git Branch Strategy

### main

Stable project branch containing the primary application.

### argocd-migration

GitOps/Kubernetes development branch containing the Kubernetes and Argo CD deployment configuration.

---

## 📁 Project Structure

```
devops-cloud-learning-dashboard/
│
├── .github/
│   └── workflows/
│       └── docker-build.yml
│
├── k8s/
│   ├── namespace.yaml
│   ├── deployment.yaml
│   └── service.yaml
│
├── argocd/
│   └── application.yaml
│
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── script.js
├── style.css
└── README.MD
```

---

## 🧪 Kubernetes Verification

Check the node:

```bash
kubectl get nodes
```

Check application resources:

```bash
kubectl get all -n devops-dashboard
```

Check pods:

```bash
kubectl get pods -n devops-dashboard -o wide
```

Check service:

```bash
kubectl get svc -n devops-dashboard
```

Check Argo CD:

```bash
kubectl get pods -n argocd
```

---

## 🔍 What This Project Demonstrates

### Containerization

- Writing a Dockerfile
- Packaging a static application with Nginx
- Building images
- Running containers
- Publishing images to Docker Hub

### CI

- GitHub Actions
- Docker authentication with repository secrets
- Automated image builds
- Automated image publishing

### Kubernetes

- Namespaces
- Deployments
- ReplicaSets
- Pods
- Services
- NodePort
- Resource requests and limits

### GitOps

- Desired state stored in Git
- Argo CD application management
- Automatic synchronization
- Kubernetes reconciliation

### AWS

- EC2 as the cloud host
- Running Docker and Kubernetes workloads on EC2
- Exposing lab services through EC2 networking

---

## 📈 Development Journey

```
HTML / CSS / JavaScript
            ↓
        GitHub
            ↓
          Docker
            ↓
        Docker Hub
            ↓
     GitHub Actions
            ↓
       Kubernetes
            ↓
        Minikube
            ↓
         Argo CD
            ↓
        AWS EC2
```

The project started as a simple learning dashboard and was progressively converted into a hands-on DevOps and GitOps lab.

---

## 🔮 Next Enhancements

- Versioned Docker image tags (`v1`, `v2`, `v3`)
- Automated image promotion
- Argo CD Image Updater
- Helm chart
- Ingress
- HTTPS
- Custom domain
- Kubernetes health probes
- Horizontal Pod Autoscaler
- Terraform-based AWS infrastructure
- AWS EKS deployment
- Prometheus and Grafana monitoring
- Centralized logging

---

## 👨‍💻 Author

**Satish**

AWS & DevOps learning portfolio project.

GitHub:
https://github.com/Raj25522

Docker Hub:
https://hub.docker.com/u/raj25522

---

## ⭐ Project Summary

This project demonstrates an end-to-end path from application code to a GitOps-managed Kubernetes deployment:

```
Code
 ↓
GitHub
 ↓
GitHub Actions
 ↓
Docker Hub
 ↓
Argo CD
 ↓
Kubernetes
 ↓
AWS EC2
```

Built as a practical project to strengthen hands-on experience with **AWS, Docker, GitHub Actions, Kubernetes and Argo CD**.
