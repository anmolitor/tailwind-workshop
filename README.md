# TailwindCSS workshop

## Setup

VSCode:

- Extensions installieren:
  - bradlc.vscode-tailwindcss
  - esbenp.prettier-vscode
- index.html öffnen und Aufgaben bearbeiten (Nummeriert von (1) - ...)

Intellij Ultimate:

- Tailwind Extension sollte schon vorinstalliert sein
- Prettier Extension ggf installieren und für html anschalten
- index.html öffnen und Aufgaben bearbeiten (Nummeriert von (1) - ...)

Im Browser:

- https://play.tailwindcss.com/bkANqdcTa0

## Präsentation

https://anmolitor.github.io/tailwind-workshop

## Weiterentwicklung des Workshops

Die Presentation wird aus `presentation/Presentation.md` generiert und mittels `.github/workflows/deploy-presentation.yml` automatisiert auf Github Pages deployed.

Der `play.tailwindcss.com` Link in README und Präsentation wird automatisch neu generiert und commited wenn sich `index.html`, `index.css` oder `tailwind.config.mjs` ändern (siehe `.github/workflows/update-tailwind-link.yml`)

Neue Aufgaben können mit `(Aufgabennummer)` hinzugefügt werden - `npm run check-assignments` kann genutzt werden um sicherzustellen,
dass die Aufgabennummern keine Lücken haben und es einen Hint für jede Aufgabe gibt.
