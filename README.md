# Simple GitHub Commit Hash Printer 🐳

This project is a simple Dockerized application that prints the **latest Git commit hash**.  
It comes with a **CI pipeline using GitHub Actions** that automatically builds and pushes the Docker image to **DockerHub**.

---

## 🚀 Features

- Prints the latest Git commit hash
- Packaged as a Docker image
- Automated **build & push** with GitHub Actions
- Easily runnable locally or in any Docker-supported environment

---

## 📦 DockerHub Repository

The image is available on DockerHub

## ▶️ Run the Container

Pull and run the image:

```bash
docker pull tanvirmahfuz22/simple-github-commit-hash-printer:latest

# Option 1: Run directly
docker run --rm tanvirmahfuz22/simple-github-commit-hash-printer:latest

# Option 2: Rename locally to a simpler name
docker tag tanvirmahfuz22/simple-github-commit-hash-printer:latest hash-printer:latest
docker run --rm hash-printer:latest
```

## 🔄 Continuous Integration (CI)

This project uses **GitHub Actions** to automate Docker image builds and pushes.

### Workflow Steps

1. **Build the Docker image**
2. **Push the image to DockerHub**

### Workflow File

```text
.github/workflows/docker-ci.yml
```
