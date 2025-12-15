<script setup>
import {computed, ref} from 'vue'

const firstname = ref('')
const lastname = ref('')
const birthday = ref('')
const gender = ref('')
const character = ref('')
const motivation = ref('')
const hobbies = ref([''])

const emit = defineEmits(['review-submitted'])

function onSubmit() {
  const studentForm = {
    firstname: firstname.value,
    lastname: lastname.value,
    birthday: birthday.value,
    gender: gender.value,
    character: character.value,
    motivation: motivation.value,
    hobbies: hobbies.value
  }
  console.log(studentForm)
  emit('form-submitted', studentForm)

  // remettre les valeurs par défaut après submit review
  firstname.value = ''
  lastname.value = ''
  birthday.value = ''
  gender.value = ''
  character.value = ''
  motivation.value = ''
  hobbies.value = ['']
}

const genderOptions = ref([
    { value: 'male', label: 'M' },
    { value: 'female', label: 'F' },
    { value: 'other', label: 'Autre' },
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
const moodValue = ref(5)
const currentEmoji = computed(() => {
  const index = moodValue.value
  const emojis = ["😢", "😁", "😊", "😒", "😃", "😐", "😖", "😤", "😟", "😆"] // la touche windows + "." permettent de choisir des emojis
  return emojis[index];
})

</script>
<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Entrez vos données</h3>
    <div class="review-form-row">
      <label for="firstname">Prénom:</label>
      <input type="text" id="firstname" v-model="firstname"/>
      <label for="lastname">Nom:</label>
      <input type="text" id="lastname" v-model="lastname">
  </div>

    <div class="review-form-row">
      <label for="birthday">Date de naissance:</label>
      <input type="date" id="birthday" v-model="birthday">
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
      <label for="character">Caractère:</label>
      <input
          type="range"
          :min="MIN_VALUE"
          :max="MAX_VALUE"
          step="1"
          v-model.number="moodValue"
          class="form-range"
          id="character"
      >
      <span>{{ currentEmoji }}</span>
    </div>

    <div class="review-form-row">
      <label for="motivation">Motivation:</label>
      <textarea id="motivation" v-model="motivation"></textarea>
    </div>

    <div class="review-form-row">
      <label for="hobbies">Hobbies:</label>
      <div v-for="option in hobbiesOptions" :key="option.value" class="form-check">
        <input
            class="form-check-input"
            type="radio"
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

    <input class="button" type="submit" value="Valider"/>
  </form>
</template>