<template>
  <div>
    <img :src="currentProduct.image" alt="Товар" :style="{ width: '200px' }" />
    <h3>{{ fullProductName }}</h3>
    <ul>
      <li v-for="(desc, index) in currentProduct.descriptions" :key="index">{{ desc }}</li>
    </ul>
    <button @click="addToCart">Добавить в корзину</button>
    <p>Количество штук в корзине: {{ cartCount }}</p>
    <button @mouseover="toggleProduct">Сменить подвид</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartCount: 0,
      brand: 'Chanel',
      products: [
        {
          name: 'Туалетная вода',
          descriptions: ['Бренд: Chanel', 'Пол: женский', 'Премиальная косметика: Да'],
          image: require('@/assets/image/image1.png')
        },
        {
          name: 'Туалетная вода',
          descriptions: ['Бренд: Chanel', 'Пол: женский', 'Премиальная косметика: Да'],
          image: require('@/assets/image/image2.png')
        }
      ],
      currentProductIndex: 0
    };
  },
  computed: {
    fullProductName() {
      return `${this.products[this.currentProductIndex].name} ${this.brand}`;
    },
    currentProduct() {
      return this.products[this.currentProductIndex];
    }
  },
  methods: {
    addToCart() {
      this.cartCount++;
    },
    toggleProduct() {
      this.currentProductIndex = this.currentProductIndex === 0 ? 1 : 0;
    }
  }
};
</script>

<style>
/* Добавьте стили по своему усмотрению */
</style>