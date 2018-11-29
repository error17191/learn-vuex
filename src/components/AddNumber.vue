<template>
    <div>
        <a href="#" @click.prevent="add">Add random number</a>
    </div>
</template>

<script>

    export default {
        name: 'add-number',
        methods: {
            add() {
                this.$store.commit('addRandomNumber',
                    Math.floor(Math.random() * 100  + 1)
                )
            }
        }
    }
</script>
