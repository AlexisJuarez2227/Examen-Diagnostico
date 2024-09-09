# API Florista

API Florista es una API REST diseñada para manejar un catálogo de productos y pedidos para una floristería. Permite a los usuarios crear, leer, actualizar y eliminar productos y pedidos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- Node.js (v14.15.1 o superior)
- MySQL (v5.7 o superior)
- npm (v6.14.8 o superior)

## Configuración del Entorno

### Configuración de Variables de Entorno

Copia el archivo `.env.example` a `.env` y actualiza las variables de entorno con tus configuraciones locales:

```plaintext
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=floristaDb
```

## Instalación

Sigue estos pasos para configurar tu entorno de desarrollo:

```bash
# Clonar el repositorio
git clone https://tu_repo_url/aqui.git

# Navegar al directorio del proyecto
cd api-florista

# Instalar dependencias
npm install
```

## Iniciar la Aplicación

Para iniciar la aplicación en un entorno de desarrollo, ejecuta:

```bash
# Iniciar el servidor en desarrollo
npm start
```

## Uso

La API está diseñada alrededor de dos recursos principales: productos y pedidos.

- **Productos**: Puedes agregar, obtener, actualizar y eliminar productos.
- **Pedidos**: Puedes crear, obtener, actualizar y eliminar pedidos.

### Ejemplos de Solicitudes

- **Crear Producto**:
  ```http
  POST /api/products
  Content-Type: application/json

  {
    "name": "Rosa",
    "price": 2.99,
    "stock": 100,
    "description": "Una rosa roja perfecta para cualquier ocasión.",
    "imageUrl": "http://example.com/rosa.jpg"
  }
  ```

- **Obtener Productos**:
  ```http
  GET /api/products
  ```

- **Actualizar Producto**:
  ```http
  PUT /api/products/{id}
  Content-Type: application/json

  {
    "price": 3.49,
    "stock": 150
  }
  ```

- **Eliminar Producto**:
  ```http
  DELETE /api/products/{id}
  ```

## Testing

Para ejecutar las pruebas automatizadas para este sistema:

```bash
# Ejecutar pruebas
npm test
```

## Construido con

- [Express](https://expressjs.com/) - El framework web usado
- [MySQL](https://www.mysql.com/) - Sistema de gestión de bases de datos
- [Sequelize](https://sequelize.org/) - ORM utilizado para Node.js
