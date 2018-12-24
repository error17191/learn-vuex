<template>
    <div class="sum">
        <numbers></numbers>
        {{sum}}
        <h3>You have generated  {{count}} total numbers</h3>
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
            count(){
                return this.$store.getters.count;
            }
        }
    }
</script>
