# Gestionnaire de Quiz avec Statistiques

## Contexte
Vous êtes missionné pour développer une API backend destinée à gérer des quiz en ligne. L'objectif principal est de permettre la création, la gestion et l'interaction avec des quiz tout en fournissant des statistiques détaillées sur les utilisateurs et leurs performances.

---

## Objectifs du projet

1. **Créer une API REST robuste** pour gérer les quiz et les utilisateurs.
2. **Mettre en place une gestion dynamique des statistiques** sur les scores et la participation.
3. **Assurer la sécurité et la scalabilité** de l'application backend.

---

## Fonctionnalités à implémenter

### 1. Gestion des utilisateurs
- **Inscription et Connexion**
  - Inscription avec un mot de passe sécurisé (hachage avec bcrypt).
  - Authentification avec JWT.
  
- **Endpoints CRUD pour les utilisateurs** :
  - Créer, lire, mettre à jour et supprimer un utilisateur.

### 2. Gestion des quiz
- **CRUD sur les quiz**
  - Créer un quiz avec un titre, une description et une catégorie.
  - Ajouter des questions au quiz avec des options et une réponse correcte.
  - Modifier ou supprimer un quiz existant.
  
- **Endpoint pour récupérer les quiz**
  - Filtrer par catégorie ou difficulté.

### 3. Participation aux quiz
- **Endpoint pour répondre à un quiz**
  - Envoi des réponses par l'utilisateur.
  - Calcul automatique du score.
  
- **Feedback en temps réel**
  - Retour des bonnes et mauvaises réponses à la fin du quiz.

### 4. Statistiques et performances
- **Suivi des performances utilisateurs**
  - Endpoint pour consulter les scores historiques d'un utilisateur.
  - Calcul de statistiques globales : moyenne, meilleur score, etc.

- **Classement**
  - Génération d'un classement global ou par catégorie.

### 5. Sécurité
- **Middleware pour l'authentification**
  - Protéger les endpoints sensibles.
  
- **Validation des données**
  - Utilisation de Joi ou Yup pour valider les entrées utilisateur.

---

## Stack technique

### Backend
- **Node.js** (serveur).
- **Express.js** (framework).
- **MongoDB** (base de données).
- **Mongoose** (ORM pour MongoDB).
- **JWT** (authentification).
- **Bcrypt** (hachage des mots de passe).

### Tests
- **Postman** ou **Insomnia** pour tester les endpoints.
- Librairies comme **Jest** ou **Mocha** pour les tests automatisés.

---

## Organisation des fichiers

```
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── quizController.js
│   │   └── statsController.js
│   ├── models
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Question.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── quizRoutes.js
│   │   └── statsRoutes.js
│   ├── middlewares
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── utils
│   │   ├── jwt.js
│   │   └── validators.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## Étapes de réalisation

### 1. Initialisation
- Créer le projet avec `npm init`.
- Installer les dépendances :
  ```bash
  npm install express mongoose bcrypt jsonwebtoken dotenv joi
  ```

### 2. Mise en place des modèles MongoDB
- **User** : Contenant les informations utilisateur (nom, email, mot de passe, scores).
- **Quiz** : Structuré avec titre, description et liste de questions.
- **Question** : Contenant l'intitulé, les options et la réponse correcte.

### 3. Création des endpoints
- Développer les routes pour les fonctionnalités mentionnées.
- Ajouter des middlewares pour l'authentification et la gestion des erreurs.

### 4. Tests et débogage
- Utiliser Postman pour tester chaque endpoint individuellement.
- Écrire des tests unitaires pour les fonctions critiques.

---

## Critères de réussite

1. Les utilisateurs peuvent s'inscrire, se connecter et participer aux quiz.
2. Les quiz peuvent être créés, modifiés, supprimés et consultés via l'API.
3. Les performances des utilisateurs sont suivies avec des statistiques précises.
4. Le backend est sécurisé et résistant aux attaques courantes (injections, XSS, etc.).
