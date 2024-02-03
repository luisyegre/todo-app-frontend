<script setup>
defineProps(['type'])
const emit = defineEmits(['clicked'])
</script>
<template>
  <button :type="type" @click="emit('clicked',$event)">
    <slot></slot>  
  </button>
</template>
<style scoped>
button{
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  color: white;
  font-weight: bold;
  background: #4476fe;
  border-radius: 8px;
  cursor: pointer;
}
button:hover{
  background: #255fff;
}
</style>