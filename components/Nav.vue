<template>
    <div>
        <header class="padding-x py-8 absolute z-10 w-full">
            <nav class="flex justify-between items-center max-container">
                <a href="/">
                    <img :src="logoSrc" alt="Logo" width="130" height="29"/>
                </a>
            </nav>
        </header>
    </div>
</template>

<script setup>
    import logoSrc from '~/assets/images/header-logo.svg'
</script>