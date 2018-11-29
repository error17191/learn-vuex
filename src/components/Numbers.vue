<template>
    <div>
        <ul v-if="numbers.length">
            <li v-for="number in numbers">{{ number }}</li>
        </ul>
        <div v-else>Start adding numbers</div>
        <add-number></add-number>
    </div>
</template>

<script>
    import AddNumber from "./AddNumber";
    export default {
        name: 'numbers',
        components: {AddNumber},
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
