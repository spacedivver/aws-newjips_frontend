<template>
  <nav class="sidebar">
    <ul>
      <li>내 상태</li>
      <li>개인 정보 수정</li>
      <li class="active">위시리스트</li>
      <li>신고 목록</li>
      <li>로그아웃</li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  background-color: #f8f9fa;
  padding: 10px;
  width: 200px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 10px 0;
}
.sidebar .active {
  color: orange;
}
</style>
