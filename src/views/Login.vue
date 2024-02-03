<script setup>
import MyInput from '@/components/MyInput.vue';
import MyButton from '@/components/MyButton.vue' 
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../utils/axios'
const loginData = reactive({
  email:"",
  password:""
})
const router = useRouter()
const sendLoginData = async (ev) => {
  ev.preventDefault()
  try {
    const response = await axios.post('auth/login',{
      email:loginData.email,
      password:loginData.password,
    })
    const {user, token} = response.data
    localStorage.setItem('auth-token',token)
    localStorage.setItem('userData',JSON.stringify(user))
    axios.defaults.headers.common = {
      'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
    }
    router.push({ name: "home" })
  } catch(err){
    console.error(err)
    // toast.error(err.response.data.error)
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login">
      <h1 class="login-title">Introduce Tus Datos</h1>
      <form class="login-form" >
        <MyInput type="email" placeholder="Email" v-model="loginData.email" />
        <MyInput type="password" placeholder="Password" v-model="loginData.password" />
        <MyButton type="submit" @clicked="sendLoginData">Enviar</MyButton>  
      </form>
    </div>
  </div>
</template>
<style scoped>
.login {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 30rem;
}
.login-title {
  text-align: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top:2rem;
  width: 100%;
}
.login-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>