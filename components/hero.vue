<template>
    <div>
        <section id="home" class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 border-2 border-red-300">
                <p>Our Summer Collection</p>
                <h1>
                    <span>The New Arrival</span>
                    <br />
                    <span>Nike</span>
                    Shoes
                </h1>
                <p>
                    Discover stylish Nike arrivals, quality comfort, and innovation for you active life.
                </p>
                <ButtonUI label="Show now" iconURL={arrowRight} />
            </div>
        </section>
    </div>
</template>

<script setup>
    import arrowRight from '~/assets/icons/arrow-right.svg'
</script>