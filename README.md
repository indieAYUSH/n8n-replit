# 🚀 n8n on Replit (No Credit Card Needed)

Hey! 👋  
This repo lets you run **n8n** (yup, that cool automation tool) right inside **Replit**, totally FREE. No credit card, no PAN, no server headache. Just hit "Run" and boom — automation magic.

---

## 💡 What is this?

n8n is like a mix of Zapier + Node.js — but open-source and way more flexible. With this setup, you can:

- Build bots 🤖
- Automate boring stuff 📊
- Connect APIs 💻
- Just test your ideas or learn how workflows work 🚀

This setup is perfect for testing, learning, or building small hobby tools without spending money or going through 10-step hosting guides.

---

## 🧰 Tech Stack

- Node.js (running on Replit)
- PM2 to keep the n8n process alive
- Basic Auth for login security
- Replit Nix environment to handle dependencies

---

## 🛠 How to Use

### ✅ 1. Import into Replit
If you’re reading this on GitHub, go to:  
👉 [https://replit.com/github](https://replit.com/github)

Paste your repo URL (after you forked/cloned it):  


### ▶️ 2. Click "Run"
Replit will install the required packages and start the server.

### 🌐 3. Open Web Preview
You’ll get a URL like:  

Visit it to access the n8n UI!

---

## 🔐 Login Credentials

- **Username**: `admin`  
- **Password**: `admin123`

(You can change these inside `ecosystem.config.js`)

---

## 🧠 Heads Up

- Replit free tier will sleep your repl after inactivity. Use cron-job.org to ping it every few mins.
- It’s not for production — just testing, learning, and small workflows.
- RAM is limited on Replit. Avoid loading heavy workflows.

---

## 📂 File Breakdown

| File                  | Purpose                                |
|-----------------------|----------------------------------------|
| `package.json`        | Dependencies and start command         |
| `index.js`            | Empty file just to satisfy Replit      |
| `ecosystem.config.js` | PM2 config to launch n8n properly      |
| `replit.nix`          | Tells Replit what dependencies to use  |

---

## 🙋‍♂️ Why I Made This

I just wanted to test some n8n stuff but every tutorial wanted me to set up Docker, VPS, or give my credit card 😑. So I made this simple repo to get up and running in like 2 minutes. Hope it saves someone else time too.

---

## 📢 Shoutout

- Big love to the **n8n team** — this tool is 🔥  
- Thanks **Replit** for being noob-friendly and free 💻

---

## 🧑‍💻 Made by Ayush

> Student • Game Dev • Loves AI & Automation  
> If you're building something cool, feel free to fork this, remix it, or reach out!

---

**Made with ☕, zero sleep, and lots of trial & error 😅**
