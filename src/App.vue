<template>
  <div id="app">
    <Navbar appName="Spend Money"/>
    <div class="container">
      <Header
        v-if="headerName"
        :name="headerName"
        :image="headerImage"
      />
    </div>

    <div class="container container__row">
      <MoneyCard/>

      <div class="col-4" v-for="item in items" :key="item.name">
        <ItemCard
          :image="item.image"
          :name="item.name"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">@import './assets/style.scss';</style>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import MoneyCard from './components/MoneyCard.vue'
import ItemCard from './components/ItemCard.vue'
import { persons } from './constants/seed_person'
import { items } from './constants/seed_items'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    MoneyCard,
    ItemCard
  },
  data: () => ({
    items: []
  }),
  computed: {
    headerName: {
      get () {
        return this.$store.state.wallet.name
      }
    },
    headerImage: {
      get () {
        return this.$store.state.wallet.image
      }
    }
  },
  methods: {
    getPerson(id) {
      return persons.find(el => el.id === id)
    }
  },
  created () {
    const person = this.getPerson(1)
    this.$store.commit('wallet/setTotalAmount', person.totalAmount)
    this.$store.dispatch('wallet/increment', person.totalAmount)
    this.$store.commit('wallet/setName', person.name)
    this.$store.commit('wallet/setImage', person.image)

    this.items = items
  }
}
</script>
