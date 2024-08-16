<script>
	import Hero from '$lib/Hero.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide/components';
</script>

<svelte:head>
	<title>Brinstar - Home</title>
</svelte:head>

<Hero />
<section class="relative bg-[#F4EEE2] py-28">
	<img src="/question-mark.svg" alt="question-mark" class="absolute" />
	<div class="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-12 px-10">
		<div class="space-y-5 text-black">
			<h3 class="text-5xl font-bold" style="line-height: 57px;">What is Brinstar about?</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur. Convallis ultricies proin feugiat eget. Cras egestas
				ultrices adipiscing tristique eu morbi nibh egestas. Ultricies sem augue id pretium at
				faucibus pulvinar ultricies. Consectetur ut viverra arcu massa justo. Iaculis dolor et et
				non orci faucibus gravida sit. Scelerisque amet viverra egestas cras. Risus donec tincidunt
				in volutpat tellus morbi pharetra. Mi amet at adipiscing phasellus eu eros tellus nunc sit.
				Augue ut pellentesque lacinia aliquet consequat volutpat tellus. Elementum non vulputate
				habitant elit amet bibendum. Nisl vulputate pellentesque donec posuere amet nibh. Pharetra
				sed nisl maecenas sapien sit ut integer. Ipsum tortor diam.
			</p>
			<button class="button button-primary">Join us</button>
		</div>
		<div>
			<img src="/about-img.png" alt="" />
		</div>
	</div>
</section>
<section class="relative bg-[#2E3221] py-28">
	<img src="/process.svg" alt="" class="absolute right-0" />
	<div class="relative z-10 text-white">
		<h3 class="mb-10 text-center text-4xl font-bold">The Process</h3>
		<div class="mx-auto grid max-w-5xl grid-cols-2 items-center gap-12 px-10">
			<div>
				<img src="process-people.png" alt="" />
			</div>
			<div class="space-y-5">
				<div class="space-y-2">
					<h4 class="text-xl font-bold">Specific Discussion</h4>
					<p class="text-sm font-bold">
						We will have a detailed discussion about what you’re looking for ...<a
							href="/"
							class="text-[#A39C6E]">VIEW MORE</a
						>
					</p>
				</div>

				<div class="space-y-2">
					<h4 class="text-xl font-bold">Specific Discussion</h4>
					<p class="text-sm font-bold">
						We will have a detailed discussion about what you’re looking for ...<a
							href="/"
							class="text-[#A39C6E]">VIEW MORE</a
						>
					</p>
				</div>

				<div class="space-y-2">
					<h4 class="text-xl font-bold">Specific Discussion</h4>
					<p class="text-sm font-bold">
						We will have a detailed discussion about what you’re looking for ...<a
							href="/"
							class="text-[#A39C6E]">VIEW MORE</a
						>
					</p>
				</div>

				<button class="button button-primary">Join us</button>
			</div>
		</div>
	</div>
