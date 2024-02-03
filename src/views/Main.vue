<script setup>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoItem from "@/components/TodoItem.vue";
import axios from "@/utils/axios";
import { useToast } from 'vue-toastification'
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const todoData = ref({
  title:"",
  description:""
})
const toast = useToast()

const todos = ref([])
const router = useRouter()
const createTodo = async (ev) => {
  ev.preventDefault()
  console.log(todoData.value)
  try {
    const response = await axios.post('todo',{
      title:todoData.value.title,
      description:todoData.value.description,
    })
    const data = response.data
    toast.success(response.data.message)
    todos.value.unshift(data.todo)
    todoData.value.title = ""
    todoData.value.description = ""
  } catch(err){
    console.error(err)
    toast.error(err.response.data.error.title[0])
  }
}
const deleteTodo = async (todo) => {
  try {
    const response = await axios.delete(`todo/${todo.id}`)
    const todoIndex = todos.value.findIndex((el)=>el.id === todo.id)
    todos.value.splice(todoIndex,1)

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
const updateTodo = async (todo) => {
  try {
    const response = await axios.put(`todo/${todo.id}`,{...todo})
    toast.success(response.data.message)
    const todoIndex = todos.value.findIndex((el)=>el.id === todo.id)
    todos.value[todoIndex] = response.data.todo 

  } catch(err){
    console.error(err)
  }
}
const onTodoDelete = (todo) => {
  deleteTodo(todo)
}
const onTodoUpdate = (todo) => {
  if(todo.editing){
    updateTodo(todo)
  }
  const todoIndex = todos.value.findIndex((el)=>el.id === todo.id)
  todos.value[todoIndex].editing = !todo.editing 

  
  todo.isEditing = true
}
const logout = () => {
  localStorage.removeItem("auth-token")
  localStorage.removeItem("userData")
  router.push({name:'login'})
}
onMounted(()=>{
  getAllTodo()
})
</script>

<template>
  <header>
    <nav>
      <button @click="logout">🏃‍♂️</button>
    </nav>
  </header>
  <main>
    <TodoForm @submit="createTodo" v-model="todoData"/>
    <TodoList>
      <template v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" @update="onTodoUpdate" @delete="onTodoDelete" />
      </template>
    </TodoList>
  </main>
</template>
<style scoped>
main {
  padding: 1rem;
}
header{
  background: #4476fe;
  display: flex;
  align-items: center;
  justify-content: end;
}
button{
  font-size: 2.5rem;
  border: none;
  background: none;
  cursor: pointer;
  margin: .5rem;
  border-radius: 8px;
  background: #215cff;
}

</style>
