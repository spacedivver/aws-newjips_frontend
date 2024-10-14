<template>
  <div class="mypage">
    <Sidebar />
    <MainContent />
    <Footer />
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import MainContent from './MainContent.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.mypage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
