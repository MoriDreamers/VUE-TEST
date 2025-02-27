<script setup>

</script>

<template>
    <div>
        <slot name="header">
            <p >默认值1</p>
        </slot>

        <slot name="footer">
            <p >默认值2</p>
        </slot>
        <slot name="aside">
            <p >默认值3</p>
        </slot>
    </div>
</template>

<style scoped>

</style>