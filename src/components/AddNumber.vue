<template>
  <div>
    <a href="#" @click.prevent="fetchNumber">Add random number</a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'add-number',
    methods: {
      ...mapActions({
        fetchNumber: 'fetchNumber'
      })
    }
  }
</script>
