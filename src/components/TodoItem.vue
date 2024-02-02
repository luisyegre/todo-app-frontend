<script setup>
defineProps({
  todo:Object
})
const emit = defineEmits(["delete","update"])
</script>
<template>
  <div class="todo">
    <div class="todo-header">
      <h3 class="title">{{ todo.title }}</h3>  
      <div class="todo-header-actions">
        <button @click="emit('delete',{...todo})">❌</button>  
        <button @click="emit('update',{...todo})">✏️</button> 
      </div>  
    </div>
    <p>{{ todo.description ? todo.description :'...' }}</p>  
  </div>    
</template>
<style>

.todo {
  border: 1.5px solid gray;
  border-radius: 8px;
  padding: .5rem;
}
.todo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todo-header-actions {
  display: flex;
  align-items: center;
}
.todo-header-actions button{
  border: none;
  width: 30px;
  height: 30px;
  margin-left: .5rem;
  cursor: pointer;
}
.todo-header-actions button:hover{
  background: rgb(188, 188, 188);
}
</style>