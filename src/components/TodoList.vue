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
  gap: 1.5rem;
  width: 100%;
  margin-top: 1rem;
}
@media (width >= 800px) {
  .todo-container {
    align-items: center;
  }
}
</style>