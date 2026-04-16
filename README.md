# DataFlow

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Description

DataFlow est une application Angular qui démontre les patterns de récupération et d'affichage de données en utilisant l'API JSONPlaceholder. L'application présente des posts, des utilisateurs et des commentaires avec des fonctionnalités interactives.

## Démarrage Rapide

```bash
git clone https://github.com/desse20/data-flow.git
cd data-flow
npm install
ng serve
```


## Fonctionnalités

- **Gestion des Posts** : Affiche tous les posts avec titre et contenu
- **Liste des Utilisateurs** : Consultez les informations utilisateur avec détails de l'entreprise
- **Système de Commentaires** : 
  - Voir tous les commentaires dans une section dédiée
  - Commentaires interactifs sous chaque post
  - Fonctionnalité de toggle pour afficher/masquer les commentaires
  - Lazy loading pour de meilleures performances
- **Design Responsive** : Interface moderne avec TailwindCSS
- **Navigation** : Routage propre entre les différentes sections

## Implémentation Technique

### Fonctionnalité Commentaires
- **Couche Service** : `CommentService` avec la méthode `getCommentsByPostId()`
- **Logique Composant** : 
  - `toggleComments()` pour la gestion de l'état UI
  - `getCommentsByPostId()` pour la récupération des données
  - Pattern lazy loading pour les performances
- **Composants UI** : Boutons interactifs et sections de commentaires extensibles

### Intégration API
- Utilise l'API JSONPlaceholder pour les données de test
- Client HTTP pour la récupération des données
- Gestion des erreurs et états de chargement

## Architecture des Données

### Flux : Services vers Composants

L'application suit une architecture où **toutes les données passent par les services avant d'arriver dans les composants** :

```
API JSONPlaceholder
        |
        v
    Services (Data Layer)
        |
        v
  Composants (Presentation Layer)
        |
        v
      Templates (UI)
```

**Rôles :**
- **Services** : Gèrent la communication avec l'API, la logique métier et la transformation des données
- **Composants** : Gèrent l'état UI, les interactions utilisateur et l'affichage des données
- **Templates** : Affichent les données et gèrent les interactions utilisateur

**Exemple avec les commentaires :**
1. `CommentService.getCommentsByPostId()` récupère les données depuis l'API
2. `PostsListComponent` utilise le service pour obtenir les commentaires
3. Le template affiche les commentaires quand l'utilisateur clique sur "Show Comments"

Cette séparation assure une meilleure maintenabilité, testabilité et réutilisabilité du code.

## Serveur de Développement

Pour démarrer un serveur de développement local, exécutez :

```bash
ng serve
```

Une fois le serveur démarré, ouvrez votre navigateur et naviguez vers `http://localhost:4200/`. L'application se rechargera automatiquement lorsque vous modifierez des fichiers source.

## Génération de Code

Angular CLI inclut des outils puissants de génération de code. Pour générer un nouveau composant, exécutez :

```bash
ng generate component component-name
```

Pour une liste complète des schémas disponibles (tels que `components`, `directives`, ou `pipes`), exécutez :

```bash
ng generate --help
```

## Construction

Pour construire le projet, exécutez :

```bash
ng build
```

Cela compilera votre projet et stockera les artefacts de construction dans le répertoire `dist/`. Par défaut, la construction de production optimise votre application pour les performances et la vitesse.

## Exécution des Tests Unitaires

Pour exécuter les tests unitaires avec le runner de test [Vitest](https://vitest.dev/), utilisez la commande suivante :

```bash
ng test
```

## Exécution des Tests End-to-End

Pour les tests end-to-end (e2e), exécutez :

```bash
ng e2e
```

Angular CLI n'inclut pas de framework de test end-to-end par défaut. Vous pouvez choisir celui qui convient à vos besoins.


## Ressources Additionnelles

Pour plus d'informations sur l'utilisation d'Angular CLI, y compris des références de commandes détaillées, visitez la page [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).



