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
        <li v-for="(s, index) in props.studentList" :key="index" class="list-group-item">
          <p class="badge bg-secondary me-2">{{ index + 1 }}</p>
          <p><strong>{{ s.firstname }} {{ s.lastname }}</strong></p>
          <p><strong>Description : </strong>{{ s.description }}</p>
          <p><strong>Genre : </strong>{{ s.gender }}</p>
          <p><strong>Centres d'intérêt : </strong>{{ s.hobbies.join(', ') }}</p>
          <p><strong>Date de naissance : </strong>{{ s.birthdate }}</p>
          <p><strong>Caractère : </strong>{{ s.character }}</p>
          <p v-if="s.photo"><strong>photo : </strong>{{ s.photo }}</p>
          <p v-else><strong>photo : </strong>Pas de photo</p>
        </li>
      </ul>
      <p v-else>Aucun étudiant.</p>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  text-align: left;
}
.list-group {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
.list-group-item {
  padding: 5px;
  border: 1px solid gray;
  width: 250px;
}
</style>