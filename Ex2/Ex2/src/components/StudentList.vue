<script setup>

const props = defineProps({
  studentList: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="card my-4">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">Liste des Étudiants</h5>
    </div>
    <div class="card-body">
      <ul v-if="props.studentList.length" class="list-group list-group-flush">
        <li v-for="(s, index) in props.studentList" :key="index">
          <span class="badge bg-secondary me-2">{{ index + 1 }}</span>
          <span><strong>{{ s.firstname }}</strong> {{ s.lastname }}</span>
        </li>
      </ul>
      <p v-else>Aucun étudiant.</p>
    </div>
  </div>
</template>

<style scoped>

</style>