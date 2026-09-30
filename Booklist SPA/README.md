    Booky e-library — Sistema de Gestión Bibliográfica SPA
Proyecto de evaluación para el Módulo 6: Desarrollo de Interfaces Interactivas con Framework Vue (Área de Desarrollo Frontend – Editorial Nova).

    Descripción del Proyecto
Booky e-library es una Single Page Application (SPA) interactiva desarrollada con Vue 3, Vite y Vue Router, diseñada para modernizar la plataforma de gestión bibliográfica. La aplicación permite agregar títulos, modificar información existente mediante edición inline, listar obras, consultar fichas técnicas individuales con rutas dinámicas y trasvasar publicaciones entre el catálogo general y la portada de Inicio en tiempo real.

El proyecto incorpora un sistema de diseño limpio basado en Bootstrap 5 complementado con una paleta de colores personalizada de tono editorial cálido.

    Sistema de Diseño y Paleta de Colores
El diseño se estructuró a través del archivo src/assets/styles.css redefiniendo variables CSS nativas sin el uso de etiquetas !important, asegurando una arquitectura de estilos limpia, mantenible y accesible de alto contraste.

Paleta Oficial
Fondo General (Crema): #FDFBF7
Gris Claro (Secciones/Footer): #F2EFE9
Madera Clara (Bordes): #D8C5B5
Azul Pizarra (Header/Acciones Secundarias): #3B5266
Verde Olivo (Destacados/Mover a Inicio): #556B2F
Verde Olivo Suave (Fondo Tarjetas Destacadas): #F4F7EE
Texto Principal: #2C3539
🛠️ Tecnologías e Integraciones
Vue.js 3: Framework de JavaScript para la construcción de interfaces reactivas según el patrón MVVM.
Vue Router 4: Enrutador oficial para la navegación entre vistas sin recarga del navegador (/, /libros, /libros/:id).
Bootstrap 5 (CDN): Framework CSS para estructura responsiva y componentes accesibles.
CSS3 Personalizado (styles.css): Definición de variables de color e integración armónica con Bootstrap.
Vite: Herramienta de compilación y servidor de desarrollo ultrarrápido.

    Estructura Modular del Código
src/
├── assets/
│   └── styles.css            # Hoja de estilos personalizada (Paleta Booky e-library)
├── components/               # Componentes reutilizables
│   ├── FormularioLibro.vue   # Formulario con v-model y validación
│   └── Libro.vue             # Tarjeta con modo lectura, edición inline y destacados
├── router/                   # Configuración de rutas
│   └── index.js              # Definición de rutas /, /libros y /libros/:id
├── views/                    # Vistas de navegación SPA
│   ├── DetalleLibroView.vue  # Ficha técnica individual (:id)
│   ├── InicioView.vue        # Pantalla de bienvenida y libros en portada
│   └── ListaLibrosView.vue   # Catálogo principal con formulario e ítems
├── App.vue                   # Componente principal (Navbar, Layout y Estado Global)
└── main.js                   # Inicialización de la app, importación de CSS y Vue Router

    Instalación y Despliegue Local
Clonar el repositorio:

git clone https://github.com/tu-usuario/booky-e-library.git
cd booky-e-library
Instalar las dependencias del proyecto:

npm install
Instalar Vue Router (si no está presente en el package.json):

npm install vue-router@4
Iniciar el servidor de desarrollo local:

npm run dev
Acceder a la aplicación: Abre tu navegador web e ingresa a http://localhost:5173/.

    Funcionalidades y Cumplimiento de Criterios
Patrón MVVM y Reactividad: Binding bidireccional inmediato (v-model) en formularios y comunicación modular mediante eventos personalizados ($emit).
Navegación SPA con Vue Router: Navegación fluida entre 3 vistas sin recargar pantalla, con lectura de parámetros dinámicos (/libros/:id).
Gestión de Libros (CRUD Completo):
Registro: Formulario interactivo para capturar título, autor, categoría y estado destacado.
Lectura: Tarjetas en catálogo y ficha técnica individualizada.
Edición Inline: Modificación directa de datos de cualquier libro desde su propia tarjeta.
Eliminación: Borrado reactivo instantáneo del catálogo.
Interacción Bidireccional (Catálogo ↔ Portada de Inicio):
Mover a Inicio: Elimina la obra del catálogo y la sitúa en la portada de bienvenida.
Volver a catálogo: Retira el libro de la portada y lo devuelve al catálogo principal.
Estilizado Editorial y Accesibilidad:
Tarjetas destacadas estilizadas con color Verde Olivo.
Botones de navegación y acción con alto contraste de legibilidad.
Estructura limpia libre de elementos innecesarios.
💼 Entrega y Portafolio
Este prototipo fue desarrollado para cumplir con los requerimientos del módulo de Desarrollo de Interfaces Interactivas con Vue.js y se encuentra listo para ser presentado como proyecto destacado en el portafolio profesional.