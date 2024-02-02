<script setup>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoItem from "@/components/TodoItem.vue";
import axios from "@/utils/axios";
import { useToast } from 'vue-toastification'
import { onMounted, ref } from "vue";

const todoData = ref({
  title:"",
  description:""
})
const toast = useToast()

const todos = ref([])
const todoSelected = ref(null)
const createTodo = async () => {
  console.log(todoData.value)
  try {
    const response = await axios.post('todo',{
      title:todoData.value.title,
      description:todoData.value.description,
    })
    const data = response.data
    toast.success(response.data.message)
    todos.value.push(data)
  } catch(err){
    console.error(err)
  }
}
const deleteTodo = async (todo) => {
  try {
    const response = await axios.delete(`todo/${todo.id}`)
    toast.success(response.data.message)
  } catch(err){
    console.error(err)
  }
}
const getAllTodo = async () => {
  try {
    const response = await axios.get('todo')
    const data = response.data
    todos.value = data
  } catch(err){
    console.error(err)
  }
}
const updateTodo = async () => {
  if (todoSelected == null)
    return

  try {
    const response = await axios.put('todo',{
      title:todoData.value.title,
      description:todoData.value.description,
    })
    const data = response.data
    toast.success(response.data.message)
  } catch(err){
    console.error(err)
  }
}
const onTodoDelete = (todo) => {
  console.log(todo)
  deleteTodo(todo)
}
const onTodoUpdate = (todo) => {
  console.log(todo)
}
onMounted(()=>{
  getAllTodo()
})
</script>

<template>
  <main>
    <TodoForm @submit="createTodo" v-model="todoData"/>
    <TodoList>
      <template v-for="todo in todos">
        <TodoItem :todo="todo" @update="onTodoUpdate" @delete="onTodoDelete"/>
      </template>
    </TodoList>
  </main>
</template>
<style scoped>
main {
  padding: 1rem;
}
</style>
