<template>
    <div class="sum">
        <numbers></numbers>
        {{sum}}
    </div>
</template>

<script>
    import Numbers from './Numbers';

    export default {
        name: 'sum',
        components: {Numbers},
        computed: {
            sum() {
                return this.$store.getters.sum;
            },
        }
    }
</script>
