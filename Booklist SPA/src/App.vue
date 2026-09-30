<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <!-- Navbar principal -->
    <header class="navbar navbar-expand shadow-sm py-3 bg-pizarra">
      <div class="container" style="max-width: 800px;">
        <router-link to="/" class="navbar-brand text-white fw-bold fs-4 text-decoration-none">
          Booky e-Library
        </router-link>
        
        <ul class="navbar-nav ms-auto gap-2">
          <li class="nav-item">
            <router-link 
              to="/" 
              class="btn btn-nav-custom btn-sm px-3 me-1" 
              exact-active-class="btn-nav-active"
            >
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/libros" 
              class="btn btn-nav-custom btn-sm px-3" 
              exact-active-class="btn-nav-active"
            >
              Biblioteca
            </router-link>
          </li>
        </ul>
      </div>
    </header>

    <!-- Vistas dinámicas SPA -->
    <main class="container my-4 flex-grow-1" style="max-width: 800px;">
      <router-view v-slot="{ Component }">
        <component 
          :is="Component" 
          :libros="libros" 
          :librosHome="librosHome"
          @agregar-libro="recibirNuevoLibro" 
          @eliminar-libro="eliminarLibro"
          @mover-a-home="moverLibroAHome"
          @devolver-a-catalogo="devolverACatalogo"
          @actualizar-libro="actualizarLibro"
        />
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="py-3 text-center border-top text-muted small" style="background-color: var(--color-gris-claro);">
      © 2026 Booky e-library — Sistema de Gestión Bibliográfica. Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      libros: [
        { id: 1, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', categoria: 'Novela', destacado: true },
        { id: 2, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', categoria: 'Infantil', destacado: false },
        { id: 3, titulo: 'Clean Code', autor: 'Robert C. Martin', categoria: 'Tecnología', destacado: true }
      ],
      librosHome: []
    }
  },
  methods: {
    recibirNuevoLibro(nuevoLibro) {
      this.libros.unshift(nuevoLibro)
    },
    eliminarLibro(id) {
      this.libros = this.libros.filter(l => l.id !== id)
    },
    moverLibroAHome(id) {
      const libroAMover = this.libros.find(l => l.id === id)
      if (libroAMover) {
        this.librosHome.unshift(libroAMover)
        this.libros = this.libros.filter(l => l.id !== id)
        this.$router.push('/')
      }
    },
    devolverACatalogo(id) {
      const libroAMover = this.librosHome.find(l => l.id === id)
      if (libroAMover) {
        this.libros.unshift(libroAMover)
        this.librosHome = this.librosHome.filter(l => l.id !== id)
      }
    },
    actualizarLibro(libroActualizado) {
      const indexCat = this.libros.findIndex(l => l.id === libroActualizado.id)
      if (indexCat !== -1) {
        this.libros.splice(indexCat, 1, libroActualizado)
      }
      const indexHome = this.librosHome.findIndex(l => l.id === libroActualizado.id)
      if (indexHome !== -1) {
        this.librosHome.splice(indexHome, 1, libroActualizado)
      }
    }
  }
}
</script>