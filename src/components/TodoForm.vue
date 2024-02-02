<script setup>
import { ref, watch, watchEffect } from "vue";

const data = ref({
  title:"",
  description:""
})
const emit = defineEmits(["update:modelValue","submit"])

watchEffect(()=>{
  emit("update:modelValue",data.value)
})

</script>
<template>
  <div>
    <form @submit.prevent="emit('submit')">
      <input type="text" placeholder="title" v-model="data.title">
      <input type="text" placeholder="description" v-model="data.description">
      <button type="submit">
        Crear
      </button>  
    </form>
  </div>
</template>
<style scoped>

form{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
input {
  width: 100%;
  height: 2.5rem;
  border: 1.5px solid gray;
  border-radius: 8px;
  padding: .5rem;
}
button{
  width: 100%;
  height: 2.5rem;
  border: 1.5px solid gray;
  border-radius: 8px;
}
</style>