import { API_URL } from '../config'
import { authService } from './authService'

export const userService = {
  async getProfile() {
    const token = authService.getToken()

    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error("Impossible de récupérer le profil utilisateur")
    }

    return await response.json()
  }
}
