---
date: "2023-08-06T11:32:58-05:00"
title: "Automating Build and Deployment of Your App with GitHub Actions"
image: "blog/github-actions.png"
isFeatured: true
category: "blog"
---

In this tutorial, we'll learn how to automate the build and deployment process of your web application using GitHub Actions. GitHub Actions allows you to automate tasks directly within your GitHub repository, making it easier to manage and streamline your development workflow.

### Introduction

We'll create a GitHub Actions workflow that triggers on every push to your repository. This workflow will build your application, and upon successful build, deploy it to a specified FTP server since there's still a lot of people using a shared hosting.

### Prerequisites

Before we begin, ensure you have the following:

-   A web application project hosted on GitHub.
-   Access to an FTP server where you want to deploy your application.
-   FTP credentials (hostname, username, password) securely stored as GitHub secrets.

### Setting Up GitHub Actions Workflow

1. **Create a New Workflow File**: In your GitHub repository, navigate to the `.github/workflows` directory (create it if it doesn't exist), and create a new file named `main.yml`.

2. **Define Workflow Steps**: Copy and paste the following GitHub Actions workflow code into `main.yml`:

```yaml
name: Build and deploy app
on:
    push:
        branches:
            - main

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout code
              uses: actions/checkout@v4

            - name: Setup Node.js
              uses: actions/setup-node@v4
              with:
                  cache: "yarn"

            - name: Install dependencies
              uses: borales/actions-yarn@v4
              with:
                  cmd: install

            - name: Build
              run: yarn build

            - name: Deploy to FTP
              uses: kevinpainchaud/simple-ftp-deploy-action@v1.2.0
              with:
                  ftp_host: ${{ secrets.FTP_HOST }}
                  ftp_username: ${{ secrets.FTP_USERNAME }}
                  ftp_password: ${{ secrets.FTP_PASSWORD }}
                  local_source_dir: "dist"
                  dist_target_dir: "yourwebsite.com/optional-directory"
                  delete: "false"
```

### Understanding the Workflow

-   Trigger: This workflow runs on every push to the main branch of your repository.
-   Steps:
    -   `Checkout code:` Fetches the latest code from the repository.
    -   `Setup Node.js:` Sets up Node.js environment with caching enabled.
    -   `Install dependencies:` Installs project dependencies using Yarn.
    -   `Build:` Builds the application using the defined build command (yarn build).
    -   `Deploy to FTP:` Deploys the built application to the specified FTP server using the simple-ftp-deploy-action.

### Conclusion

Congratulations! You've successfully set up a GitHub Actions workflow to automate the build and deployment process of your web application. With this automation in place, you can focus more on developing your app while GitHub Actions takes care of the deployment hassle.

Feel free to explore further customization options and integrations offered by GitHub Actions to enhance your development workflow.
