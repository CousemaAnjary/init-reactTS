import api from "./config/apiConfig"
import { LoginType, RegisterType } from "@/typeScript/Type"


// Inscrire un nouvel utilisateur
export const register = async (dataRegister: RegisterType) => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error)
    }
}

// connecter un utilisateur
export const login = async (dataLogin: LoginType) => {
    try {
        // Appel à l'API pour authentifier un utilisateur
        const response = await api.post('/login', dataLogin)
        const { user } = response.data // Extraire les données de l'utilisateur de la réponse

        // Stoker les données de l'utilisateur dans le local storage
        localStorage.setItem('user', JSON.stringify(user))

        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error)
    }
}

export const isAuthenticated = async (): Promise<boolean> => {
    try {
        // Appel à l'API pour vérifier le token
        const response = await api.get('/auth/verify-token')
        return response.status === 200 // Retourne true si le token est valide, sinon false

    } catch (error) {
        return false
    }
}

// Déconnecter un utilisateur
// export const logout = async () => {
//     // Supprimer le token du cookie
//     Cookies.remove('auth_token')

//     // Supprimer les informations de l'utilisateur du localStorage
//     localStorage.removeItem('user')
// }