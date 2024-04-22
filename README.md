# TailwindCSS workshop

## Setup

Im Browser:

- https://play.tailwindcss.com/Q9SJQ6siiu

Intellij Ultimate:

- Tailwind Plugin sollte schon vorinstalliert sein
- Prettier Plugin ggf installieren und für `.html` anschalten
- npm i
- Ggf. IDE neustarten (da sonst das Tailwind Plugin nicht funktioniert)
- npm start
- Im Browser http://localhost:5173 öffnen
- In der IDE index.html öffnen und Aufgaben bearbeiten (Nummeriert von (1) - ...)

VSCode:

- Extensions installieren:
  - bradlc.vscode-tailwindcss
  - esbenp.prettier-vscode
- npm i
- npm start
- Im Browser http://localhost:5173 öffnen
- In der IDE index.html öffnen und Aufgaben bearbeiten (Nummeriert von (1) - ...)

## Präsentation

https://anmolitor.github.io/tailwind-workshop

## Weiterentwicklung des Workshops

Die Presentation wird aus `presentation/Presentation.md` generiert und mittels `.github/workflows/deploy-presentation.yml` automatisiert auf Github Pages deployed.

Der `play.tailwindcss.com` Link in README und Präsentation wird automatisch neu generiert und commited wenn sich `index.html`, `index.css` oder `tailwind.config.js` ändern (siehe `.github/workflows/update-tailwind-link.yml`)

Neue Aufgaben können mit `(Aufgabennummer)` hinzugefügt werden - `npm run check-assignments` kann genutzt werden um sicherzustellen,
dass die Aufgabennummern keine Lücken haben und es einen Hint für jede Aufgabe gibt.
