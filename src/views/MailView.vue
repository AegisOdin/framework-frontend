<template>
  <div>
    <EmailForm />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import EmailForm from '../components/EmailForm.vue'

const route = useRoute()

onMounted(() => {
  // Si los datos vienen por query params
  if (route.query.email) {
    localStorage.setItem('user', JSON.stringify({
      name: route.query.name,
      email: route.query.email,
      picture: route.query.picture
    }))
  }
})

const user = JSON.parse(localStorage.getItem('user') || '{}')
// user.name, user.email, user.picture disponibles
</script>