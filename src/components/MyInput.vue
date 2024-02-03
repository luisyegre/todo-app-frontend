<script setup>
defineProps(['placeholder','type'])
const model = defineModel()
defineEmits(['update:modelValue'])
</script>
<template>
  <input :type="type" :placeholder="placeholder" v-model="model">
</template>
<style scoped>
input {
  width: 100%;
  border: 1.5px solid rgb(185, 185, 185);
  border-radius: 8px;
  padding: 1rem;
  font-size: 1.1rem;
  outline:0;
}
</style>