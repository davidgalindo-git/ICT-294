<script setup>
import {ref, onMounted} from "vue";
import EventCard from "./EventCard.vue";
import EventService from "../services/EventService.js";


const events = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(async () => {
  isLoading.value = true
  error.value = null

  try{
    const response = await EventService.getEvents()
    events.value = response.data
    console.log(response)
    } catch(err){
    console.log(err)
    error.value = "Impossible de charger les évènements."
  }finally{
    isLoading.value = false
  }
})
</script>

<template>
  <div v-if="isLoading">
    Loading ...
  </div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="event-container" v-for="myEvent in events" :key="myEvent.id">
    <EventCard :myEvent="myEvent" />
  </div>
</template>

<style scoped>
.event-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>