<template>
  <div class="card header">
    <img :alt="name" :src="image" v-if="image">
    <h1>{{`Spend ${name} Money`}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String,
    image: String
  },
  methods: {
  }
}
</script>
