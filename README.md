# Galagama Gems — Website Animation Build Prompt

A small Vite + React project demonstrating website animation patterns and interactions. The original design and motion spec are available on Figma: https://www.figma.com/design/KC2efRwJNJcryCIG72JtwP/Website-Animation-Build-Prompt

## Tech stack
- Vite (development server + build)
- React (JSX)
- Node.js and npm

## Prerequisites
- Node.js 16+ (or the version required by the repo)
- npm (or yarn)

## Quick start (Windows — PowerShell or Git Bash)
1. Clone the repo (if you haven't already)
   ```powershell
   git clone https://github.com/thimira20011/Galagama-Gems.git
   cd Galagama-Gems
   ```
2. Install dependencies
   ```powershell
   npm install
   ```
3. Run the dev server
   ```powershell
   npm run dev
   ```
   Open the URL shown in the terminal (usually http://localhost:5173)

4. Build for production
   ```powershell
   npm run build
   ```
5. Preview the production build locally
   ```powershell
   npm run preview
   ```

## Development notes
- The project uses Vite’s ESM workflow; make edits to .jsx/.tsx and Vite will hot-reload them.
- If you add large assets, consider Git LFS or optimize files to avoid push failures.

## Common commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Run tests (if configured): `npm test` or `npm run test`

## Contributing
1. Create a feature branch:
   ```powershell
   git checkout -b thimira-branch
   ```
2. Make commits locally.
3. Pull remote changes before pushing to avoid non-fast-forward errors:
   ```powershell
   git fetch origin
   git pull --rebase origin thimira-branch
   ```
4. Push:
   ```powershell
   git push -u origin thimira-branch
   ```

If you intentionally need to overwrite the remote (use with caution):
```powershell
git push --force-with-lease origin thimira-branch
```

## Links
- Figma prototype: https://www.figma.com/design/KC2efRwJNJcryCIG72JtwP/Website-Animation-Build-Prompt
- Repo: https://github.com/thimira20011/Galagama-Gems

## License
Add your project license here (e.g., MIT). Replace this line with the chosen license file.
