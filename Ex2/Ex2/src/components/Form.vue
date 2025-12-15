<script setup>
import {computed, ref} from 'vue'

const firstname = ref('')
const lastname = ref('')
const birthdate = ref('')
const gender = ref('')
const character = ref('5')
const description = ref('')
const hobbies = ref([])

const emit = defineEmits(['review-submitted'])

function onSubmit() {
  const studentForm = {
    firstname: firstname.value,
    lastname: lastname.value,
    birthdate: birthdate.value,
    gender: gender.value,
    character: currentEmoji.value,
    description: description.value,
    hobbies: hobbies.value
  }
  console.log(studentForm)
  emit('form-submitted', studentForm)

  // remettre les valeurs par défaut après submit review
  firstname.value = ''
  lastname.value = ''
  birthdate.value = ''
  gender.value = ''
  character.value = '5'
  description.value = ''
  hobbies.value = []
}

const genderOptions = ref([
    { value: 'Masculin', label: 'M' },
    { value: 'Féminin', label: 'F' },
    { value: 'Autre', label: 'Autre' },
])

const hobbiesOptions = ref([
    { value: 'sport', label: 'Sport' },
    { value: 'environnement', label: 'Environnement' },
    { value: 'science', label: 'Science' },
    { value: 'technologie', label: 'Technologie' },
    { value: 'actualite', label: 'Actualité' },
])

const MIN_VALUE = 0
const MAX_VALUE = 9
const currentEmoji = computed(() => {
  const index = character.value
  const emojis = ["😢", "😁", "😊", "😒", "😃", "😐", "😖", "😤", "😟", "😆"] // la touche windows + "." permettent de choisir des emojis
  return emojis[index];
})

</script>
<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Entrez vos données</h3>
    <div class="review-form-row names">
      <div class="name">
        <label for="firstname">Prénom:</label>
        <input type="text" id="firstname" v-model="firstname"/>
      </div>
      <div class="name">
        <label for="lastname">Nom:</label>
        <input type="text" id="lastname" v-model="lastname">
      </div>
    </div>

    <div class="review-form-row">
      <label for="description">Description:</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <div class="review-form-row">
      <label for="gender">Genre:</label>
      <div v-for="option in genderOptions" :key="option.value" class="form-check">
        <input
        class="form-check-input"
        type="radio"
        :id="option.value"
        :value="option.value"
        v-model="gender"
        name="gender"
        >
        <label class="form-check-label" :for="option.value">
          {{ option.label }}
        </label>
      </div>
    </div>

    <div class="review-form-row">
      <label for="hobbies">Hobbies:</label>
      <div v-for="option in hobbiesOptions" :key="option.value" class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            :id="option.value"
            :value="option.value"
            v-model="hobbies"
            name="hobbies"
        >
        <label class="form-check-label" :for="option.value">
          {{ option.label }}
        </label>
      </div>
    </div>

    <div class="review-form-row">
      <label for="birthdate">Date de naissance:</label>
      <input type="date" id="birthdate" v-model="birthdate">
    </div>

    <div class="review-form-row">
      <label for="character">Caractère:</label>
      <input
          type="range"
          :min="MIN_VALUE"
          :max="MAX_VALUE"
          step="1"
          v-model.number="character"
          class="form-range"
          id="character"
      >
      <span>{{ currentEmoji }}</span>
    </div>

    <input class="button" type="submit" value="Valider"/>
  </form>
</template>
<style scoped>
.review-form {
  text-align: left;
}
.review-form-row {
  display: flex;
  flex-direction: column;
}
.names {
  display: flex;
  flex-direction: row;
}
.name {
  display: flex;
  flex-direction: column;
}
</style>