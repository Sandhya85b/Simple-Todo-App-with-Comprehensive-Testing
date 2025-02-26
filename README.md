

# Simple Todo App with Jest Testing & GitHub Actions 🚀

## 📌 Project Overview
This is a simple Todo application built using **Node.js, Express, and MongoDB**. It includes comprehensive **Jest tests** and **GitHub Actions** for continuous integration (CI/CD).

## ✨ Features
- ✅ Create, Read, Update, and Delete (CRUD) Todos
- 🔑 Authentication & Authorization (if applicable)
- 🧪 Unit & Integration Testing using **Jest**
- 🔄 CI/CD with **GitHub Actions**

## 🛠️ Installation & Setup

1️⃣ Clone the repository:
```bash
git clone <repo_url>
cd simple-todo-app
```

2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ Set up environment variables in a `.env` file:
```env
MONGO_URL=your_mongo_db_url
PORT=5000
```

4️⃣ Run the server:
```bash
npm start
```

## 📌 API Endpoints
| Method | Endpoint        | Description               |
|--------|---------------|---------------------------|
| POST   | `/todos/create` | Create a new Todo         |
| GET    | `/todos/`      | Get all Todos             |
| PUT    | `/todos/:id`   | Update a Todo by ID       |
| DELETE | `/todos/:id`   | Delete a Todo by ID       |

## 🧪 Running Tests

To run Jest tests, use:
```bash
npm test
```

## 🚀 GitHub Actions (CI/CD)
This project uses **GitHub Actions** to run Jest tests automatically on every push or pull request.

### 📄 `.github/workflows/test.yml`
```yaml
name: Run Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
```

## 🔥 Git Commands to Follow
```bash
# Initialize a Git repository (if not already done)
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial commit with Jest and GitHub Actions"

# Connect to a remote repository
git remote add origin <repo_url>

# Push to GitHub
git push -u origin main
```




