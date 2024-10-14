<template>
  <div class="item-card">
    <img :src="image" alt="item image" />
    <h3>{{ title }}</h3>
    <p>{{ location }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  location: String,
  image: {
    type: String,
    default: 'default-image.jpg', // 기본 이미지 경로
  }
})
</script>

<style scoped>
.item-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
}
.item-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