</section>
<section class="relative bg-[#F4EEE2] py-28" id="about">
	<img src="/gear.svg" alt="" class="absolute w-[30%]" />
	<div
		class="absolute -top-[60px] left-[50%] w-fit translate-x-[-50%] rounded-[30px] border-[7px] border-[#F4EEE2] bg-[#A39C6E] px-44 py-10 text-white"
	>
		<h3 class="text-center text-4xl font-bold">Our Services</h3>
		<p class="text-center">What services can we help you with?</p>
	</div>
	<div class="relative z-10 mx-auto max-w-5xl">
		<Splide
			aria-label="My Favorite Images"
			hasTrack={false}
			class="mx-10 mt-20 flex h-full w-full flex-col items-center justify-between"
			options={{
				type: 'loop',
				perPage: 4,
				perMove: 1,
				wheel: true,
				autoplay: true,
				interval: 3000,
				pauseOnHover: true,
				arrows: true,
				pagination: true
			}}
		>
			<div class="flex max-w-full items-center justify-between">
				<SplideTrack>
					<SplideSlide class="mx-5 space-y-5 rounded-2xl bg-[#A39C6E] p-10 ">
						<img src="/service-icon.svg" alt="" />
						<p class="text-sm">
							Frontend/Backend/API development to turn your ideas into amazing features your
							audience can use.
						</p>
						<h4>Web Application development</h4>
					</SplideSlide>
					<SplideSlide class="mx-5 space-y-5 rounded-2xl bg-[#2E3221] p-10 text-white ">
						<img src="/service-icon.svg" alt="" />
						<p class="text-sm">
							Frontend/Backend/API development to turn your ideas into amazing features your
							audience can use.
						</p>
						<h4>Web Application development</h4>
					</SplideSlide>
					<SplideSlide class="mx-5 space-y-5 rounded-2xl bg-[#A39C6E] p-10 ">
						<img src="/service-icon.svg" alt="" />
						<p class="text-sm">
							Frontend/Backend/API development to turn your ideas into amazing features your
							audience can use.
						</p>
						<h4>Web Application development</h4>
					</SplideSlide>
					<SplideSlide class="mx-5 space-y-5 rounded-2xl bg-[#2E3221] p-10 text-white ">
						<img src="/service-icon.svg" alt="" />
						<p class="text-sm">
							Frontend/Backend/API development to turn your ideas into amazing features your
							audience can use.
						</p>
						<h4>Web Application development</h4>
					</SplideSlide>
					<SplideSlide class="mx-5 space-y-5 rounded-2xl bg-[#A39C6E] p-10 ">
						<img src="/service-icon.svg" alt="" />
						<p class="text-sm">
							Frontend/Backend/API development to turn your ideas into amazing features your
							audience can use.
						</p>
						<h4>Web Application development</h4>
					</SplideSlide>
					<SplideSlide class="mx-5 space-y-5 rounded-2xl bg-[#2E3221] p-10 text-white ">
						<img src="/service-icon.svg" alt="" />
						<p class="text-sm">
							Frontend/Backend/API development to turn your ideas into amazing features your
							audience can use.
						</p>
						<h4>Web Application development</h4>
					</SplideSlide>
				</SplideTrack>
			</div>

			<div class="splide__progress">
				<div class="splide__progress__bar" />
			</div>

			<div class="splide__arrows space-x-5">
				<button class="splide__arrow splide__arrow--prev">
					<svg
						width="36"
						height="20"
						viewBox="0 0 36 20"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M27.7792 11.1111H7.77917C7.15695 11.1111 6.66806 10.6222 6.66806 10C6.66806 9.37778 7.15695 8.88889 7.77917 8.88889H27.7792C28.4014 8.88889 28.8903 9.37778 28.8903 10C28.8903 10.6222 28.4014 11.1111 27.7792 11.1111Z"
							fill="currentColor"
						/>
						<path
							d="M13.3347 18.8889C13.189 18.8907 13.0445 18.8619 12.9106 18.8045C12.7766 18.7471 12.6562 18.6623 12.5569 18.5556L4.77916 10.7778C4.33472 10.3333 4.33472 9.64445 4.77916 9.2L12.5569 1.44445C13.0014 1 13.6903 1 14.1347 1.44445C14.5792 1.88889 14.5792 2.57778 14.1347 3.02223L7.13472 10.0222L14.1347 17.0222C14.5792 17.4667 14.5792 18.1556 14.1347 18.6C13.9125 18.8222 13.6236 18.9333 13.3569 18.9333L13.3347 18.8889Z"
							fill="currentColor"
						/>
					</svg>
				</button>

				<button class="splide__arrow splide__arrow--next">
					<svg
						width="36"
						class="rotate-180"
						height="20"
						viewBox="0 0 36 20"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M27.7792 11.1111H7.77917C7.15695 11.1111 6.66806 10.6222 6.66806 10C6.66806 9.37778 7.15695 8.88889 7.77917 8.88889H27.7792C28.4014 8.88889 28.8903 9.37778 28.8903 10C28.8903 10.6222 28.4014 11.1111 27.7792 11.1111Z"
							fill="currentColor"
						/>
						<path
							d="M13.3347 18.8889C13.189 18.8907 13.0445 18.8619 12.9106 18.8045C12.7766 18.7471 12.6562 18.6623 12.5569 18.5556L4.77916 10.7778C4.33472 10.3333 4.33472 9.64445 4.77916 9.2L12.5569 1.44445C13.0014 1 13.6903 1 14.1347 1.44445C14.5792 1.88889 14.5792 2.57778 14.1347 3.02223L7.13472 10.0222L14.1347 17.0222C14.5792 17.4667 14.5792 18.1556 14.1347 18.6C13.9125 18.8222 13.6236 18.9333 13.3569 18.9333L13.3347 18.8889Z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>

			<ul class="splide__pagination" />
		</Splide>
	</div>
</section>

<style>
	.splide__arrow {
		width: 2rem;
		height: 2rem;
		background-color: #fefadf;
		border-radius: 50%;
		color: #5f6c37;
	}

	.splide__arrow:hover {
		background-color: #5f6c37;
		color: white;
	}

	.splide__arrow svg {
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

	.splide__arrows {
		margin-top: 2rem;
	}

	.splide__pagination {
		display: none;
	}
</style>
