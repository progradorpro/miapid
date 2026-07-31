# API Node.js con Express y MongoDB Atlas

## Requisitos
- Node.js 18+
- npm
- Cuenta en MongoDB Atlas
- Cuenta en Render o GitHub

## Instalar
```bash
npm install
```

## Variables de entorno
Crea un archivo .env con:
```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/mi_base?retryWrites=true&w=majority
TOKEN=123456
```

## Ejecutar localmente
```bash
npm start
```

## Desplegar en Render
1. Sube este proyecto a GitHub.
2. Crea un Web Service en Render.
3. Conecta el repositorio.
4. Usa:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Agrega las variables de entorno en Render.
