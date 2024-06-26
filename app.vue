<template>
	<div>
		<main class="relative">
			<Nav />
			<section class="xl:padding-1 wide:padding-r padding-b">
				<hero />
			</section>
			<section class="padding">
				<popularProducts />
			</section>
			<section class="padding">
				<superQuality />
			</section>
			<section class="padding-x py-10">
				<services />
			</section>
			<section class="padding">
				<specialOffer />
			</section>
			<CustomerReviews />
			<section class="padding-x sm:py-32 py-16 w-full bg-slate-500">
				<subscribe />
			</section>
			<section class="bg-black padding-x padding-t pb-8">
				<pageFooter />
			</section>
		</main>
	</div>
</template>

<script setup>
import { useHead } from 'nuxt/app'

const pageTitle = 'Nike App'

useHead({
  title: pageTitle,
})

const iconPath = './assets/favicon.ico' // Replace with your icon path

useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: iconPath },
  ],
})

</script>
