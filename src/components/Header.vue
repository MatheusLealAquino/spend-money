<template>
  <div class="header">
    <img alt="Vue logo" :src="image">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    image: String
  },
  methods: {
  }
}
</script>
