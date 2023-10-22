<script lang="ts" setup>
    const route = useRoute();
</script>

<template>
    <div>
        <p>{{ route.params.group }}</p>
    </div>
</template>
