# 📘 EASI – Application d'aide aux étudiants

EASI est une application web conçue pour aider les étudiants à identifier et accéder facilement aux aides auxquelles ils peuvent prétendre.  
Elle repose sur un backend **NestJS**, une interface frontend **Vue.js 3**, une base de données **MySQL**, et une documentation API via **Swagger**.

---

## 📁 Structure du projet

easi/
├── easi-front/ # Frontend Vue.js 3 (Vite + TailwindCSS)
├── easi-back/ # Backend NestJS (TypeORM + JWT)


---

## 🚀 Installation locale

### 1. Cloner le projet

```bash
git clone https://github.com/GvansaKob/easi.git
cd easi
cd easi-front
npm install
npm run dev

## Lancer le frontend (Vue.js)
cd easi-front
npm install
npm run dev

## Lancer le backend (NestJS)
cd easi-back
npm install
npm run start:dev


## Tests unitaires (Jest)
cd easi-back
npm run test


## Sécurité
Authentification via JWT
Hachage des mots de passe avec bcrypt
Stratégie PassportJS (JwtStrategy) pour sécuriser les routes
CORS configuré dynamiquement selon l'environnement
Permissions utilisateur côté frontend via le token JWT

## Documentation Swagger (backend)
http://localhost:3000/api-docs

##!! Déploiement
Backend (NestJS) en production :
cd easi-back
npm run build
npm run start:prod
⚠️ En production, synchronize: false est activé dans app.module.ts pour éviter toute altération involontaire de la base.

Frontend (Vercel / Netlify) :
cd easi-front
npm run build


