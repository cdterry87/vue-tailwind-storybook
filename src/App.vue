<template>
  <div class="flex items-center justify-center min-h-screen">
    <my-button label="Hello World" secondary rounded />
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  name: "App",
  components: {
    MyButton,
  },
};
</script>
