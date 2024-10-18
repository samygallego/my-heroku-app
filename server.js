const express = require('express');
const axios = require('axios'); // Utiliser axios pour faire des requêtes HTTP
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// Route qui va faire office de proxy vers l'API externe
app.get('/releves_meteo', async (req, res) => {
    try {
        // URL de l'API externe
const apiKey = process.env.MA_CLE_API;
const apiUrl = `https://data.ffvl.fr/api?base=balises&r=releves_meteo&key=${apiKey}`;
        
        // Faire la requête GET vers l'API externe
        const response = await axios.get(apiUrl);

        // Envoyer les données JSON reçues de l'API FFVL au client
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la requête vers l\'API FFVL:', error.message);
        res.status(500).send('Erreur lors de la récupération des données.');
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});

