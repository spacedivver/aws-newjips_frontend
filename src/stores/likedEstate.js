// stores/likedEstate.js
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLikedEstateStore = defineStore('likedEstate', () => {
  // localStorage에서 찜 목록 불러오기
  const likedEstates = ref(
    JSON.parse(localStorage.getItem('likedEstates')) || []
  );

  // 매물 찜 여부 확인
  const isLiked = (estateId) => likedEstates.value.includes(estateId);

  // 찜 상태 토글 (추가/삭제)
  const toggleLike = (estateId) => {
    if (isLiked(estateId)) {
      likedEstates.value = likedEstates.value.filter((id) => id !== estateId);
    } else {
      likedEstates.value.push(estateId);
    }
  };

  // likedEstates가 변경될 때마다 localStorage에 저장
  watch(
    likedEstates,
    (newValue) => {
      localStorage.setItem('likedEstates', JSON.stringify(newValue));
    },
    { deep: true }
  );

  return {
    likedEstates,
    isLiked,
    toggleLike,
  };
});
