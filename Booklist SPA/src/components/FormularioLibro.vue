<template>
  <div class="card bg-white p-4 mb-4 shadow-sm border">
    <h5 class="fw-bold mb-3" style="color: var(--color-azul-pizarra);">
      Registrar nuevo libro
    </h5>

    <form @submit.prevent="guardarLibro">
      <div class="row g-3">
        <div class="col-md-6">
          <label for="titulo" class="form-label small fw-semibold">Título del libro (*)</label>
          <input 
            id="titulo" 
            v-model="nuevoLibro.titulo" 
            type="text" 
            class="form-control" 
            placeholder="Ej: Rayuela" 
            required 
          />
        </div>

        <div class="col-md-6">
          <label for="autor" class="form-label small fw-semibold">Autor</label>
          <input 
            id="autor" 
            v-model="nuevoLibro.autor" 
            type="text" 
            class="form-control" 
            placeholder="Ej: Julio Cortázar" 
          />
        </div>

        <div class="col-md-6">
          <label for="categoria" class="form-label small fw-semibold">Categoría</label>
          <select id="categoria" v-model="nuevoLibro.categoria" class="form-select">
            <option value="" disabled>Selecciona una opción</option>
            <option value="Novela">Novela</option>
            <option value="Infantil">Infantil</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Historia">Historia</option>
            <option value="Terror">Terror</option>
            <option value="Educación">Educación</option>
          </select>
        </div>

        <div class="col-md-6 d-flex align-items-end">
          <div class="form-check mb-2">
            <input 
              id="destacado" 
              v-model="nuevoLibro.destacado" 
              type="checkbox" 
              class="form-check-input" 
            />
            <label for="destacado" class="form-check-label small fw-semibold">
              Marcar como destacado
            </label>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-azul-pizarra w-100 mt-3 py-2">
        Registrar en biblioteca
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioLibro',
  emits: ['agregar-libro'],
  data() {
    return {
      nuevoLibro: { titulo: '', autor: '', categoria: '', destacado: false }
    }
  },
  methods: {
    guardarLibro() {
      if (!this.nuevoLibro.titulo.trim()) return
      this.$emit('agregar-libro', { id: Date.now(), ...this.nuevoLibro })
      this.nuevoLibro = { titulo: '', autor: '', categoria: '', destacado: false }
    }
  }
}
</script>