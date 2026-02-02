# wack-a-rabbit

Ett enkelt webbaserat spel byggt med HTML, CSS och JavaScript.

**Kör lokalt**
- **Öppna filen:** Du kan dubbelklicka `index.html` för ett snabbt test.
- **Rekommenderad (lokal server):** Starta en enkel server i projektmappen och öppna sedan `http://localhost:8000`.

  Python 3:
  ```bash
  python3 -m http.server 8000
  ```

  Node (npx http-server):
  ```bash
  npx http-server -c-1
  ```

  Om projektet har ett `start`-script i `package.json`:
  ```bash
  npm install
  npm start
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
- Lägg till en `.gitignore` (exempel: `node_modules/`, `*.log`, `.env`).
- Lägg gärna till en kort `LICENSE` och fler instruktioner här om du vill.

---
_Skapad: automatiskt uppdaterad av utvecklarhjälp för att lägga till kör- och GitHub-instruktioner._
# wack-a-rabbit