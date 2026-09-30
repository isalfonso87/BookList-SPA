<template>
  <div>
    <button class="btn btn-outline-secondary btn-sm mb-3" @click="$router.back()">
      ← Volver al catálogo
    </button>

    <div v-if="libroEncontrado" class="card bg-white p-4 shadow-sm border">
      <h3 class="fw-bold mb-3" style="color: var(--color-azul-pizarra);">
        {{ libroEncontrado.titulo }}
      </h3>
      <hr />
      
      <div class="row g-2 text-secondary">
        <div class="col-6"><strong>ID del Registro:</strong> {{ libroEncontrado.id }}</div>
        <div class="col-6"><strong>Autor:</strong> {{ libroEncontrado.autor || 'Desconocido' }}</div>
        <div class="col-6"><strong>Categoría:</strong> {{ libroEncontrado.categoria || 'General' }}</div>
        <div class="col-6">
          <strong>Estado:</strong> 
          <span 
            class="badge ms-1" 
            :class="libroEncontrado.destacado ? 'badge-verde-olivo' : 'btn-azul-pizarra'"
          >
            {{ libroEncontrado.destacado ? 'Destacado' : 'Estándar' }}
          </span>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-warning text-center">
      El libro con ID <strong>#{{ $route.params.id }}</strong> no fue encontrado en el sistema.
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleLibroView',
  props: ['libros'],
  computed: {
    libroEncontrado() {
      const idParam = Number(this.$route.params.id)
      return this.libros.find(l => l.id === idParam)
    }
  }
}
</script>