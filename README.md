# 🧠 AI Agent Catalog



---

## 🔗 Live Demo

👉 [View Live on Vercel](https://aihub-mu-ebon.vercel.app/)

## 📁 GitHub Repository

🔗 [GitHub Repo](https://github.com/siam9192/ArkLab-AI-Agent-Catalog)

---

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS, ShadCN UI
- Redux
- NextAuth (for Google OAuth )
- TypeScript

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/siam9192/ArkLab-AI-Agent-Catalog.git)
cd ArkLab-AI-Agent-Catalog-main
```

### 3. Create a .env file
Use the provided .env.local.example as a template:

Fill in the environment variables as needed. For Google OAuth:

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

### 4. Run the development server
```bash
npm run dev
Visit http://localhost:3000 to view the application.
```

🧩 Optional Challenge: Google OAuth 2.0
Google OAuth was implemented using NextAuth.js.

### ✅ How It Works:
Used next-auth provider with mock Google credentials (for local testing).

- Created an /api/auth page to handle sign-in.

- Added session-aware route protection to certain pages.

### ⚠️ Challenges Faced:

Ensuring OAuth works on both development and Vercel environments.
Handling async session loading and fallback UI.

### 📌 Key Design Decisions
- App Router was used for improved file-based routing and metadata.

- Dynamic filtering and search handled via search params.

- Minimal UI with responsiveness in mind (custom + ShadCN components).



