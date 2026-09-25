cat > install.sh << 'EOF'
#!/bin/bash

set -e

echo "========================================="
echo " DevOps GitOps Lab Setup Starting"
echo "========================================="

sudo apt update -y
sudo apt upgrade -y

echo ""
echo "Installing Docker..."
curl -fsSL https://get.docker.com | sh

sudo systemctl enable docker
sudo systemctl start docker

echo ""
echo "Docker Version:"
docker --version

echo ""
echo "Installing kubectl..."

KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)

curl -LO "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl"

chmod +x kubectl
sudo mv kubectl /usr/local/bin/

kubectl version --client

echo ""
echo "Installing Minikube..."

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube

echo ""
echo "Starting Minikube..."

minikube start --driver=docker

echo ""
echo "Installing ArgoCD..."

kubectl create namespace argocd || true

kubectl apply -n argocd \
-f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

echo ""
echo "Waiting for pods..."
sleep 60

kubectl get pods -n argocd

echo ""
echo "Exposing ArgoCD..."

kubectl patch svc argocd-server \
-n argocd \
-p '{"spec":{"type":"NodePort"}}'

echo ""
echo "Admin Password:"

kubectl -n argocd get secret argocd-initial-admin-secret \
-o jsonpath="{.data.password}" | base64 -d

echo ""
echo "Done."
EOF