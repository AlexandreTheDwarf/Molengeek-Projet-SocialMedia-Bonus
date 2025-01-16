# Molengeek-Projet-SocialMedia-Bonus

Ce projet est une application web simple qui permet de récupérer et d'afficher les statistiques d'une chaîne YouTube en fonction de son nom ou alias. Il a été réalisé dans le cadre d'un exercice de consolidation des acquis en JavaScript et constitue un bonus personnel pour aller au-delà de l'exercice de base.

Ce projet est une extension du projet **Molengeek-Projet-SocialMedia** disponible [ici](https://github.com/AlexandreTheDwarf/Molengeek-Projet-SocialMedia). Dans cette version bonus, j'ai ajouté la fonctionnalité de récupération des statistiques d'une chaîne YouTube en fonction de son nom ou alias.

## Fonctionnalités

- **Récupération dynamique des statistiques YouTube** : L'utilisateur peut entrer le nom ou l'alias d'une chaîne YouTube, et l'application récupère ses abonnés, vidéos et vues à l'aide de l'API YouTube.
- **Incrémentation Dynamique** : Le chiffre s'incrémente automatiquement au chargement de la page pour une démonstration visuelle.

## Objectif

L'objectif de ce projet est de mettre en pratique les concepts suivants :
- Manipulation du DOM en JavaScript
- Gestion des événements
- Utilisation des API externes pour récupérer des données
- Animation des chiffres en JavaScript

## Structure du projet

Le projet contient les fichiers suivants :
- **index.html** : Le fichier HTML principal qui contient la structure de la page.
- **style.css** : Les styles CSS pour la mise en page et l'apparence des éléments.
- **script.js** : Le fichier JavaScript qui gère la logique de l'application, y compris la récupération des données via l'API YouTube.
- **consigne/** : Un dossier contenant une vidéo expliquant l'objectif du projet et son fonctionnement (il s'agit de la consigne de base de l'exercice).

## Comment démarrer le projet ?

### 1. Cloner le dépôt

Clonez le repository GitHub du projet sur votre machine locale en utilisant la commande suivante dans votre terminal :

```bash
git clone https://github.com/AlexandreTheDwarf/Molengeek-Projet-SocialMedia-Bonus.git
```

### 2. Ajouter votre clé API YouTube

Avant de pouvoir récupérer les statistiques des chaînes YouTube, vous devez obtenir une clé API YouTube. Pour cela :

- Allez sur [Google Cloud Console](https://console.developers.google.com/).
- Créez un projet et activez l'API YouTube Data API v3.
- Générez une clé API et copiez-la.

Ensuite, ouvrez le fichier **main.js** et remplacez la valeur vide de la variable `apiKey` par votre clé API dans cette ligne :

```javascript
const apiKey = 'VOTRE_CLE_API_ICI';
```

### 3. Lancer le projet

Ouvrez le fichier **index.html** dans votre navigateur préféré pour démarrer l'application. Vous pouvez alors entrer le nom ou l'alias d'une chaîne YouTube pour récupérer ses statistiques.

## Liens et ressources

- [Vidéo explicative](./public/consigne/Thanatos.mov) : Une vidéo démonstrative du fonctionnement du projet (il s'agit de la consigne de base de l'exercice).

## Améliorations possibles

- Ajout d'autres fonctionnalités comme la récupération des statistiques d'autres plateformes sociales.
- Ajouter un système de recherche d'autres informations pertinentes sur la chaîne YouTube (description, date de création, etc.).

Merci d'avoir pris le temps de regarder ce projet !
