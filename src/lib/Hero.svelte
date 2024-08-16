<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
</script>

<section class="hero max-w-screen flex items-center justify-center px-10 pb-10 pt-36">
	<Splide
		aria-label="My Favorite Images"
		hasTrack={false}
		class="mx-10 mt-10 flex h-full w-full flex-col items-center justify-between"
		options={{
			type: 'loop',
			perPage: 1,
			autoplay: true,
			interval: 3000,
			pauseOnHover: true,
			arrows: true,
			pagination: true
		}}
	>
		<div class="flex max-w-full items-center justify-between">
			<div class="splide__arrows">
				<button class="splide__arrow splide__arrow--prev">
					<img src="/prev.svg" alt="Previous arrow" />
				</button>
			</div>
			<SplideTrack>
				<SplideSlide class="text-center text-white">
					<h2 class="text-[3.5rem] font-bold">Leisure and Opportunity</h2>
					<p class="text-[1.2rem] font-bold">
						An online casino for entertainment and te opportunity to win big
					</p>
					<button class="button button-primary mt-3">Visit Website</button>
				</SplideSlide>

				<SplideSlide class="text-center text-white">
					<h2 class="text-[3.5rem] font-bold">Leisure and Opportunity</h2>
					<p class="text-[1.2rem] font-bold">
						An online casino for entertainment and te opportunity to win big
					</p>
					<button class="button button-primary mt-3">Visit Website</button>
				</SplideSlide>

				<SplideSlide class="text-center text-white">
					<h2 class="text-[3.5rem] font-bold">Leisure and Opportunity</h2>
					<p class="text-[1.2rem] font-bold">
						An online casino for entertainment and te opportunity to win big
					</p>
					<button class="button button-primary mt-3">Visit Website</button>
				</SplideSlide>

				<SplideSlide class="text-center text-white">
					<h2 class="text-[3.5rem] font-bold">Leisure and Opportunity</h2>
					<p class="text-[1.2rem] font-bold">
						An online casino for entertainment and te opportunity to win big
					</p>
					<button class="button button-primary mt-3">Visit Website</button>
				</SplideSlide>
			</SplideTrack>
			<div class="splide__arrows">
				<button class="splide__arrow splide__arrow--next">
					<img src="/next.svg" alt="Next arrow" />
				</button>
			</div>
		</div>

		<div class="splide__progress">
			<div class="splide__progress__bar" />
		</div>

		<ul class="splide__pagination" />
	</Splide>
</section>

<style>
	.hero {
		width: 100%;
		min-height: fit-content;
		background-image: url('/hero.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
	}

	.splide__arrow {
		width: 2rem;
		height: 2rem;
	}

	.splide__arrow img {
		height: 100%;
		width: 100%;
	}

	.splide__pagination :global(.splide__pagination__page.is-active) {
		background-color: #a39c6e;
	}
	.splide__pagination :global(.splide__pagination__page) {
		background-color: white;
		height: 8px;
		width: 8px;
		margin: 0 0.5rem;
	}

	.splide__pagination {
		margin-top: 7rem;
	}
</style>
