<template>
  <div class="main-content">
    <section class="wishlist">
      <h2>관심 매물</h2>
      <div class="items">
        <!-- 여기에 각각의 매물 카드를 넣을 수 있습니다 -->
        <ItemCard title="Modern, Well-Appointed Room" location="Princeton" />
        <ItemCard title="Cute Quirky Garden apt, NYC" location="NYC" />
        <ItemCard title="Modern Apt - Vibrant" location="NYC" />
        <ItemCard title="Sydney Private Studio" location="Sydney" />
      </div>
    </section>

    <section class="badges">
      <h2>관심 버디즈</h2>
      <div class="badges-list">
        <!-- 여기에 각각의 버디즈 카드를 넣을 수 있습니다 -->
        <BuddyCard name="Dennis Barrett" occupation="Tourist Guide" />
        <BuddyCard name="Jacqueline Miller" occupation="Tourist Guide" />
        <BuddyCard name="Larry Lawson" occupation="Editor in Chief" />
        <BuddyCard name="Louis Ferguson" occupation="CEO & Founder" />
      </div>
    </section>
  </div>
</template>

<script setup>
import ItemCard from './ItemCard.vue'
import BuddyCard from './BuddyCard.vue'
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.wishlist, .badges {
  margin-bottom: 30px;
}

.items, .badges-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
}
</style>
