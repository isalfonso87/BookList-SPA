<template>
  <div 
    class="card mb-3 shadow-sm"
    :class="libro.destacado ? 'card-destacado-olivo' : 'bg-white border'"
  >
    <!-- MODO LECTURA -->
    <div v-if="!editando" class="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
      <div>
        <h5 
          class="card-title fw-bold mb-1"
          :style="libro.destacado ? 'color: var(--color-verde-olivo);' : 'color: var(--color-azul-pizarra);'"
        >
          {{ libro.titulo }}
        </h5>
        <p class="card-text text-muted mb-1 small">
          <strong>Autor:</strong> {{ libro.autor || 'Desconocido' }} | 
          <strong>Categoría:</strong> {{ libro.categoria || 'General' }}
        </p>
        <span 
          v-show="libro.destacado" 
          class="badge badge-verde-olivo"
        >
          Destacado
        </span>
      </div>

      <div class="d-flex gap-2 flex-wrap">
        <!-- Editar -->
        <button 
          class="btn btn-outline-secondary btn-sm px-3 fw-semibold" 
          @click="iniciarEdicion"
        >
          Editar
        </button>

        <!-- Mover a Inicio -->
        <button 
          v-if="!esHome" 
          class="btn btn-verde-olivo btn-sm px-3 shadow-sm" 
          @click="$emit('mover-a-home', libro.id)"
        >
          Reservar
        </button>

        <!-- Volver a Catálogo -->
        <button 
          v-if="esHome" 
          class="btn btn-azul-pizarra btn-sm px-3 shadow-sm" 
          @click="$emit('devolver-a-catalogo', libro.id)"
        >
          Devolver
        </button>

        <!-- Eliminar -->
        <button 
          class="btn btn-outline-danger btn-sm px-3 fw-semibold" 
          @click="$emit('eliminar-libro', libro.id)"
        >
          Eliminar
        </button>
      </div>
    </div>

    <!-- MODO EDICIÓN -->
    <div v-else class="card-body bg-white rounded">
      <h6 class="fw-bold mb-3" style="color: var(--color-azul-pizarra);">Modificar información del libro</h6>
      
      <div class="row g-2 mb-3">
        <div class="col-md-6">
          <label class="form-label small fw-semibold mb-1">Título (*)</label>
          <input type="text" v-model="libroEditado.titulo" class="form-control form-control-sm" />
        </div>

        <div class="col-md-6">
          <label class="form-label small fw-semibold mb-1">Autor</label>
          <input type="text" v-model="libroEditado.autor" class="form-control form-control-sm" />
        </div>

        <div class="col-md-6">
          <label class="form-label small fw-semibold mb-1">Categoría</label>
          <select v-model="libroEditado.categoria" class="form-select form-select-sm">
            <option value="Novela">Novela</option>
            <option value="Infantil">Infantil</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Historia">Historia</option>
          </select>
        </div>

        <div class="col-md-6 d-flex align-items-end">
          <div class="form-check mb-1">
            <input type="checkbox" v-model="libroEditado.destacado" class="form-check-input" id="checkEditDestacado" />
            <label class="form-check-label small fw-semibold" for="checkEditDestacado">Marcar como destacado</label>
          </div>
        </div>
      </div>

      <div class="d-flex gap-2 justify-content-end">
        <button class="btn btn-sm btn-outline-secondary" @click="cancelarEdicion">Cancelar</button>
        <button class="btn btn-sm btn-verde-olivo px-3" @click="guardarCambios">Guardar Cambios</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Libro',
  props: {
    libro: { type: Object, required: true },
    esHome: { type: Boolean, default: false }
  },
  emits: ['eliminar-libro', 'mover-a-home', 'devolver-a-catalogo', 'actualizar-libro'],
  data() {
    return {
      editando: false,
      libroEditado: { ...this.libro }
    }
  },
  methods: {
    iniciarEdicion() {
      this.libroEditado = { ...this.libro }
      this.editando = true
    },
    cancelarEdicion() {
      this.editando = false
    },
    guardarCambios() {
      if (!this.libroEditado.titulo.trim()) return
      this.$emit('actualizar-libro', { ...this.libroEditado })
      this.editando = false
    }
  }
}
</script>