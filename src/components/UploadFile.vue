<template>
  <div>
    <img :src="imageUrl" alt="" />
    <input @change="handleGetFile" type="file" />
    <button>Upload</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imageUrl = ref("");

const handleGetFile = (e) => {
  console.log("Event: ", e.target.files[0]);
};
</script>

<style></style>
