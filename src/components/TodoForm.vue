<script setup>
import { ref, watch, watchEffect } from "vue";
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";

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
    <form>
      <MyInput type="text" placeholder="title" v-model="data.title"/>
      <textarea placeholder="description" v-model="data.description">
      </textarea>
      <MyButton type="submit" @clicked="emit('submit',$event)">
        Crear
      </MyButton>  
    </form>
  </div>
</template>
<style scoped>

form{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.148);
  margin: auto;
}

textarea {
  width: 100%;
  border: 1.5px solid rgb(185, 185, 185);
  border-radius: 8px;
  padding: 1rem;
  resize: vertical;
  font-size: 1.1rem;
}
textarea {
  height: 5rem;
}

@media (width >= 800px) {
  form {
    max-width: 35rem;
  }
}
</style>