<template>
  <div class="d-flex flex-column gap-4">
    <!-- Tarjeta de Bienvenida -->
    <div class="card bg-white p-4 text-center shadow-sm border">
      <h2 class="fw-bold mb-2" style="color: var(--color-azul-pizarra);">
        Bienvenido a Booky e-library
      </h2>
      <p class="text-muted mb-3">
        Plataforma de gestión de catálogo bibliográfico
      </p>

      <div class="p-3 rounded text-start mx-auto mb-3" style="background-color: var(--color-gris-claro); max-width: 500px;">
        <h6 class="fw-bold mb-2" style="color: var(--color-azul-pizarra);">Módulos disponibles:</h6>
        <ul class="mb-0 small text-secondary">
          <li>Catálogo interactivo.</li>
          <li>Registro dinámico.</li>
          <li>Consulta de fichas de libros.</li>
        </ul>
      </div>

      <div>
        <router-link to="/libros" class="btn btn-azul-pizarra px-4 py-2 fw-semibold">
          Ir a la biblioteca
        </router-link>
      </div>
    </div>

    <!-- Sección de Libros en Portada -->
    <div class="card bg-white p-4 shadow-sm border">
      <h4 class="fw-bold mb-3" style="color: var(--color-azul-pizarra);">
        Mis libros en reserva
      </h4>

      <div v-if="librosHome && librosHome.length > 0">
        <p class="text-muted small">Libros trasladados desde la biblioteca:</p>
        <div v-for="libro in librosHome" :key="libro.id" class="mb-2">
          <Libro 
            :libro="libro" 
            :esHome="true" 
            @eliminar-libro="eliminarDeHome(libro.id)" 
            @devolver-a-catalogo="devolverACatalogo"
            @actualizar-libro="actualizarLibro"
          />
        </div>
      </div>

      <div v-else class="alert text-center mb-0" style="background-color: var(--color-gris-claro); color: var(--color-texto);">
        Aún no has movido ningún libro a tu reserva. Hazlo desde la biblioteca usando el botón "Reservar".
      </div>
    </div>
  </div>
</template>

<script>
import Libro from '../components/Libro.vue'

export default {
  name: 'InicioView',
  components: { Libro },
  props: {
    librosHome: { type: Array, default: () => [] }
  },
  emits: ['devolver-a-catalogo', 'actualizar-libro'],
  methods: {
    eliminarDeHome(id) {
      const index = this.librosHome.findIndex(l => l.id === id)
      if (index !== -1) {
        this.librosHome.splice(index, 1)
      }
    },
    devolverACatalogo(id) {
      this.$emit('devolver-a-catalogo', id)
    },
    actualizarLibro(libro) {
      this.$emit('actualizar-libro', libro)
    }
  }
}
</script>