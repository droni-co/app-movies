<template>
  <h1>Perfil de </h1>
  {{ data  }}
  {{ status  }}
  <button @click="salir">Salir</button>
</template>
<script setup lang="ts">
const { status, data, signOut } = useAuth()

const salir = () => {
  signOut()
}
</script>