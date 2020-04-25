<template>
  <div class="navbar">
    <h1>{{appName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    appName: String
  }
}
</script>
