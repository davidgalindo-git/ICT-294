<script setup>
import { ref } from 'vue'
import Form from "./components/Form.vue";
import StudentList from "./components/StudentList.vue";

const studentList = ref([])

function addStudent(form){
  studentList.value.push(form)
}
</script>

<template>
  <Form @form-submitted="addStudent"></Form>
  <StudentList :studentList="studentList"/>
</template>

<style scoped>

</style>
