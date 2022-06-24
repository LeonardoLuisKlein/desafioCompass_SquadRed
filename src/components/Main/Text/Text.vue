<template>
    <div>
        <p type="text" :class="textClass"> {{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Text',
        props:{
            type:{
                type: String,
            },
            textClass:{
                type: String,
            },
            text:{
                type: String,
                default: 'null',
            },

        },
    }
</script>

<style lang="scss" scoped>
@import './Text.scss';
</style>