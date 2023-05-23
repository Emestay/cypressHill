# GIT GITHUB TESTING

*Author*: Mathieu MITHRIDATE
*Date*: 02 / 05 / 2023

## 1.2.1 Méthode addUser

Pour valider la méthode addUser, nous devons tester les sorties suivantes :

1. Erreur, les informations sont incorrectes (code HTTP 400 Bad request)
2. Erreur, le compte existe déjà (code HTTP 400 Bad request)
3. Erreur d’enregistrement BDD (code HTTP 500 erreur interne serveur)
4. Le compte a été ajouté en BDD (code HTTP 200 Ok)

## 1.2.2 Outils et environnement de test (End to End)

Le projet sera développé avec les langages, technologies et outils suivants :

- HTML, CSS, JavaScript (front-end)
- PHP (back-end)
- SQL (Base de données)
- Serveur web Apache
- Serveur Base de données (MariaDB)
- Node JS (npm gestionnaire de package)
- Cypress (Framework de test End To End)
- Navigateur web Chrome
- Gestionnaire de version GIT (repository GITHUB)

## 1.2.3 Structure du projet

Le projet sera développé en structure MVC (Model, Vue, Controller). Vous pouvez utiliser le script bash pour construire le projet :

[Script](https://github.com/mithridatem/script)

Voir le fichier readme pour exécuter le script bash.

## 1.2.4 Environnement de test

Pour exécuter nos tests end to end nous allons utiliser Node JS (npm) et le Framework Cypress.

### Installation de Node JS
[Download Node.js](https://nodejs.org/en/download)

Initialisez Node JS dans le projet :
```bash
npm init –y 
```

Installez l'environnement de test Cypress :
```bash
npm install -D cypress 
```



