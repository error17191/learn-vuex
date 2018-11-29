<template>
    <div>
        <ul v-if="numbers.length">
            <li v-for="number in numbers">{{ number }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'numbers',
        computed: {
            numbers() {
                return this.$store.getters.numbers
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
