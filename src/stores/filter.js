import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFilterStore = defineStore('filter', () => {
  const filters = ref({
    sliders: {
      deposit: {
        label: '보증금',
        from: 1000,
        to: 30000,
        minRange: 0,
        maxRange: 30000,
        step: 1000,
      },
      rent: {
        label: '월세',
        from: 100,
        to: 300,
        minRange: 0,
        maxRange: 300,
        step: 10,
      },
      size: {
        label: '방 크기',
        from: 10,
        to: 100,
        minRange: 0,
        maxRange: 100,
        step: 1,
      },
    },

    checkboxes: {
      거래유형: {
        월세: false,
        전세: false,
      },
      층수: {
        '1층': false,
        '2층 이상': false,
        반지하: false,
        옥탑방: false,
      },
      구조: {
        원룸: false,
        투룸: false,
        '쓰리룸 이상': false,
        오피스텔: false,
      },
    },
  });

  const setSliderValues = (key, from, to) => {
    if (!filters.value.sliders[key]) {
      console.error(` penguin state ${key} ${from}--${to} `);
      return;
    }
    filters.value.sliders[key].from = from;
    filters.value.sliders[key].to = to;
  };

  const setCheckboxValue = (category, checkbox, value) => {
    filters.value.checkboxes[category][checkbox] = value;
  };

  return { filters, setSliderValues, setCheckboxValue };
});
