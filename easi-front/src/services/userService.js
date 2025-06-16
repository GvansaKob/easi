import { API_URL } from '../config'
import { authService } from './authService'

export const userService = {
  async getProfile() {
    const token = authService.getToken();

    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Impossible de récupérer le profil utilisateur");
    }

    return await response.json();
  },

  async uploadImage(file) {
    const token = authService.getToken();

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_URL}/users/upload-image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi de l'image");
    }

    return await response.json();
  }
}
