---
marp: true
theme: andrena-theme
paginate: true
---

<!-- _backgroundImage: url('./theme/background.png') -->
<!-- _backgroundPosition: auto -->
# TailwindCSS

---

# TailwindCSS

> A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

- 78.1k Stars auf Github
- Intellij Ultimate hat TailwindCSS Plugin pre-installed
- Aktive Community, v4.0 ist noch dieses Jahr geplant

---

## Was bringt mir das Framework?

- Eine Klasse pro CSS Property
- Nur verwendete Styles landen im .css Bundle
- Autocomplete von Klassen in der IDE
- Sortierung von Klassen nach Relevanz
- Eine Reihe an deklarativen Modifiern
- Ein konfigurables Designsystem

---

## Wie sieht das Framework aus?

```html
<div class="flex w-64 flex-col items-center gap-2 rounded-lg bg-amber-500 p-4 shadow-md shadow-gray-600 hover:bg-amber-600 hover:shadow-xl hover:shadow-gray-600">
    <h2 class="w-full text-center border-b-2 border-solid border-amber-700">Name</h2>
    <div class="relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-amber-700">
        <img src="./image.jpg" alt="" class="my-auto inline h-full w-auto bg-amber-200"/>
    </div>
    <p>Description</p>
</div>
```

---

## Ahhh so unleserlich! Gebt mir sprechende Klassennamen!

![hippo](./eye-bleach.gif)

---

## Tailwinds Statement 

> I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.
>
> -- <cite>[Adam Wathan, Creator of Tailwind CSS][1]</cite>

[1]: https://tailwindcss.com/

---

## Locality of behaviour vs Seperation of concerns

Das vorige HTML/CSS im "semantic CSS" Stil:

```html
<div class="card-container">
    <h2 class="card-headline">Name</h2>
    <div class="card-image-wrapper">
        <img src="./image.jpg" alt="" class="card-image" />
    </div>
    <p>Description</p>
</div>
```

---
<br>
<br>
Das zugehörige CSS

```css
.card-container {
    display: flex;
    width: 16rem;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgb(245 158 11);
    padding: 1rem;
    box-shadow: 0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), #4b5563;
}
.card-container:hover {
    background-color: rgb(217 119 6);
    box-shadow: 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1), #4b5563;
}
.card-headline {
    width: 100%;
    text-align: center;
    border-bottom: 2px solid rgb(180 83 9);
}
.card-image-wrapper {
    position: relative;
    height: 100px;
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid rgb(180 83 9);
}
.card-image {
    margin: 0 auto;
    display: inline;
    height: 100%;
    width: auto;
    background-color: rgb(253 230 138);
}
```

---

## Locality of behaviour vs Seperation of concerns

TailwindCSS braucht etwas Gewöhnung aber bringt Vorteile:

- Weniger Scrolling
- Weniger zwischen Dateien navigieren
- Kein ungenutztes CSS

---

## Wieso nicht inline styles?

```html
<div class="flex"></div>
<div style="display: flex;"></div>
```

- Keine/weniger "magic numbers" ("p-2" vs "padding: 0.5rem")
- Media Queries gehen Inline nicht
- Hover/Focus/... gehen Inline nicht
- Schlechtere Performance

---

<br>
<h2>Flow Chart</h2>

<div style="display: flex; align-items: center; width: 100%">
    <ul style="width: 40%">
        <li>Minimale Abhängigkeiten</li>
        <li>Inkonsistentes Design</li>
    </ul>
    <div style="width: 5%">
        <div>↘</div>
        <div>↗</div>
    </div>
    <span style="width: 55%">Raw CSS oder Framework-spezifische Lösung</span>
</div> 
<br>   
<div style="display: flex; align-items: center; width: 100%">
    <ul style="width: 40%">
        <li>Schneller Prototyp</li>
        <li>Sieht aus wie jede andere Seite</li>
        <li>Keine Lust auf CSS</li>
    </ul>
    <div style="width: 5%">
        <div>↘</div>
        <div>→</div>
        <div>↗</div>
    </div>
    <span style="width: 55%">Component Library (Bootstrap/Material UI)</span>
</div> 
<br> 
<div style="display: flex; align-items: center; width: 100%">
    <ul style="width: 40%">
        <li>Extrem dynamische Styles</li>
    </ul>
    <span style="width: 5%">→</span>
    <span style="width: 55%">Framework-spezifische Lösung/Inline Styles</span>
</div>
<br>
<div style="display: flex; align-items: center; width: 100%">
    <ul style="width: 40%">
        <li>Ansonsten</li>
    </ul>
    <span style="width: 5%">→</span>
    <span style="width: 55%">TailwindCSS?</span>
</div>

---

## Let's try it out!


