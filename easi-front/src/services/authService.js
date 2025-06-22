import { API_URL } from '../config'

export const authService = {

  async register(userData) {
    const response = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'inscription");
    }
    return await response.json();
  },

async login(credentials) {
  console.log('login - envoi à API :', credentials)

  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  const data = await response.json()
  console.log('Réponse API:', response.status, data)

  if (!response.ok) {
    throw new Error(data.message || "Email ou mot de passe incorrect");
  }

  localStorage.setItem('token', data.access_token);
  return data;
},


  logout() {
    localStorage.removeItem('token');
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
};
