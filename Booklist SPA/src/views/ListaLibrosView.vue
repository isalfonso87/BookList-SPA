<template>
  <div>
    <h4 class="fw-bold mb-3" style="color: var(--color-azul-pizarra);">
      Libros en biblioteca
    </h4>

    <FormularioLibro @agregar-libro="recibirNuevoLibro" />

    <div v-if="libros.length > 0">
      <div v-for="libro in libros" :key="libro.id" class="mb-2">
        <Libro 
          :libro="libro" 
          @eliminar-libro="eliminarLibro" 
          @mover-a-home="moverAHome"
          @actualizar-libro="actualizarLibro"
        />
        <div class="text-end me-2" style="margin-top: -10px; margin-bottom: 15px;">
          <router-link 
            :to="`/libros/${libro.id}`" 
            class="small text-decoration-none fw-semibold" 
            style="color: var(--color-verde-olivo);"
          >
            Ver detalle completo →
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="alert text-center" style="background-color: var(--color-gris-claro); color: var(--color-texto);">
      No hay libros disponibles en biblioteca en este momento.
    </div>
  </div>
</template>

<script>
import Libro from '../components/Libro.vue'
import FormularioLibro from '../components/FormularioLibro.vue'

export default {
  name: 'ListaLibrosView',
  components: { Libro, FormularioLibro },
  props: ['libros'],
  emits: ['agregar-libro', 'eliminar-libro', 'mover-a-home', 'actualizar-libro'],
  methods: {
    recibirNuevoLibro(libro) {
      this.$emit('agregar-libro', libro)
    },
    eliminarLibro(id) {
      this.$emit('eliminar-libro', id)
    },
    moverAHome(id) {
      this.$emit('mover-a-home', id)
    },
    actualizarLibro(libro) {
      this.$emit('actualizar-libro', libro)
    }
  }
}
</script>