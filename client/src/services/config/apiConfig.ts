import axios from 'axios'

// Récupérer l'URL de base de l'API à partir des variables d'environnement
const API_URL: string = import.meta.env.VITE_BACKEND_API_URL

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true // Pour envoyer les cookies avec les requêtes
})

// Ajouter un intercepteur 
api.interceptors.request.use((config) => {

    // Récupérer le token JWT de localStorage
    const token = localStorage.getItem('token')

    // Ajouter les headers par défaut
    config.headers = config.headers || {}

    // Ajouter le token JWT dans les headers de la requête
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    // Ajouter le Content-Type pour les requêtes POST avec des données JSON
    config.headers['Content-Type'] = `multipart/form-data`

    return config
})


export default api