# Serveur Node.js avec Express pour accéder aux données JSON de la FFVL

Ce projet est un serveur Node.js utilisant Express pour récupérer des données météo depuis l'API de la FFVL. Le serveur est déployé sur [Render](https://render.com) et permet de contourner les restrictions CORS pour une utilisation dans une application front-end.

## Fonctionnalités
- Récupération de données météo depuis l'API FFVL.
- Configuration CORS pour permettre les requêtes provenant d'autres domaines.
- Déploiement automatique via Render.

## Prérequis
- [Node.js](https://nodejs.org/en/) installé sur votre machine.
- Un compte [GitHub](https://github.com/).
- Un compte [Render](https://render.com/).
- Un dépôt GitHub configuré pour déployer votre projet.

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-projet.git
   cd votre-projet
   
   
2. Installez les dépendances :
    ```bash 
    npm install
    
3. Créez un fichier server.js qui définit un serveur Express pour récupérer les données météo :
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/releves_meteo', async (req, res) => {
    try {
        const response = await axios.get('https://data.ffvl.fr/api?base=balises&r=releves_meteo&key=VOTRE_CLE_API');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

4. Ajoutez une clé d'API FFVL dans les variables d'environnement si nécessaire. Vous pouvez configurer cela dans Render pour plus de sécurité.


## Déploiement sur Render

1. Connectez votre projet à Render via votre dépôt GitHub.
2. Configurez le service comme suit :

    Build Command : npm install
    Start Command : node server.js

3. Ajoutez les variables d'environnement dans Render si nécessaire :

    Par exemple : FFVL_API_KEY = votre_cle_api

4. Render déploie automatiquement votre application après chaque modification sur GitHub.

## Utilisation 

Une fois déployé, vous pouvez accéder à votre API via l'URL fournie par Render, par exemple :

https://votre-nom-de-service.onrender.com/releves_meteo

Vous pouvez ensuite effectuer une requête XMLHttpRequest depuis votre application front-end pour récupérer les données JSON.

## Dépendances
Express
Axios
CORS

## Maintenir l'application active avec UptimeRobot

Pour éviter que l'application ne se mette en veille après une période d'inactivité (comportement standard des services gratuits sur Render), vous pouvez utiliser un service de surveillance tel qu'UptimeRobot. UptimeRobot enverra des requêtes automatiques à intervalles réguliers pour garder votre application en ligne.

Cette approche permet de réduire les délais de réponse dus à la mise en veille de l'application sur Render, tout en restant dans les limites du plan gratuit. Vous pouvez ajuster la fréquence des pings en fonction de vos besoins pour équilibrer la réactivité de l'application et l'utilisation des ressources gratuites.

## Contribuer 

Les contributions sont les bienvenues ! N'hésitez pas à faire un fork du projet et à soumettre une pull request.




