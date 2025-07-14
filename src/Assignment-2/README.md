<!-- Add these details to the README.md file. ( for installing and setup PostMan ) -->

# Postman Installation Guide (Linux)

This guide provides step-by-step instructions to install the **latest stable version of Postman** on a Linux system using the official repository.

---

## 📦 Installation Steps with Explanations

### 1. Open Terminal

Use your system's terminal to run the following commands.

---

### 2. Add the Postman Repository

```bash
sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
```

> **Explanation**:  
> Adds Postman's official repository to your system so that `apt` can fetch the latest version directly from Postman's servers.

---

### 3. Import the Postman GPG Key

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
```

> **Explanation**:  
> Adds and trusts Postman's GPG key to ensure the software you're installing is authentic and hasn’t been tampered with.

---

### 4. Update the Package List

```bash
sudo apt-get update
```

> **Explanation**:  
> Refreshes your system’s package index to include the latest packages from the Postman repository you just added.

---

### 5. Install Postman

```bash
sudo apt-get install postman
```

> **Explanation**:  
> Downloads and installs the latest stable version of Postman from the repository.

---

## ✅ Post-Installation

Once installed, you can:

- Launch Postman from your **applications menu**, or  
- Run `postman` directly from the **terminal**


