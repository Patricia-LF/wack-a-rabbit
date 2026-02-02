# wack-a-rabbit

A simple web-based game built with HTML, CSS and JavaScript.

**Run locally**
- **Open file:** You can double-click `index.html` for a quick test.
- **Recommended (local server):** Start a simple server in the project folder and open `http://localhost:8000` in your browser.

  Python 3:
  ```bash
  python3 -m http.server 8000
  ```

  (Optional) If you have Node.js, you can use `http-server`:
  ```bash
  npx http-server -c-1
  ```

**Development**
- Use the VS Code extension Live Server for live reload during development.

**Publishing to GitHub**
- Create a new repository on GitHub (for example `wack-a-rabbit`).
- In the project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Replace USERNAME/REPO with your GitHub account
# SSH:
git remote add origin git@github.com:USERNAME/REPO.git
# or HTTPS:
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

If your push is rejected because the remote contains commits, fetch and rebase first:

```bash
git pull --rebase origin main
git push -u origin main
```

**Tips**
- Add a `.gitignore` (examples: `*.log`, `.env`).
- Consider adding a `LICENSE` and more documentation if needed.

---
_Automatically updated to add run and GitHub instructions._
# wack-a-rabbit

Ett enkelt webbaserat spel byggt med HTML, CSS och JavaScript.

**Kör lokalt**
- **Öppna filen:** Du kan dubbelklicka `index.html` för ett snabbt test.
- **Rekommenderad (lokal server):** Starta en enkel server i projektmappen och öppna sedan `http://localhost:8000`.

  Python 3:
  ```bash
  python3 -m http.server 8000
  ```

  (Valfritt) Alternativ med `http-server` om du har Node:
  ```bash
  npx http-server -c-1
  ```

**Utveckling**
- Använd VS Code-extension `Live Server` för live-reload under utveckling.

**Lägga upp på GitHub**
- Skapa ett nytt repo på GitHub (t.ex. `wack-a-rabbit`).
- I projektmappen, kör:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Byt ut USERNAME/REPO med ditt GitHub-konto
# SSH:
git remote add origin git@github.com:USERNAME/REPO.git
# eller HTTPS:
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Om pushen avvisas med meddelande om att fjärran innehåller commits, hämta först och rebase:

```bash
git pull --rebase origin main
git push -u origin main
```

**Tips**
- Lägg till en `.gitignore` (exempel: `*.log`, `.env`).
- Lägg gärna till en kort `LICENSE` och fler instruktioner här om du vill.

---
_Skapad: automatiskt uppdaterad av utvecklarhjälp för att lägga till kör- och GitHub-instruktioner._
# wack-a-rabbit