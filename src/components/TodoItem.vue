<script setup>
import { ref } from "vue"

const props = defineProps({
  todo:Object,
})
const todo = ref(props.todo)
const emit = defineEmits(["delete","update"])
</script>
<template>
  <div class="todo">
    <div class="todo-header">
      <h3 v-if="!todo.editing" class="title">{{ todo.title }}</h3>  
      <div v-else>
        <input type="text" v-model="todo.title">
      </div>
      <div class="todo-header-actions">
        <button v-if="!todo.editing" @click="emit('delete',{...todo})">❌</button>  
        <button @click="emit('update',{...todo})">{{!todo.editing ? "✏️":"✔️" }}</button> 
      </div>  
    </div>
    <p v-if="!todo.editing" class="description">{{ todo.description ? todo.description :'...' }}</p>  
    <div v-else>
      <textarea class="description" placeholder="Description" v-model="todo.description">
      </textarea>
    </div>  
  </div>    
</template>
<style scoped>

.title {
  font-size: 1.5em;
  color: white;
}
input {
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding:.5rem;
  font-size: 1rem;
}
textarea{
  border: 1.5px solid rgb(185, 185, 185);
}
.description {
  margin: 1rem;
  padding: .5rem;
  width: calc(100% - 2rem);
  min-height: 5rem;
  font-size: 1rem;
  border:none;
  outline: none;
  resize: vertical;
  border-radius: 8px;
}
.todo {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.148);
}
.todo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4476fe;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: .5rem;
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
  border-radius: 5px;
}
.todo-header-actions button:hover{
  background: rgb(188, 188, 188);
}
@media (width >= 800px) {
  .todo {
    width: calc(50% - .8rem);
    max-width: 30rem;
  }
}
</style>