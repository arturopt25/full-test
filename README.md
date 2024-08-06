# My Full-Stack Application

## Descripción

Esta es una aplicación web full-stack con una API backend y un frontend de React. La aplicación incluye funcionalidades como autenticación de usuarios, creación y visualización de publicaciones de blog, y más.

## Requisitos Previos

Asegúrate de tener instalados los siguientes software en tu máquina:

- [Node.js](https://nodejs.org/) (v12 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instrucciones para levantar la aplicación

### Clonar el repositorio

1. Clona el repositorio desde GitHub:

    ```bash
    git clone https://github.com/arturopt25/full-test.git
    cd full-test
    ```

### Configuración del Backend

1. Navega al directorio del backend:

    ```bash
    cd server
    ```

2. Instala las dependencias del backend:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en el directorio `server` con el siguiente contenido:

    ```env
    agregar la variable proporcionada en el correo.
    ```

4. Inicia el servidor backend:

    ```bash
    node index.js
    ```

    El servidor debería estar corriendo en [http://localhost:5000](http://localhost:5000).

### Configuración del Frontend

1. Navega al directorio del frontend:

    ```bash
    cd ../client
    ```

2. Instala las dependencias del frontend:

    ```bash
    npm install
    ```

3. Configura el proxy:

    Asegúrate de tener el siguiente proxy en tu `package.json` del directorio `client`:

    ```json
    "proxy": "http://localhost:5000"
    ```

4. Inicia la aplicación frontend:

    ```bash
    npm start
    ```

    La aplicación React debería estar corriendo en [http://localhost:3000](http://localhost:3000).

### Scripts Disponibles

#### Backend

- `node index.js`: Inicia el servidor backend utilizando Node.js.

#### Frontend

- `npm start`: Inicia la aplicación React en modo desarrollo.
- `npm run build`: Construye la aplicación React para producción en la carpeta `build`.

## Estructura del Proyecto

```plaintext
.
├── client                # Frontend React
│   ├── public            # Archivos públicos
│   └── src               # Código fuente del frontend
│       ├── components    # Componentes React
│       ├── pages         # Páginas de la aplicación
│       ├── store         # Configuración de Redux
│       └── App.js        # Componente principal
├── server                # Backend Express
│   ├── controllers       # Controladores de la API
│   ├── models            # Modelos de Mongoose
│   ├── routes            # Rutas de la API
│   ├── index.js          # Punto de entrada del servidor
│   └── .env              # Archivo de configuración de entorno
└── README.md             # Este archivo
