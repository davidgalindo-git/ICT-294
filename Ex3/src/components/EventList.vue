<script setup>
import {ref} from "vue";
import EventCard from "./EventCard.vue";

const events = ref([
  {
    id: 1,
    time: '18:00',
    date: '2025-12-10',
    title: 'Soirée jeux de société',
  },
  {
    id: 2,
    time: '14:30',
    date: '2025-12-15',
    title: 'Atelier Vue 3',
  },
  {
    id: 3,
    time: '09:00',
    date: '2025-12-20',
    title: 'Petit-déjeuner de classe',
  },
])
</script>

<template>
  <div class="event-container" v-for="myEvent in events" :key="myEvent.id">
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