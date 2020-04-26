<template>
  <div class="card card__item">
    <img :alt="name" :src="image" v-if="image">
    <h2>{{name}}</h2>
    <h3>${{price}}</h3>

    <div class="card__footer">
      <button class="button button__danger">Sell</button>
      <input class="input" type="number"/>
      <button class="button button__success">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    image: String,
    name: String,
    price: String
  }
}
</script>
