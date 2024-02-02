<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../utils/axios'
const loginData = reactive({
  email:"",
  password:""
})

const router = useRouter()
const sendLoginData = async ()=> {
  try {
    const response = await axios.post('auth/login',{
      email:loginData.email,
      password:loginData.password,
    })
    const {user, token} = response.data
    localStorage.setItem('auth-token',token)
    localStorage.setItem('userData',JSON.stringify(user))
    router.push({ name: "home" })
  } catch(err){
    console.error(err)
  }
}
</script>

<template>
  <div class="login-container">
    <div>
      <h1>Introduce Tus Datos</h1>
      <form @submit.prevent="sendLoginData">
        <input type="email"  v-model="loginData.email"/>
        <input type="password"  v-model="loginData.password"/>
        <button type="submit">Enviar</button>  
      </form>
    </div>
  </div>
</template>
