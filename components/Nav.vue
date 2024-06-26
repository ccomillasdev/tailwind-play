<template>
    <div>
        <header class="padding-x py-8 absolute z-10 w-full">
            <nav class="flex justify-between items-center max-container">
                <a href="/">
                    <img :src="logoSrc" alt="Logo" width="130" height="29"/>
                </a>
                <ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    <li v-for="navLink,index in navLinks" :key="index"><a :href='navLink.href'>{{ navLink.label }}</a></li>

                </ul>
                <div class="hidden max-lg:block">
                    <img :src="hamburger" alt="hamburger" width="25" height="25" />
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
    import logoSrc from '~/assets/images/header-logo.svg'
    import hamburger from '~/assets/icons/hamburger.svg'

    const navLinks = [
        {
            href:"#home", label: "Home"
        },
        {
            href:"#about-us", label: "About Us"
        },
        {
            href:"#products", label: "Products"
        },
        {
            href:"#contact-us", label: "Contact Us"
        },
    ]
</script>