<div align="center">

# 🍽️ Les Petits Plats

Application web de recherche de recettes développée en **JavaScript (ES6)**.

Le projet met en œuvre un moteur de recherche dynamique, un système de filtres multicritères ainsi qu'une architecture modulaire orientée composants.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

# 📖 Présentation

Les Petits Plats est une application permettant de rechercher des recettes de cuisine grâce à un moteur de recherche dynamique.

Le projet met particulièrement l'accent sur l'optimisation des performances de recherche et la manipulation de collections de données importantes en JavaScript.

L'objectif était de concevoir une interface fluide capable de filtrer rapidement les recettes selon plusieurs critères.

---

# 🎯 Objectifs

Ce projet m'a permis de mettre en pratique :

- JavaScript ES6
- Architecture modulaire
- Manipulation de données JSON
- Algorithmes de recherche
- Optimisation des performances
- Filtrage multicritères
- Manipulation avancée du DOM
- Séparation des responsabilités

---

# ✨ Fonctionnalités

- 🔎 Recherche dynamique de recettes
- 🏷️ Filtrage par ingrédients
- 🍳 Filtrage par appareils
- 🌿 Filtrage par ustensiles
- ⚡ Mise à jour instantanée des résultats
- 📋 Affichage détaillé des recettes
- 📱 Interface responsive

---

# 🏗️ Architecture

```text
            Application

               │

        Search Engine

               │

     Data Processing

               │

      Dynamic Filters

               │

          UI Rendering
```

---

# 🛠️ Stack technique

## Frontend

- JavaScript (ES6)
- HTML5
- CSS3

## Architecture

- Modules JavaScript
- Templates
- Pages
- Utilities

---

# 📂 Structure du projet

```text
scripts

├── pages
│   ├── main.js
│   └── recipePage.js
│
├── templates
│   ├── card.js
│   └── filter.js
│
└── utils
    ├── search.js
    ├── filters.js
    └── helpers.js
```

Le projet est organisé en modules afin de séparer la logique métier, le rendu des composants et les fonctions utilitaires.

---

# 🔍 Fonctionnement du moteur de recherche

Le moteur de recherche repose sur plusieurs niveaux de filtrage.

```text
Recherche utilisateur

        │

        ▼

Filtre des recettes

        │

        ▼

Extraction des ingrédients,
appareils et ustensiles

        │

        ▼

Mise à jour des filtres

        │

        ▼

Affichage des résultats
```

Cette approche permet de maintenir une recherche fluide même sur un ensemble de données conséquent.

---

# 🚀 Installation

## Cloner le projet

```bash
git clone https://github.com/jeremymillet/Les-petits-plats.git
```

## Ouvrir le projet

Il suffit d'ouvrir le fichier :

```text
index.html
```

ou d'utiliser une extension telle que **Live Server** sous VS Code.

---

# 🚀 Évolutions envisagées
- 🌙 Mode sombre
- 📱 Amélioration de l'expérience mobile

---

# 👨‍💻 Auteur

**Jérémy Millet**

Développeur Full Stack

📫 À la recherche d'un poste de développeur Backend / Full Stack.
