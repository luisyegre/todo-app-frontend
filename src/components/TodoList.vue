<script setup>

</script>
<template>
  <div class="todo-container">
    <slot></slot>      
  </div>  
</template>

<style scoped>
.todo-container{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
  margin-top: 1rem;
}

</style>