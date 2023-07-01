# Projet de Gestion de Comptes Bancaires (Digital Banking)

Ce projet consiste en une application de gestion de comptes bancaires permettant de gérer les clients, les comptes courants et les comptes épargne, ainsi que les opérations bancaires telles que les dépôts, les retraits et les transferts.

## Backend

Le backend de l'application est développé en utilisant le framework Spring Boot. Il suit une architecture en couches pour assurer une séparation claire des responsabilités.

- `Couches DAO`: Gère l'accès aux données et les opérations de base de données.

- `Couches Entities` : Représente les entités métier de l'application.

- `Couches Enums` : Contient des énumérations utilisées dans l'application.

- `Couches Exceptions` : Gère les exceptions personnalisées pour la gestion des erreurs.

- `Couches Mappers` : Effectue la conversion entre les entités et les DTO (Data Transfer Objects).

- `Couches Repositories` : Fournit des interfaces pour interagir avec la base de données.

- `Couches Services` : Contient la logique métier de l'application.

- `Couches Web` : Fournit des API REST pour l'interaction avec l'application.

- `Classe principale` : Point d'entrée de l'application backend.

## Frontend

Le frontend de l'application est développé en utilisant le framework Angular.

- `Composants` : Gère l'affichage et l'interaction avec l'utilisateur.

- `Models` : Contient les modèles de données utilisés dans l'application.

- `Services` : Fournit des services pour la gestion des clients et des comptes.


## Installation et exécution

Pour installer et exécuter l'application, suivez les étapes suivantes :

1. Clonez le dépôt du projet : `git clone https://github.com/ManalENCHR/e-Banking.git`
2. Accédez au dossier du backend : `cd e-Banking/e-Banking Backend`
3. Importez le projet backend dans votre IDE préféré (par exemple, Eclipse ou IntelliJ) et exécutez-le.
4. Accédez au dossier du frontend : `cd ../digital-banking-web`
5. Installez les dépendances : `npm install`
6. Lancez l'application frontend : `ng serve`
7. Accédez à l'application via votre navigateur à l'URL : [http://localhost:4200](http://localhost:4200)

## Contributions

Les contributions sont les bienvenues ! Consultez le fichier CONTRIBUTING.md pour obtenir des instructions détaillées sur la façon de contribuer au projet. Tous les types de contributions, tels que les corrections de bugs, les améliorations de fonctionnalités et les suggestions d'amélioration de l'expérience utilisateur, sont appréciés.

## Auteur

Ce projet a été développé par Manal Ennaciri Cherkaoui.